import Node from './node.js';
import Settings from './settings.js';
import GlobalEvents from './globalevents.js';

class Background {
    constructor(id, offset, top, left) {
        this.id = id // Esto será el nombre del div (string)
        this.offset = offset
        this.top = top
        this.left = left

        // Tiempo de duración de las animaciones
        this.duration = Settings.background_duration 

        const divName = this.getElementID(id)
        $(divName).css("top", top)
        $(divName).css("left", left)

        const events = GlobalEvents.getInstance()
        events.subscribe(GlobalEvents.ON_NODE_CHANGE, this.onChange);
    }

    getPosition = ()=> {
        return this.position
    }

    setPosition = (newPosition)=>{
        this.position = newPosition
    }

    onChange = (positionResult)=>{
        console.log(`nos hemos de mover a ${positionResult}`)
        // movemos el background según este cambio
        
        switch(positionResult){
            case Node.LEFT:
                this.left -= this.offset
                break;
            case Node.RIGHT:
                this.left += this.offset
                break;
            case Node.TOP:
                this.top -= this.offset
                break;
            case Node.BOTTOM:
                this.top += this.offset
                break;
        }

        $(this.getElementID(this.id)).animate({ top: this.top, left: this.left}, {duration:this.duration, easing: "easeInOutCubic"});
    }

    getElementID = (id)=>{
        return "#" + id
    }
}

export default Background;