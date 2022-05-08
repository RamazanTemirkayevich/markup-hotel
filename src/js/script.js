window.addEventListener('DOMContentLoaded', () => {
    const FirstSlide = require('./modules/slideOne'),
        FirstTab = require('./modules/FirstTab'),
        SecondTab = require('./modules/SecondTab'),
        slideTwo = require('./modules/slideTwo');

    FirstSlide();
    FirstTab();
    SecondTab();
    slideTwo();
});