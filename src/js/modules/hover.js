const hover = () => {
    function bindHover(triggerSelector, activeSlector) {
        let linkImg = window.document.querySelectorAll(triggerSelector),
            active = window.document.querySelectorAll(activeSlector);

        linkImg.forEach( item => {
            item.addEventListener ( 'change', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                active.forEach( item => {
                    item.style.display = 'flex';
                });
            });
        });
    }

    bindHover('.portfolio__link', ' .portfolio__item--active' );
}

export default hover;