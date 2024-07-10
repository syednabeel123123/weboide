const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.cards');

let currentIndex = 0;
const maxIndex = cards.length - 3; // Total cards - 3 (to display 3 at a time)

function showCards() {
  slider.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`; // Move slider
}

function slideNext() {
  if (currentIndex < maxIndex) {
    currentIndex++;
    showCards();
  }
}

function slidePrev() {
  if (currentIndex > 0) {
    currentIndex--;
    showCards();
  }
}

// Event listeners for buttons or navigation
// Example: Assuming you have next and previous buttons
document.getElementById('nextBtn').addEventListener('click', slideNext);
document.getElementById('prevBtn').addEventListener('click', slidePrev);



window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

// Navbar Responsive for small Devices  
document.getElementById('menu-toggle').addEventListener('click', function () {
  var navLinks = document.querySelector('.nav-links');
  var menuToggle = document.getElementById('menu-toggle');
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('change');
});

// Auto Fixing Scrolling Image any Device Screen 

// window.addEventListener('scroll', function() {
//   var images = document.querySelectorAll('.portfolio-card-img img');
//   images.forEach(function(img) {
//       if (window.scrollY > 1200) {
//           img.style.bottom = 'auto';
//       } else {
//           img.style.bottom = '-468px';
//       }
//   });
// });
