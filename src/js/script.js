window.addEventListener('DOMContentLoaded', () => {
    const FirstSlide = require('./modules/slideOne'),
        FirstTab = require('./modules/FirstTab'),
        slideTwo = require('./modules/slideTwo');

    FirstSlide();
    FirstTab();
    slideTwo();
});