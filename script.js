// Responsive viewport height
function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setVH);
setVH();

// Dark Mode Toggle
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const body = document.querySelector('body');
const toggleLabel = document.querySelector('.toggle-switch-label');
const toggleButton = document.querySelector('.toggle-switch-button');

// Check for saved user preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    if (currentTheme === 'dark') {
        body.classList.add('dark');
        toggleSwitch.checked = true;
        toggleLabel.classList.add('toggle-switch-label-checked');
    }
}

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        toggleLabel.classList.add('toggle-switch-label-checked');
    } else {
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        toggleLabel.classList.remove('toggle-switch-label-checked');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // ...existing animation code...
    const elements = document.querySelectorAll('[data-aos]');
    
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-aos-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.remove('opacity-0', 'translate-y-5');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    elements.forEach(element => {
        observer.observe(element);
    });

    // Add the toggle switch button
    const label = document.querySelector('.toggle-switch-label');
    const buttonSpan = document.createElement('span');
    buttonSpan.className = 'toggle-switch-button';
    
    if (toggleSwitch.checked) {
        buttonSpan.classList.add('toggle-switch-button-checked');
    }
    
    label.appendChild(buttonSpan);
    
    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            buttonSpan.classList.add('toggle-switch-button-checked');
        } else {
            buttonSpan.classList.remove('toggle-switch-button-checked');
        }
    });
});