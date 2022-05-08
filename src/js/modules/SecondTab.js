function SecondTab() {

    let tabSecond = document.querySelectorAll('.fourth-block__tabs-items__item');

    tabSecond.forEach(item => {
        item.addEventListener('click', ShowTab);
    });

    function ShowTab() {
        tabSecond.forEach(item => {
            item.classList.toggle('active');
        })
    };
}

module.exports = SecondTab;