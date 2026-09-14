/* =====================================================
   NAVBAR.JS
   Handles navbar, mobile menu, typewriter and scroll reveal
===================================================== */

// Navbar scroll
const navbar = document.getElementById('navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
}


// Hamburger menu
const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('nav-drawer');

if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        drawer.classList.toggle('open');
    });
}


// Typewriter
const twEl = document.getElementById('tw-word');

if (twEl) {
    const words = [
        "websites",
        "responsive UIs",
        "React applications",
        "full-stack apps"
    ];

    let wi = 0;
    let ci = 0;
    let del = false;

    function type() {
        const word = words[wi];

        twEl.textContent = del
            ? word.slice(0, --ci)
            : word.slice(0, ++ci);

        if (!del && ci === word.length) {
            del = true;
            setTimeout(type, 1800);
            return;
        }

        if (del && ci === 0) {
            del = false;
            wi = (wi + 1) % words.length;
        }

        setTimeout(type, del ? 55 : 95);
    }

    type();
}


// Scroll reveal
const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll('.reveal').forEach(element => {
    io.observe(element);
});