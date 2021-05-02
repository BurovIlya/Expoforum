let searchIcon = document.getElementById('search-icon');
let closeIcon = document.getElementById('close-icon');
let navbar = document.querySelector('.header .navbar');
let searchWrapper = navbar.querySelector('.search-top-wrapper');
let duration = 500;
let elems = navbar.querySelectorAll('[data-visible]');

function setStatus(item, status) {
    item.setAttribute('data-visible', status);
}

function setVisible(status, direction) {
    
    if ( direction == 'toleft' ) {
       for ( let i = elems.length - 1; i >= 0; i-- ) {
        
         setTimeout(function(){setStatus(elems[i], 0);}, duration / elems.length);
          
       
        } 
    }
    
    if ( direction == 'toright' ) {
       for ( let i = 0; i < elems.length; i++ ) {
            setTimeout(function(){setStatus(elems[i], 1);}, duration / elems.length);
            
       } 
    }
    
}

function toggleSearchForm(){
    
    
    if(searchWrapper.classList.contains('search-top-hide')){
      setVisible(0, 'toleft');
      searchWrapper.classList.remove('search-top-hide');
      
      searchWrapper.classList.add('grow');
      
              
      setTimeout(function() {
        
        searchWrapper.classList.remove('grow');
         
    }, duration);
      
    }
    
    else {
       
      searchWrapper.classList.add('decrease');
      setVisible(1, 'toright'); 
       
      setTimeout(function() {
        
        //searchWrapper.classList.add('search-top-hide');
        searchWrapper.classList.remove('decrease');  
    }, duration);
    
      searchWrapper.classList.add('search-top-hide');
      //searchWrapper.classList.remove('decrease');
    
    }    
    
}

searchIcon.addEventListener('click', toggleSearchForm);
closeIcon.addEventListener('click', toggleSearchForm);