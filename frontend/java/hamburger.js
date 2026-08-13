// Hamburger Menu Toggle Functionality
// This script handles the mobile hamburger menu toggle

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  // Toggle menu when hamburger is clicked
  hamburger.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent triggering document click
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when a link is clicked
  const navLinks = navMenu.querySelectorAll('li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.nav-bar')) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
});
