window.addEventListener('DOMContentLoaded', () => {
    const FirstTab = require('./modules/FirstTab'),
        SecondTab = require('./modules/SecondTab'),
        slide = require('./modules/slide');

    FirstTab();
    SecondTab();
    slide();
});