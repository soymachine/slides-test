import GlobalEvents from '../globalevents.js';


class Loader {
    constructor() {
        this.content = document.querySelector('.content')
        this.events = GlobalEvents.getInstance()
        this.queue = {
            total: 0,
            length: 0,
            getProgress: function() {
                return (1 - (this.length / this.total)) * 100;
            },
        }
    
    }
   
    loadImage = (element)=> {
        // console.log(`${element}`)
        return new Promise((resolve, reject) => {

            element.addEventListener('load', () => {
                this.next();
                element.dataset.width = element.width
                element.dataset.height = element.height
                resolve(this);
            });
            element.addEventListener('error', () => {
                // console.log(`algo se ha cargado error`)
                element.remove();
                this.next();
                reject();
            });
            
            element.src = element.dataset.src;
        });
    }

    
    
    next = ()=> {
        this.queue.length -= 1;
        this.updateProgressBar();
    }
    
    updateProgressBar = () =>{
        console.log(`updateProgress: ${this.queue.getProgress()}%`)
        this.events.notify(GlobalEvents.ON_PROGRESS_LOADING, this.queue.getProgress());
    }

    load = ()=> {
        let elements = Array.from(document.images);
        this.queue.length += elements.length;
        this.queue.total += elements.length;
        // console.log(this.queue)
        const images = elements.map(element => {
            return this.loadImage(element).catch(() => {});
        });

        Promise.all(images).then(() => {
            setTimeout(() => {
                this.events.notify(GlobalEvents.ON_LOADING_COMPLETED);
             }, 500)
        });
    }
};


export default Loader;

// Loader.load();