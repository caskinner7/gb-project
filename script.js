function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.addEventListener('scroll', function() {
    const headerElement = document.querySelector('#about-header');
    if (window.scrollY > 450) {
        headerElement.classList.add('enlarged');
    } else {
        headerElement.classList.remove('enlarged');
    }
});


document.addEventListener('scroll', function() {
    const headerElement = document.querySelector('#services-header');
    if (window.scrollY > 1300) {
        headerElement.classList.add('enlarged');
    } else {
        headerElement.classList.remove('enlarged');
    }
});

document.addEventListener('scroll', function() {
    const headerElement = document.querySelector('#memberships-header');
    if (window.scrollY > 2200) {
        headerElement.classList.add('enlarged');
    } else {
        headerElement.classList.remove('enlarged');
    }
});





document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');

    setTimeout(() => {
        splashScreen.style.opacity = '0'; // Start fade-out
        splashScreen.style.transition = 'opacity 0.3s ease-out' ; // Ensure smooth transition

        // Once the fade-out is complete, hide the splash screen and show main content
        splashScreen.addEventListener('transitionend', () => {
            splashScreen.style.display = 'none';
            document.body.style.overflow = 'auto'; // Show scrollbars if needed
        });
    }, 1200); // Adjust delay if needed
});

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');

next.addEventListener('click', function() {
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
})

prev.addEventListener('click', function() {
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1]);
})


//Navbar Scroll Behavior
const navbarHeight = document.querySelector('nav').offsetHeight;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute('href'));
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});
