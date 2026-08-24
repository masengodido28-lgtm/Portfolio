/* =====================================================
   THEME-TOGGLE.JS
   Handles dark / light mode with localStorage persistence
   and respects the user's OS preference on first visit.
===================================================== */

(function () {
    const STORAGE_KEY = 'portfolio-theme';
    const root = document.documentElement;

    /* ---- Determine initial theme ---- */
    function getInitialTheme() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) return stored;
        // Fall back to OS preference
        return window.matchMedia('(prefers-color-scheme: light)').matches
            ? 'light'
            : 'dark';
    }

    /* ---- Apply theme to <html> ---- */
    function applyTheme(theme) {
        if (theme === 'light') {
            root.setAttribute('data-theme', 'light');
        } else {
            root.removeAttribute('data-theme');
        }
        localStorage.setItem(STORAGE_KEY, theme);
        updateButtons(theme);
    }

    /* ---- Update all toggle buttons on the page ---- */
    function updateButtons(theme) {
        document.querySelectorAll('.theme-toggle').forEach(function (btn) {
            const sunIcon  = btn.querySelector('.icon-sun');
            const moonIcon = btn.querySelector('.icon-moon');
            if (!sunIcon || !moonIcon) return;
            if (theme === 'light') {
                sunIcon.style.display  = 'none';
                moonIcon.style.display = 'block';
                btn.setAttribute('aria-label', 'Switch to dark mode');
                btn.setAttribute('title', 'Switch to dark mode');
            } else {
                sunIcon.style.display  = 'block';
                moonIcon.style.display = 'none';
                btn.setAttribute('aria-label', 'Switch to light mode');
                btn.setAttribute('title', 'Switch to light mode');
            }
        });
    }

    /* ---- Toggle between modes ---- */
    function toggle() {
        const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        applyTheme(current === 'dark' ? 'light' : 'dark');
    }

    /* ---- Wire up buttons (runs once DOM is ready) ---- */
    function init() {
        applyTheme(getInitialTheme());
        document.querySelectorAll('.theme-toggle').forEach(function (btn) {
            btn.addEventListener('click', toggle);
        });
    }

    // Apply theme immediately to avoid flash
    applyTheme(getInitialTheme());

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
