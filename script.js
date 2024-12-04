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
// const navbarHeight = document.querySelector('nav').offsetHeight;

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//     e.preventDefault();

//     const targetElement = document.querySelector(this.getAttribute('href'));
//     const elementPosition = targetElement.getBoundingClientRect().top;
//     const offsetPosition = elementPosition - navbarHeight;

//     window.scrollBy({
//       top: offsetPosition,
//       behavior: 'smooth'
//     });
//   });
// });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetElement = document.querySelector(this.getAttribute('href'));
      const elementPosition = targetElement.getBoundingClientRect().top;

      // Dynamically calculate the offset based on screen width
      const isMobileView = window.innerWidth <= 768; // Adjust breakpoint if needed
      const navbarHeight = document.querySelector('nav').offsetHeight;

      // Apply a different offset for mobile view
      const offsetPosition = isMobileView
        ? elementPosition - (navbarHeight + 180) // Add a buffer for mobile
        : elementPosition - navbarHeight;

      // Smooth scroll to the calculated position
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Optional: Close mobile menu after clicking
      if (isMobileView) {
        const mobileMenu = document.querySelector('.menu-links.open'); // Adjust selector if needed
        if (mobileMenu) {
          mobileMenu.classList.remove('open');
        }
      }
    });
  });

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            console.log("Card clicked", card); // Check which card was clicked

            // If the clicked card is already active, deactivate it
            if (card.classList.contains("active")) {
                console.log("Removing active class");
                card.classList.remove("active"); // Just remove 'active' to collapse
                console.log("CLASSNAME", card.className)
            } else {
                // Deactivate all other cards
                console.log("Removing active from other cards");
                cards.forEach((c) => c.classList.remove("active"));
                // Activate the clicked card
                console.log("Adding active class");
                card.classList.add("active");
            }
        });
    });
});
