document.addEventListener('DOMContentLoaded', () => {
    // Theme logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;

    function updateThemeBtn() {
        if (!themeToggleBtn) return;
        const isDark = html.getAttribute('data-theme') === 'dark';
        themeToggleBtn.innerHTML = isDark ? '☕ Light' : '🪶 Dark';
    }

    if (themeToggleBtn) {
        updateThemeBtn();
        themeToggleBtn.addEventListener('click', () => {
            const isDark = html.getAttribute('data-theme') === 'dark';
            if (isDark) {
                html.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
            } else {
                html.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
            updateThemeBtn();
        });
    }

    // Dynamic Nav logic
    const navRight = document.querySelector('.nav-right');
    const mainNavLinks = document.getElementById('main-nav-links');
    const dropdownContainer = document.getElementById('nav-dropdown');
    const dropdownBtn = dropdownContainer ? dropdownContainer.querySelector('.dropdown-btn') : null;
    const dropdownMenu = dropdownContainer ? dropdownContainer.querySelector('.dropdown-menu') : null;

    if (mainNavLinks && navRight && dropdownContainer) {
        const allLinks = Array.from(mainNavLinks.children);
        
        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isFlex = dropdownMenu.style.display === 'flex';
            dropdownMenu.style.display = isFlex ? 'none' : 'flex';
            dropdownBtn.innerHTML = isFlex ? 'Dropdown ▼' : 'Dropdown ▲';
        });

        document.addEventListener('click', (e) => {
            if (!dropdownContainer.contains(e.target)) {
                dropdownMenu.style.display = 'none';
                dropdownBtn.innerHTML = 'Dropdown ▼';
            }
        });

        function measureNav() {
            dropdownContainer.style.display = 'block'; 
            mainNavLinks.innerHTML = '';
            let hiddenLinks = [];
            
            for (let i = 0; i < allLinks.length; i++) {
                mainNavLinks.appendChild(allLinks[i]);
                // Check if links overflow nav-right (leaving some buffer)
                if (mainNavLinks.scrollWidth > navRight.clientWidth - 20) {
                    mainNavLinks.removeChild(allLinks[i]);
                    hiddenLinks.push(allLinks[i]);
                }
            }

            if (hiddenLinks.length > 0) {
                dropdownMenu.innerHTML = '';
                hiddenLinks.forEach(li => {
                    const clone = li.cloneNode(true);
                    dropdownMenu.appendChild(clone);
                });
            } else {
                dropdownContainer.style.display = 'none';
                dropdownMenu.innerHTML = '';
            }
        }

        window.addEventListener('resize', measureNav);
        // Delay to allow fonts/layout to settle
        measureNav();
        setTimeout(measureNav, 100);
    }
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const isHome = window.location.pathname.includes('index.html') || document.querySelector(targetId) !== null;
            if (!isHome && targetId !== '#home') return; 
            
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                const navHeader = document.querySelector('header');
                const navHeight = navHeader ? navHeader.offsetHeight : 0;
                const pos = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
                window.scrollTo({ top: pos, behavior: 'smooth' });
            }
        });
    });
});
