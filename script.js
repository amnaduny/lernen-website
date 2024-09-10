//--- Smooth Scrolling Page ---//
// Select all anchor linksNavBar within the nav
const linksNavBar = document.querySelectorAll('.header .header-container nav a');
const imagesLogo = document.querySelectorAll('logo');

// Loop through each link
linksNavBar.forEach(link => {
    link.addEventListener('click', function(e) {
        // Prevent default behavior of href="#"
        e.preventDefault();

        // Get the target section class from data-target attribute
        const targetClass = this.getAttribute('data-target');
        const targetSection = document.querySelector(`.${targetClass}`);

        // Scroll to the section smoothly
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Loop through each link logo
imagesLogo.forEach(logo => {
    logo.addEventListener('click', function(e) {
        // Prevent default behavior of href="#"
        e.preventDefault();

        // Get the target section class from data-target attribute
        const targetClass = this.getAttribute('data-target');
        const targetSection = document.querySelector(`.${targetClass}`);

        // Scroll to the section smoothly
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

//--- End of Smooth Scrolling Page ---//

//--- Slider Wrapper Mentor Page ---//
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});
//--- End of Slider Wrapper Mentor Page ---//