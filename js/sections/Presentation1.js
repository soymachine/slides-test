import Settings from '../settings.js';
import Nodes from '../nodes.js';
import GlobalEvents from '../globalevents.js';
import Swipe from '../helpers/swipe.js';
import DOM from '../helpers/dom.js';
import Section from './Section.js';


class Presentation1 extends Section {

    constructor(id) {
        super(id)

        this.hideElements()

        this.events.subscribe(GlobalEvents.ON_SWIPE_GESTURE, ()=>{this.onSwipe()});

        // Posicionamos las imagenes

        this.splash = $(DOM.getElementID("pre-1-img-splash"))
        this.perfume = $(DOM.getElementID("pre-1-img-perfume"))

        this.events.subscribe(GlobalEvents.ON_LOADING_COMPLETED, ()=>{
            this.onLoad()
        });
    }

    onLoad(){
        super.onLoad()

        //*
        // Escalamos las imagenes
        this.scaleImage({
            img: this.perfume, 
            type:"pixels",
            value: this.height * .8,
            side: "height"
        })

        this.scaleImage({
            img: this.splash,
            type:"pixels",
            value: this.height * .8,
            side: "height"
        })
        //*/
        this.centerSplashPos = this.centerIMG("pre-1-img-splash")
        this.centerPerfumePos = this.centerIMG("pre-1-img-perfume")

    }

    onSwipe(gesture){

        if(Nodes.currentNodeID == this.id){
            if(gesture == Swipe.UP){
                this.events.notify(GlobalEvents.ON_REQUEST_NEW_NODE, "presentation-2");
            }
        }
    }

    hideElements(){
        const el = $(`#${this.id} > .title, #${this.id} > .description, #${this.id} > .button, #pre-1-img-splash, #pre-1-img-perfume`)
        el.css("opacity", '0')
    }

    onNodeEndIn(){
        super.onNodeEndIn();
        anime({
            targets: `#${this.id} > .title, #${this.id} > .description, #${this.id} > .button, #pre-1-img-splash, #pre-1-img-perfume`,
            opacity: 1,
            easing: Settings.easing,
            complete: function(anim) {
                
            }
        });

        anime({
            targets: `#pre-1-img-perfume`,
            translateY: [this.centerSplashPos.y + 100, this.centerSplashPos.y],
            easing: Settings.easing,
            complete: function(anim) {
                
            }
        });

        anime({
            targets: `#${this.id} > .button`,
            translateY: [100, 0],
            easing: Settings.easing
        });
    }

    onNodeEndOut(){
        this.hideElements()
    }
    
}



export default Presentation1;