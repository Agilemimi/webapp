// script.js - Option 1: Simple Smooth Scroll

document.addEventListener('DOMContentLoaded', function() {
    // Select all anchor links whose href starts with '#'
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prevent the default jump behavior
            e.preventDefault();

            // Get the target element's ID from the href attribute
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // If the target element exists, scroll to it smoothly
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
