let activeCard;
let fl = false;

function togglify(card) {
   let header = card.children[0];
   let content = card.children[1];
   header.classList.toggle('extend');
   content .classList.toggle('hide-list'); 
}

function handler(event) {
   
   let target = event.target;
   let toggleCard = target.closest('.menu-item');
    
    if ( !toggleCard ) { return; }
    
    if ( !activeCard ) {
        togglify(toggleCard);
        activeCard = toggleCard;
    }
    
    else if ( toggleCard == activeCard ) {
        togglify(toggleCard);
        activeCard = null;
    }
    
    else {
       togglify(activeCard);
       togglify(toggleCard); 
       
       activeCard = toggleCard;
    } 
}

document.addEventListener('DOMContentLoaded', function(){
    
    if ( document.body.clientWidth >= 576 ) {
      return;
   }
    
    document.addEventListener('click', handler);
    fl = true;
    
});

window.onresize = function(){
    if ( document.body.clientWidth >= 576 ) {
        
        switch(fl) {
            case true:
               document.removeEventListener('click', handler);
               fl = false;
               break;
               
            case false:
                return;
                break; 
        }
    }    
    
    else {
        
        switch(fl) {
            case true:
              return;
              break;
              
            case false:
                document.addEventListener('click', handler);
                fl = true;        
        }
     }
};

