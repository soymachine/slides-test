class DOM {
    // ANIME: https://animejs.com/documentation
}

export default DOM;

DOM.getElementID = (id)=>{
    return "#" + id
}

DOM.positon = (id, left, top)=>{
    
    anime.set(DOM.getElementID(id), {
        translateX: DOM.px(left),
        translateY: DOM.px(top),
    });
}

DOM.anime = (id, left, top, duration, ease, fn) =>{
    anime({
        targets: DOM.getElementID(id),
        translateX: DOM.px(left),
        translateY: DOM.px(top),
        duration: duration,
        easing: ease,
        complete: function(anim) {
            fn?.()
        }
    });
}

DOM.px = (amount)=>{
    return amount + "px";
}