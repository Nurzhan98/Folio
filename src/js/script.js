// import hover from './modules/hover';

// window.addEventListener( 'DOMContentLoaded', () => {
//     'use strict';

//     hover();
// });

const hover = () => {
    function bindHover( linkSelector) {
        // let active = window.document.querySelectorAll(activeSlector),
        let  link = window.document.querySelectorAll(linkSelector);
            
        link.forEach( items => {
            items.addEventListener( 'mouseover', (e) => {
                e.preventDefault();
                // items.firstChild.style.display = 'flex';
                items.firstChild.nextSibling.style.display = 'flex';
            });
            items.addEventListener( 'mouseout', (e) => {
                e.preventDefault();
                // items.firstChild.style.display = 'flex';
                items.firstChild.nextSibling.style.display = 'none'
            });
            
            
        });
        
        // active.forEach( item => {
        //     item.addEventListener ( 'click', (e) => {
        //         if (e.target) {
        //             e.preventDefault();
        //         }

        //         active.forEach( item => {
        //             item.style.display = 'flex';
        //         });
        //         console.log(item.target);
        //     });
        // });
    }

    bindHover('.portfolio__link');
}

hover();