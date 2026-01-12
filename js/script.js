// Smooth scroll (if any internal links, but mostly for future)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Form validation (basic)
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        if (!form.checkValidity()) {
            e.preventDefault();
            alert('Please fill out all required fields.');
        }
        // No preventDefault otherwise; let mailto handle submission
    });
}
