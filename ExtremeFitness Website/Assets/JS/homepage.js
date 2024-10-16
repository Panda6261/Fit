/* homepage.js */

// Smooth scroll for hero button
document.querySelector('.hero-section button').addEventListener('click', function() {
    document.querySelector('.features-section').scrollIntoView({
        behavior: 'smooth'
    });
});
