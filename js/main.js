document.addEventListener("DOMContentLoaded", function() {
    // Example: Smooth scroll for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example: Dynamic Content Loading
    const contentSections = {
        home: `<h1 class="text-4xl font-bold">Welcome Home</h1><p>This is the home section.</p>`,
        about: `<h1 class="text-4xl font-bold">About Us</h1><p>Learn more about us here.</p>`,
        contact: `<h1 class="text-4xl font-bold">Contact Us</h1><p>Get in touch with us!</p>`
    };

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            const section = this.getAttribute('href').substring(1);
            document.querySelector('#home').innerHTML = contentSections[section];
        });
    });
});
