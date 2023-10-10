import Screen from './helpers/screen.js';
import Node from './node.js';
import Nodes from './nodes.js';
import GlobalEvents from './globalevents.js';
import Background from './background.js';
import Settings from './settings.js';
import Doors from './transitions/doors.js';
import Swipe from './helpers/swipe.js';
import Loader from './helpers/loader.js';


$(document).ready(function(){
    const swipe = new Swipe(document.getElementById('container'))
    const nodes = new Nodes(Settings.margin, Settings.offset)

    if(Settings.is_background_active){
        const background = new Background("background", Settings.background_offset, Settings.background_top, Settings.background_left)
    }

    const doors = new Doors()

    const loader = new Loader()
    loader.load()


    // Gestión de la carga de imagenes e inicio de apertura de puertas
    const events = GlobalEvents.getInstance()
    // events.notify(GlobalEvents.ON_LOADING_COMPLETED);
    events.subscribe(GlobalEvents.ON_LOADING_COMPLETED, ()=>{
        $(".container").css("display", "block")
        //nodes.gotoNode("presentation-1")
        doors.open()
    });
    Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
        
    })


    if(Settings.isFPSEnabled){
        const fps = new FPS.FPS()

        // update function
        function update() {
            // do stuff like rendering and dancing
            fps.frame()
            requestAnimationFrame(update)
        }
    
        update()
    }

    // Version number
    $("#version").html(Settings.version)
});
