const anchors = document.querySelector('.main-btn');

anchors.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector('#about-us').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
});