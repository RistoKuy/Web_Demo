// Fluid Animation
function fluidAnimation() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', fluidAnimation);
fluidAnimation();

// Dark Mode
const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');
const body = document.querySelector('body');

// Check for saved user preference, if any, on load of the website
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);

    if (currentTheme === 'dark-mode') {
        toggleSwitch.checked = true;
    }
}

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Pixabay API for randomized high-quality background image
const apiKey = '47202390-1425d924895558884d51e7a3e';
const query = 'nature'; // Query for background image
const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&per_page=50`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.hits.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.hits.length);
            const imageUrl = data.hits[randomIndex].largeImageURL; // Use largeImageURL for FHD images
            document.body.style.backgroundImage = `url(${imageUrl})`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundPosition = 'center';
            document.body.style.backgroundRepeat = 'no-repeat';
        }
    })
    .catch(error => console.error('Error fetching background image:', error));

// More Features
const moreFeatures = document.querySelector('.more-features');
const moreFeaturesContent = document.querySelector('.more-features-content');

moreFeatures.addEventListener('click', () => {
    moreFeaturesContent.classList.toggle('show');
});