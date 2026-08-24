/* =====================================================
   ABOUT.JS — identity card switcher
===================================================== */

const tabs   = document.querySelectorAll('.identity__tab');
const image  = document.getElementById('identity-image');
const title  = document.getElementById('identity-title');
const text   = document.getElementById('identity-text');

const identities = {
    developer: {
        src:   './assets/dev img.png',
        title: 'The Developer',
        text:  'I enjoy building clean, meaningful digital experiences while constantly learning new technologies and improving my problem-solving skills.'
    },
    drummer: {
        src:   './assets/drummer.jpg',
        title: 'The Drummer',
        text:  'Drumming has taught me discipline, patience, and consistency. Every practice session reminds me that growth comes through repetition.'
    },
    faith: {
        src:   './assets/faith.jpg',
        title: 'Faith',
        text:  'My faith keeps me grounded. It reminds me to pursue excellence with humility and purpose in everything I do.'
    },
    poet: {
        src:   './assets/poetry.png',
        title: 'The Poet',
        text:  'Poetry gives me a place to slow down, reflect, and express emotions. It shapes the creativity I bring into both design and development.'
    }
};

tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const data = identities[tab.dataset.identity];
        if (!data) return;

        // Fade out
        image.style.opacity = '0';
        setTimeout(function () {
            image.src          = data.src;
            title.textContent  = data.title;
            text.textContent   = data.text;
            image.style.opacity = '1';
        }, 180);
    });
});

// Smooth image fade transition
if (image) {
    image.style.transition = 'opacity 0.18s ease';
}
