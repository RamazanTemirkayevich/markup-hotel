function FirstSlide() {
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = document.querySelector('.header-main__img');
    const track = document.querySelector('.header-main__img-track');
    const btnPrev = document.querySelector('.header-main__img-prev');
    const btnNext = document.querySelector('.header-main__img-next');
    const items = document.querySelectorAll('.header-main__img-track__item');
    const itemsCount = items.length;
    const itemWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
    });

    btnNext.addEventListener('click', () => {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    });

    btnPrev.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    };

    const checkBtns = () => {
        btnPrev.hidden = position === 0;
        btnNext.hidden = position <= -(itemsCount - slidesToShow) * itemWidth;
    };

    checkBtns();
}

module.exports = FirstSlide;