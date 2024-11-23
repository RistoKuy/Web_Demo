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

// More Features
const moreFeatures = document.querySelector('.more-features');
const moreFeaturesContent = document.querySelector('.more-features-content');

moreFeatures.addEventListener('click', () => {
    moreFeaturesContent.classList.toggle('show');
});