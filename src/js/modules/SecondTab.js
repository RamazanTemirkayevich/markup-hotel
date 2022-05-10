function SecondTab() {

    let tabSecond = document.querySelectorAll('.fourth-block__tabs-items__item');
    
    tabSecond.forEach(item => {
        item.addEventListener('click', selectTabNav);
    });

    function selectTabNav() {
        tabSecond.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.toggle('active');
    };
}

module.exports = SecondTab;