import GlobalEvents from '../globalevents.js';
import Screen from '../helpers/screen.js';
import DOM from '../helpers/dom.js';


class Section {

    constructor(id) {
        this.id = id
        this.node = $(`#${this.id}`)

        this.events = GlobalEvents.getInstance()
        this.events.subscribe(GlobalEvents.ON_NODE_START_IN, (nodeID)=>{
                if(nodeID == this.id) this.onNodeStartIn()
        });

        this.events.subscribe(GlobalEvents.ON_NODE_START_OUT, (nodeID)=>{
            if(nodeID == this.id) this.onNodeStartOut()
        });

        this.events.subscribe(GlobalEvents.ON_NODE_END_IN, (nodeID)=>{
            if(nodeID == this.id) this.onNodeEndIn()
        });

        this.events.subscribe(GlobalEvents.ON_NODE_END_OUT, (nodeID)=>{
            if(nodeID == this.id) this.onNodeEndOut()
        });
        
    }

    onLoad(){
        this.width = this.node.width()
        this.height = this.node.height()
    }

    
    scaleImage({type, value, side, img}){
        const imageW = img.attr("data-width")
        const imageH = img.attr("data-height")
        const proportionW = imageW / imageH
        const proportionH = imageH / imageW

        let w = 0
        let h = 0
        if(type == "percent"){
            // Percent
            if(side == "width"){
                w = imageW * value
                h = proportionH * w
            }else{
                h = imageH * value
                w = proportionW * h
            }
        }else{
            // Pixels
            if(side == "width"){
                w = value
                h = proportionH * w
            }else{
                h = value
                w = proportionW * h
            }
        }
        
        img.css("width", w)
        img.css("height", h)

        img.attr("data-width", w)
        img.attr("data-height", h)
    }

    centerIMG(id){
        const img = $(DOM.getElementID(id))
        const w = img.attr("data-width")
        const h = img.attr("data-height")
        
        const x = (this.node.width() * .5) - (w * .5)
        const y = (this.node.height() * .5) - (h * .5)

        DOM.positon(id, x, y)

        return {
            x:x,
            y:y
        }
    }
    

    onNodeStartIn(){
        
    }

    onNodeStartOut(){

    }

    onNodeEndIn(){

    }

    onNodeEndOut(){

    }

    
    
}



export default Section;