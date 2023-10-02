import Settings from '../settings.js';
import GlobalEvents from '../globalevents.js';
import DOM from '../helpers/dom.js';
import Screen from '../helpers/screen.js';


class Doors {
    constructor() {

        // Tiempo de duración de las animaciones
        this.duration = Settings.background_duration 

        const mid_top =  -(Screen.H * .5);
        const mid_bottom = Screen.H * .5;
        DOM.positon("top_door", 0, mid_top)
        DOM.positon("bottom_door", 0, mid_bottom)

        this.events = GlobalEvents.getInstance()
    }

    open = ()=>{
        const top = -Screen.H;
        const bottom = Screen.H;
        $(DOM.getElementID("top_door")).animate({ top: top, left: 0}, {duration:this.duration, easing: Settings.easing});
        $(DOM.getElementID("bottom_door")).animate({ top: bottom, left: 0}, {duration:this.duration, easing: Settings.easing, complete:this.onCompleteAnimation});

        this.events.notify(GlobalEvents.ON_DOORS_START_OPENING, {});
    }

    onCompleteAnimation = ()=>{
        console.log("onCOmpleteAnmation")
        this.events.notify(GlobalEvents.ON_DOORS_OPENED, {});
    }
}

export default Doors;