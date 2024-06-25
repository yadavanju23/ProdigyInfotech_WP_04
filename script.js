document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const scrollLinks = document.querySelectorAll('.nav-links a');

    scrollLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


    // Form submission handling
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // You can perform form validation here if needed
        // For simplicity, we assume all fields are valid
        const formData = new FormData(contactForm);
        const formDataObject = Object.fromEntries(formData.entries());

        console.log(formDataObject); // Example: Log form data object

        // Simulate form submission (replace with actual form submission logic)
        setTimeout(() => {
            alert('Message sent successfully!');
            contactForm.reset(); // Reset form fields
        }, 1000);
    });
});
