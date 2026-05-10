document.addEventListener('DOMContentLoaded', () => {
    // =========================================
    // 1. THEME TOGGLE LOGIC
    // =========================================
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
    }

    // =========================================
    // 2. MOBILE DROPDOWN MENU LOGIC
    // =========================================
    const hamburgerBtn = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            // Toggles the "active" class on and off
            navLinks.classList.toggle('active');
        });
    }

    // =========================================
    // 3. SMOOTH SCROLLING
    // =========================================
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

            // Closes the mobile menu automatically when a link is clicked
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});
```eof

Replace your current code with this, ensure your `style.css` has that `display: flex !important;` rule for `.nav-links.active`, and give it a hard refresh. Your menu should drop down perfectly now!
