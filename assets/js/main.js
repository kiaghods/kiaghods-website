document.addEventListener('DOMContentLoaded', () => {
    // Initial theme setup
    document.body.classList.add('dark-mode');

    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to update active link
    function updateActiveLink() {
        const scrollPosition = window.scrollY;

        document.querySelectorAll('main > section').forEach(section => {
            const sectionTop = section.offsetTop - 100; // Adjust this value as needed
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const targetId = section.id;
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${targetId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });

        // Special case for the top of the page
        if (scrollPosition < 100) { // Adjust this value as needed
            navLinks.forEach(link => {
                if (link.getAttribute('href') === '#home') {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    }

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);

    // Update active link on page load
    updateActiveLink();

    // Add hover effect
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.classList.add('active');
        });
        link.addEventListener('mouseleave', () => {
            if (!isLinkActive(link)) {
                link.classList.remove('active');
            }
        });
    });

    function isLinkActive(link) {
        const href = link.getAttribute('href');
        const targetId = href.substring(1); // Remove the '#' from the href
        const targetSection = document.getElementById(targetId);
        if (!targetSection) return false;

        const rect = targetSection.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100; // Adjust these values as needed
    }
});