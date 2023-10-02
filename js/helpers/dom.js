class DOM {
    
}

export default DOM;

DOM.getElementID = (id)=>{
    return "#" + id
}

DOM.positon = (id, left, top)=>{
    const divName = DOM.getElementID(id)
    $(divName).css("left", DOM.px(left))
    $(divName).css("top", DOM.px(top))
}

DOM.px = (amount)=>{
    return amount + "px";
}