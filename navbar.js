// ===================== NAVBAR =====================

// Navbar scroll
const navbar = document.getElementById('navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
}


// ===================== HAMBURGER =====================

const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('nav-drawer');

if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        drawer.classList.toggle('open');
    });
}


// ===================== PROJECTS DROPDOWN =====================

const projectsToggle = document.getElementById('projects-toggle');
const projectsDropdown = document.querySelector('.mobile-dropdown');

if (projectsToggle && projectsDropdown) {
    projectsToggle.addEventListener('click', () => {
        projectsDropdown.classList.toggle('active');
    });
}


// ===================== TYPEWRITER =====================

const twEl = document.getElementById('tw-word');

if (twEl) {
    const words = [
        'fast websites.',
        'clean UIs.',
        'robust APIs.',
        'great products.'
    ];

    let wi = 0;
    let ci = 0;
    let del = false;

    (function type() {
        const w = words[wi];

        twEl.textContent = del
            ? w.slice(0, --ci)
            : w.slice(0, ++ci);

        if (!del && ci === w.length) {
            del = true;
            setTimeout(type, 1800);
            return;
        }

        if (del && ci === 0) {
            del = false;
            wi = (wi + 1) % words.length;
        }

        setTimeout(type, del ? 55 : 95);
    })();
}


// ===================== SCROLL REVEAL =====================

const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));