document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Toggle Menu Function
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('active');
        // Toggle Burger Animation
        burger.classList.toggle('active');
        
        // Prevent background scrolling when menu is open
        if (nav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // Close menu when a link is clicked
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
});