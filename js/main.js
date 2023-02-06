const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    loop: true,
    autoplay: {
        delay: 4000
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


tailwind.config = {
    theme: {
        extend: {
            colors: {
                clifford: '#da373d',
                bgColor: '#E5E5E5',
                black: '#000000',
                orange: '#F76820',
                borderColor: '#E5E5E5',
            }
        }
    }
}
function openNav() {
    document.getElementById("myMobileMenu").style.width = "100%";
}

function closeNav() {
    document.getElementById("myMobileMenu").style.width = "0%";
}
