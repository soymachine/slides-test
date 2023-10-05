import GlobalEvents from '../globalevents.js';

class Section {

    constructor(id) {
        this.id = id
       
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

    onNodeStartIn = ()=>{
        
    }

    onNodeStartOut = ()=>{

    }

    onNodeEndIn = ()=>{

    }

    onNodeEndOut = ()=>{

    }


    
}



export default Section;