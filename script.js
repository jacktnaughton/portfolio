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
        const container = document.getElementById('pdf-viewer');
        const baseScale = window.innerWidth < 768 ? 0.5 : 0.8;
        const viewport = page.getViewport({ scale: baseScale });

        const outputScale = window.devicePixelRatio || 1;

        canvas.width = viewport.width * outputScale;
        canvas.height = viewport.height * outputScale;
        canvas.style.width = viewport.width + 'px';
        canvas.style.height = viewport.height + 'px';

        // ✅ Set scaling transform for sharp rendering
        ctx.setTransform(outputScale, 0, 0, outputScale, 0, 0);

        const renderContext = {
            canvasContext: ctx,
            viewport: viewport,
        };

        page.render(renderContext).promise.then(() => {
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
