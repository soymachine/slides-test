import Node from './node.js';
import Nodes from './nodes.js';
import GlobalEvents from './globalevents.js';
import Background from './background.js';

$(document).ready(function(){
    
    const nodes = new Nodes(30, 1000);
    const background = new Background("background", 350, -1000, -1000)

    Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
        $(".container").css("display", "block")
        nodes.gotoNode("presentation-1")
    });

    /*
    const arr =  [1, 2, 3, 4, 2, 5, 6, 3]
    const helper = {}
    
    const duplicates = arr.filter( num => {
        if(helper[num] == undefined){
            helper[num] = 1
            return false
        } else{
            return true
        }
    })
    console.log(duplicates)
    */
});
