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
let pdfDoc = null,
    pageNum = 1,
    pageRendering = false,
    canvas = document.getElementById('pdf-canvas'),
    ctx = canvas.getContext('2d');

const url = 'images/cmj_presentation.pdf';

pdfjsLib.getDocument(url).promise.then(doc => {
    pdfDoc = doc;
    renderPage(pageNum);
});

function renderPage(num) {
    pageRendering = true;
    pdfDoc.getPage(num).then(page => {
        const viewport = page.getViewport({ scale: 1.5 });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        page.render({ canvasContext: ctx, viewport: viewport }).promise.then(() => {
            pageRendering = false;
            document.getElementById('page-info').textContent = `Page ${pageNum} of ${pdfDoc.numPages}`;
        });
    });
}

function prevPage() {
    if (pageNum <= 1) return;
    pageNum--;
    renderPage(pageNum);
}

function nextPage() {
    if (pageNum >= pdfDoc.numPages) return;
    pageNum++;
    renderPage(pageNum);
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
