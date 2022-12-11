// Navbar Scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('myNav-scroll', window.scrollY > 100); 
});

// Questions Show-Hide
const boxElement = document.querySelectorAll('.questions__box');

boxElement.forEach(res => {
    res.addEventListener('click', () => {
        res.classList.toggle('box__open'); 

        // Change toggle icon
        const myIcon = res.querySelector('.box__icon i'); 
        if(myIcon.className === 'fa-solid fa-circle-chevron-down') {
            myIcon.className = 'fa-solid fa-circle-chevron-up'; 
        } else {
            myIcon.className = 'fa-solid fa-circle-chevron-down'; 
        }
    });
});

// Swiper Js Slide
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // For window width >= 600px 
    breakpoints: {
        600: {
            slidesPerView: 3, 
        }
    }
  });

// Media Queries Toggle Nav
const menu = document.querySelector('.nav__menu');
const openNav = document.querySelector('#open-menu');
const closeBtn = document.querySelector('#close-menu');

openNav.addEventListener('click', () => {
    menu.style.display = 'flex'; 
    closeBtn.style.display = 'inline-block'; 
    openNav.style.display = 'none'; 
});

const closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none'; 
    openNav.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNav); 
