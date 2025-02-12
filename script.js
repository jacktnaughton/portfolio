// Typing Effect
const typingEffect = document.getElementById('typing-effect');
const text = "Data Scientist | Researcher | Analyst";
let i = 0;

function type() {
    if (i < text.length) {
        typingEffect.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);  // Adjust speed here (100 ms per character)
    }
}

window.onload = type;
// Hamburger Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');
const links = document.querySelectorAll('nav a');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');  // Close the menu
    });
});
