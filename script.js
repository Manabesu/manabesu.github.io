document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const html = document.documentElement; 

    // Sync the button text to whatever the <head> script decided
    if (themeToggleBtn) {
        if (html.getAttribute('data-theme') === 'dark') {
            themeToggleBtn.innerHTML = '☕';
        } else {
            themeToggleBtn.innerHTML = '🪶';
        }

        // Handle the toggle button click
        themeToggleBtn.addEventListener('click', () => {
            if (html.getAttribute('data-theme') === 'dark') {
                html.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                themeToggleBtn.innerHTML = '🪶';
            } else {
                html.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeToggleBtn.innerHTML = '☕';
            }
        });

            // Mobile Dropdown Menu Logic
        const hamburgerBtn = document.getElementById('hamburger');
        const navLinks = document.querySelector('.nav-links');
    
        if (hamburgerBtn && navLinks) {
            hamburgerBtn.addEventListener('click', () => {
                // Toggles the "active" class on and off
                navLinks.classList.toggle('active');
            });
        }
    }

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
