// Light/Dark Mode Toggle
function toggleTheme() {
    // Toggle the dark mode class
    document.body.classList.toggle('dark-mode');
    
    // Save user preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Check and apply the saved theme preference on page load
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
};

// Smooth Scrolling for navigation
document.querySelectorAll('.tab button').forEach(button => {
    button.addEventListener('click', function(event) {
        const target = document.getElementById(this.innerText);
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Carousel functionality
let currentIndex = 0;

const slides = document.querySelectorAll('.carousel-slide img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {
    const totalSlides = slides.length;
    if (index < 0) currentIndex = totalSlides - 1;
    else if (index >= totalSlides) currentIndex = 0;
    document.querySelector('.carousel-slide').style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});
