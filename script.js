document.addEventListener("DOMContentLoaded", function() {
    const text = document.querySelector(".typing");
    setTimeout(() => {
        text.style.borderRight = "none";
    }, 3000);

    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});

