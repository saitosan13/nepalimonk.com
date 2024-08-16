document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    audio.volume = 0.2; // Adjust volume as needed

    // Example of adding magical effects
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            link.classList.add('clicked');
            setTimeout(() => link.classList.remove('clicked'), 500);
        });
    });

    // Example of 3D hover effect on the title
    const title = document.querySelector('.title');
    title.addEventListener('mouseover', () => {
        title.style.transform = 'rotateX(10deg) rotateY(10deg)';
    });

    title.addEventListener('mouseout', () => {
        title.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });

    // Ensure background music controls are present
    const music = document.getElementById('background-music');
    music.volume = 0.5;

    // Add event listeners to all links for a smooth transition effect
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transition = 'color 0.3s ease';
            link.style.color = '#ffb3b3';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#e0e0e0';
        });
    });

    // Contact form submission (mockup)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you soon.');
        contactForm.reset();
    });
});
