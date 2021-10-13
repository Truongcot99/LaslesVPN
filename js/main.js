// slick
$(document).ready(function () {
    $('.customer-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button class="customer-icon icon-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="customer-icon icon-next"><i class="fas fa-arrow-right"></i></button>',

        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
})

const toggleBtn = document.querySelector('.header-toggle')
const closeBtn = document.querySelector('.menu-item--close')
const menu = document.querySelector('.menu')

toggleBtn.addEventListener('click', function () {
    menu.classList.toggle('active')
})

closeBtn.addEventListener('click', function () {
    menu.classList.remove('active')
})