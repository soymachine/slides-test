import GlobalEvents from '../globalevents.js';

class Swipe{

    constructor(container){
        var listener = SwipeListener(container);

        container.addEventListener('swipe', function (e) {
            var directions = e.detail.directions;
            var x = e.detail.x;
            var y = e.detail.y;
            let events = GlobalEvents.getInstance();
          
            if (directions.left) {
              console.log('Swiped left.');
              events.notify(GlobalEvents.ON_SWIPE_GESTURE, Swipe.LEFT);
            }
          
            if (directions.right) {
              console.log('Swiped right.');
              events.notify(GlobalEvents.ON_SWIPE_GESTURE, Swipe.RIGHT);
            }
          
            if (directions.top) {
              console.log('Swiped top.');
              events.notify(GlobalEvents.ON_SWIPE_GESTURE, Swipe.UP);
            }
          
            if (directions.bottom) {
              console.log('Swiped bottom.');
              events.notify(GlobalEvents.ON_SWIPE_GESTURE, Swipe.DOWN);
            }
          
           
          
            console.log('Started horizontally at', x[0], 'and ended at', x[1]);
            console.log('Started vertically at', y[0], 'and ended at', y[1]);
          });
    }
    /*
    constructor(el) {
        var touchsurface = el,
        swipedir,
        startX,
        startY,
        distX,
        distY,
        threshold = 150, //required min distance traveled to be considered swipe
        restraint = 100, // maximum distance allowed at the same time in perpendicular direction
        allowedTime = 300, // maximum time allowed to travel that distance
        elapsedTime,
        startTime,
        events = GlobalEvents.getInstance(),
        handleswipe = (swipedir)=>{
            events.notify(GlobalEvents.ON_SWIPE_GESTURE, swipedir);
        }

        // handleswipe = callback || function(swipedir){}
        // console.log(touchsurface)
        touchsurface.addEventListener('touchstart', function(e){
            var touchobj = e.changedTouches[0]
            swipedir = 'none'
            distX = 0
            distY = 0
            startX = touchobj.pageX
            startY = touchobj.pageY
            startTime = new Date().getTime() // record time when finger first makes contact with surface
            e.preventDefault()
        }, false)
      
        touchsurface.addEventListener('touchmove', function(e){
            e.preventDefault() // prevent scrolling when inside DIV
        }, false)
      
        touchsurface.addEventListener('touchend', function(e){
            var touchobj = e.changedTouches[0]
            distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
            distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
            elapsedTime = new Date().getTime() - startTime // get time elapsed
            
            
            if (elapsedTime <= allowedTime){ // first condition for awipe met
                
                // console.log(`touchend elapsedTime:${elapsedTime}`)
                
                if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                    swipedir = (distX < 0)? Swipe.LEFT : Swipe.RIGHT // if dist traveled is negative, it indicates left swipe
                }
                else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                    swipedir = (distY < 0)? Swipe.UP : Swipe.DOWN // if dist traveled is negative, it indicates up swipe
                }
            }

            console.log(`touchend elapsedTime:${elapsedTime} allowedTime:${allowedTime} threshold:${threshold} distX:${distX} distY:${distY} swipedir:${swipedir}`)

            handleswipe(swipedir)
            e.preventDefault()
        }, false)

        
    }
    */
}

Swipe.LEFT = "left"
Swipe.RIGHT = "right"
Swipe.UP = "up"
Swipe.DOWN = "down"

export default Swipe;