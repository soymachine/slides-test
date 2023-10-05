import Section from './Section.js';
import Settings from '../settings.js';

class Presentation1 extends Section {

    constructor(id) {
       super(id)
       
       this.hideElements()
    }

    hideElements = ()=>{
        const el = $(`#${this.id} > .title, #${this.id} > .description, #${this.id} > .button`)
        el.css("opacity", '0')
    }

    onNodeEndIn = ()=>{
        anime({
            targets: `#${this.id} > .title, #${this.id} > .description, #${this.id} > .button`,
            opacity: 1,
            easing: Settings.easing,
            complete: function(anim) {
                
            }
        });

        anime({
            targets: `#${this.id} > .button`,
            translateY: [100, 0],
            easing: Settings.easing,
            complete: function(anim) {
                
            }
        });
    }

    onNodeEndOut = ()=>{
        this.hideElements()
    }
    
}



export default Presentation1;