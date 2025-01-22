const swiper = new Swiper('.swiper-container', {
    loop: true, // Enable continuous looping
    slidesPerView: 1, // Number of slides visible at a time
    spaceBetween: 20, // Space between slides in pixels
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // Responsive breakpoints
        768: {
            slidesPerView: 2, // Show 2 slides on medium devices
        },
        1024: {
            slidesPerView: 3, // Show 3 slides on large devices
        },
    },
});