function FirstTab() {
    let tab = function (e) {
        let tabNav = document.querySelectorAll('.tab-block__tabs-items__item'),
            tabContent = document.querySelectorAll('.tab-block-slide'),
            tabName;
    
        tabNav.forEach(item => {
            item.addEventListener('click', selectTabNav)
        });
    
        function selectTabNav() {
            tabNav.forEach(item => {
                item.classList.remove('tab-block__tabs-items__item--active');
            });
            this.classList.add('tab-block__tabs-items__item--active');
            tabName = this.getAttribute('data-tab-name');
            selectTabContent(tabName);
        }
    
        function selectTabContent(tabName) {
            tabContent.forEach(item => {
                item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
            })
        }
    
    };
    
    
    tab();
}

module.exports = FirstTab;