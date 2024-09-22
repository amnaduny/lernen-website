//--- Smooth Scrolling Page Header ---//
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

//--- End of Smooth Scrolling Page Header ---//

//--- Smooth Scrolling Page Footer ---//
// Select all anchor linksFooterBar within the list
const linksFooterBar = document.querySelectorAll('.footer-page .footer-container .footer-right ul li a');
const imagesFooterLogo = document.querySelectorAll('.footer-page .footer-container .logo');

// Loop through each link
linksFooterBar.forEach(link => {
    link.addEventListener('click', function(e) {
        // Prevent default behavior of href="#"
        e.preventDefault();

        // Get the target section class from data-target attribute
        const tgtClass = this.getAttribute('data-target');
        const tgtSection = document.querySelector(`.${tgtClass}`);

        // Scroll to the section smoothly
        if (tgtSection) {
            tgtSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

//--- End of Smooth Scrolling Page Footer ---//

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

//--- Modal Course Program ---//
function openModal()  
{ 
    // is-active class of the modal 
    document.getElementById("modal-course-program").classList.add("is-active"); 
} 

// Adding event listeners for closing the modal 
document.querySelectorAll( 
".modal-background, .modal-close," + 
".modal-card-head .delete" 
) 
    .forEach(($el) => { 
        const $modal = $el.closest(".modal"); 

        $el.addEventListener("click", () => { 
            // removing is-active class from modal 
            $modal.classList.remove("is-active"); 
        }); 


    }); 

const modal = document.querySelector('.modal');

// Add event listener to close the modal when pressing the 'Esc' key
document.addEventListener('keydown', function(event) {
    if (event.key == 'Escape') {
        modal.classList.remove('is-active');
    }
});

// Lernen WhatsApp number
const waNumber = '+6282337506356';

// Function to create WhatsApp link with a custom message
function createWhatsAppLink(message) {
    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/${waNumber}?text=${encodedMessage}`;
    window.open(waLink, '_blank');
}

// Add click event listeners to all participants
document.querySelectorAll('.participant').forEach(participant => {
    participant.addEventListener('click', function() {
        const message = this.getAttribute('data-message');
        createWhatsAppLink(message);
    });
});