document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // 1. THEME TOGGLE LOGIC
    // =========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const html = document.documentElement; 

    if (themeToggleBtn) {
        // Set initial emoji based on the starting theme
        themeToggleBtn.innerHTML = html.getAttribute('data-theme') === 'dark' ? '☕' : '🪶';

        // Listen for the click
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
    }

    // =========================================
    // 2. MOBILE DROPDOWN MENU LOGIC
    // =========================================
    const hamburgerBtn = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            // Toggles the dropdown open and closed
            navLinks.classList.toggle('active');
        });
    }

    // =========================================
    // 3. SMOOTH SCROLLING
    // =========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Safety check: Don't do anything if the link is just a blank "#"
            if (targetId === '#') return;

            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Automatically close the mobile menu after clicking a link!
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
});
```eof

Replace the code in both files, save them, wait 60 seconds (for GitHub Pages), and do a Hard Refresh. The Javascript is completely clean of typos, and the HTML is now structured perfectly to support it!
