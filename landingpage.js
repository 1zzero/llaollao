
let lastScrollY = window.scrollY;
let scrollDirection = 'down';

function handleScroll() {
  const currentScrollY = window.scrollY;
  scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
  lastScrollY = currentScrollY;

  const sections = document.querySelectorAll('[data-section]');
  
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    const isInView = rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3;
    
    if (isInView) {
      const animatedElements = section.querySelectorAll('p, img');
      animatedElements.forEach(el => {
        el.classList.add('active');
      });
    } else {
      const animatedElements = section.querySelectorAll('p, img');
      animatedElements.forEach(el => {
        el.classList.remove('active');
      });
    }
  });
}

let scrollTimeout;
window.addEventListener('scroll', () => {
  if (scrollTimeout) {
    window.cancelAnimationFrame(scrollTimeout);
  }
  scrollTimeout = requestAnimationFrame(handleScroll);
});

handleScroll();

const carouselTrack = document.querySelector('.carousel-track');
const carouselItems = document.querySelectorAll('.carousel-item');
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');

let currentIndex = 1;

function updateCarousel() {
    carouselItems.forEach(item => item.classList.remove('carousel-center'));
    
    carouselItems[currentIndex].classList.add('carousel-center');
}

navLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

navRight.addEventListener('click', () => {
    if (currentIndex < carouselItems.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

updateCarousel();