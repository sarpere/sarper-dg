// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
    offset: 100
});

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ff6b9d'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ff6b9d',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Floating Hearts Animation
function createHeart() {
    const heartsContainer = document.querySelector('.hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Create hearts periodically
setInterval(createHeart, 800);

// Love Counter - Calculate time together
function updateCounter() {
    // Starting date: September 8, 2024
    const startDate = new Date('2024-09-08T00:00:00');
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Animate counter
    animateValue('days', 0, days, 2000);
    animateValue('hours', 0, hours, 2000);
    animateValue('minutes', 0, minutes, 2000);
    
    // Update seconds in real-time
    document.getElementById('seconds').textContent = seconds;
}

// Animate counter numbers
function animateValue(id, start, end, duration) {
    const element = document.getElementById(id);
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Update counter every second
updateCounter();
setInterval(() => {
    const startDate = new Date('2024-09-08T00:00:00');
    const now = new Date();
    const diff = now - startDate;
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('seconds').textContent = seconds;
}, 1000);

// Update full counter every minute
setInterval(updateCounter, 60000);

// Smooth scroll for scroll indicator
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    document.querySelector('.love-counter').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add sparkle effect on hover for gallery items
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 40px rgba(255, 107, 157, 0.6)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    });
});

// Add click animation to counter items
const counterItems = document.querySelectorAll('.counter-item');
counterItems.forEach(item => {
    item.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'pulse 0.5s ease-in-out';
        }, 10);
    });
});

// Confetti effect when page loads (after a delay)
window.addEventListener('load', () => {
    setTimeout(() => {
        createConfetti();
    }, 1000);
});

function createConfetti() {
    const colors = ['#ff6b9d', '#c44569', '#ffa07a', '#667eea', '#f093fb'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.opacity = '1';
            confetti.style.borderRadius = '50%';
            confetti.style.zIndex = '9999';
            confetti.style.pointerEvents = 'none';
            document.body.appendChild(confetti);
            
            const fallDuration = Math.random() * 3 + 2;
            const swingDistance = Math.random() * 200 - 100;
            
            confetti.animate([
                { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(100vh) translateX(${swingDistance}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: fallDuration * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            setTimeout(() => {
                confetti.remove();
            }, fallDuration * 1000);
        }, i * 30);
    }
}

// Easter egg: Click on the title 3 times for extra hearts
let titleClicks = 0;
document.querySelector('.hero h1').addEventListener('click', () => {
    titleClicks++;
    if (titleClicks === 3) {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => createHeart(), i * 100);
        }
        titleClicks = 0;
    }
});
