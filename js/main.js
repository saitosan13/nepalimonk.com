// GSAP Animations

// Title Animation
gsap.from(".title", {
    duration: 3,
    opacity: 0,
    y: -30,
    ease: "power2.out",
    delay: 1,
    onComplete: function() {
        gsap.to(".title", {
            duration: 3,
            opacity: 1,
            y: 0,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }
});

// Subtitle Animation with Typed.js
new Typed('.subtitle', {
    strings: [
        "Where Dreams Meet Reality...",
        "Explore the Surreal...",
        "Dive into the Unknown...",
        "Discover Hidden Mysteries..."
    ],
    typeSpeed: 60,
    backSpeed: 30,
    startDelay: 3000,
    backDelay: 2000,
    loop: true,
    showCursor: false
});

// Image Animation
gsap.from(".haunting-image", {
    duration: 5,
    opacity: 0,
    scale: 1.1,
    ease: "power3.out",
    delay: 2,
    onComplete: function() {
        gsap.to(".haunting-image", {
            duration: 5,
            scale: 1.05,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
});

// Gallery Hover Effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        gsap.to(item, {
            duration: 1,
            scale: 1.1,
            filter: "brightness(1.4) sepia(0.5)",
            ease: "power2.out"
        });
    });
    item.addEventListener('mouseout', () => {
        gsap.to(item, {
            duration: 1,
            scale: 1,
            filter: "brightness(1) sepia(0)",
            ease: "power2.in"
        });
    });
});

// Scroll Animation using ScrollMagic
const controller = new ScrollMagic.Controller();

document.querySelectorAll('section').forEach((section, index) => {
    const fadeInScene = new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 0.9,
        reverse: false
    })
    .setTween(gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 2,
        ease: "power2.out"
    }))
    .addTo(controller);
});

// Background Music Control
const backgroundMusic = document.getElementById('background-music');
backgroundMusic.volume = 0.5;
backgroundMusic.play();

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        backgroundMusic.pause();
    } else {
        backgroundMusic.play();
    }
});

// Otherworldly Heartwarming Melodies
function fadeInMusic() {
    gsap.to(backgroundMusic, {
        volume: 0.7,
        duration: 5,
        ease: "power2.inOut"
    });
}

function fadeOutMusic() {
    gsap.to(backgroundMusic, {
        volume: 0.2,
        duration: 5,
        ease: "power2.inOut"
    });
}

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 300) {
        fadeOutMusic();
    } else {
        fadeInMusic();
    }
});

// Particle.js Initialization
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
});
