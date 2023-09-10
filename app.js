// JavaScript code snippets here
var dots = document.querySelectorAll('.dot');
var currentIndex = 0;

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

var mobileIcon = document.querySelector('.mobile-icon');
var closeButton = document.querySelector('.close-button');
var topnav = document.querySelector('.topnav');

function toggleNav() {
  mobileIcon.style.display = 'none';
  closeButton.style.display = 'block';
  topnav.classList.add('active');
}

function closeNav() {
  mobileIcon.style.display = 'block';
  closeButton.style.display = 'none';
  topnav.classList.remove('active');
}

mobileIcon.addEventListener('click', function() {
  mobileIcon.style.display = 'none';
  closeButton.style.display = 'block';
  topnav.classList.add('active');
});

closeButton.addEventListener('click', function() {
  mobileIcon.style.display = 'block';
  closeButton.style.display = 'none';
  topnav.classList.remove('active');
});

window.addEventListener('scroll', function() {
  var topbar = document.getElementById('topbar');
  if (window.scrollY > 0) {
    topbar.classList.add('scroll-bg');
  } else {
    topbar.classList.remove('scroll-bg');
  }
});
