document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    audio.volume = 0.2; // Adjust volume as needed

    const chillingSound = document.getElementById('chilling-sound');

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

    // Reveal hidden content
    const revealButton = document.getElementById('reveal-button');
    const secretContent = document.getElementById('secret-content');

    revealButton.addEventListener('click', () => {
        secretContent.style.display = 'block';
    });

    // Add chilling sound on hover
    const hauntingImage = document.querySelector('.haunting-image');
    hauntingImage.addEventListener('mouseover', () => {
        chillingSound.play();
    });
});
