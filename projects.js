/* =====================================================
   PROJECTS.JS — case study modal logic
===================================================== */

const caseStudies = {
    netflix: {
        title: "Netflix Clone",
        content: [
            "The goal of this project was to recreate the Netflix landing page using HTML and CSS while improving my frontend development skills.",
            "I focused on creating a clean and modern UI similar to the original Netflix website — navigation bar, hero section, background images, buttons, and multiple content sections.",
            "One of the biggest challenges was positioning elements correctly on top of background images and making the layout responsive. I solved this using Flexbox, media queries, and careful spacing.",
            "Through this project I improved my understanding of HTML structure, CSS styling, responsiveness, and layout design."
        ]
    },
    todo: {
        title: "To-Do App",
        content: [
            "The goal was to build a functional to-do app using HTML, CSS, and JavaScript.",
            "Users can add tasks, mark them as complete, and remove items. I kept the interface simple and intuitive.",
            "The main challenge was managing the task list in JavaScript and updating the DOM whenever the user made a change.",
            "This project helped me practise DOM manipulation, event handling, and building interactive frontend features."
        ]
    },
    search: {
        title: "Live Search Bar",
        content: [
            "Built with The Dev Club using HTML, CSS, and JavaScript.",
            "It features a live search bar that filters results as the user types — instant feedback with no page reload.",
            "I learned how to listen for keyboard input and update displayed results in real time.",
            "This project strengthened my understanding of JavaScript events and dynamic content updates."
        ]
    },
    drum: {
        title: "Drum Web",
        content: [
            "Drum Web is a personal project aimed at building a community for drummers of any skill level.",
            "The site includes sections for learning resources, community features, and project information.",
            "I focused on a welcoming layout that works across different screen sizes.",
            "This project helped me practise structuring content for a real audience and building multi-section websites."
        ]
    },
    youtube: {
        title: "YouTube Clone",
        content: [
            "The goal was to recreate the YouTube homepage using HTML and CSS while strengthening layout design skills.",
            "I built a responsive UI including a navigation bar, sidebar, search bar, video thumbnails, channel info, and structured content.",
            "The biggest challenge was organising the video grid responsively. I solved this with CSS Flexbox, Grid, and spacing techniques.",
            "This project improved my confidence in recreating real-world websites and building visually polished frontend projects."
        ]
    },
    bootstrap: {
        title: "Bootstrap Portfolio",
        content: [
            "The goal was to build a responsive website using Bootstrap while improving my understanding of frontend frameworks.",
            "I used Bootstrap's grid system, pre-built components, and utility classes alongside custom CSS for a polished look.",
            "The main challenge was customising Bootstrap components while keeping a consistent design.",
            "I gained practical experience with Bootstrap, responsive layouts, and combining frameworks with custom styling."
        ]
    },
    ihub: {
        title: "iHub Africa Website Prototype",
        content: [
            "The iHub Africa Website Prototype was our Sprint 5 Capstone Project — a responsive site communicating iHub Africa's mission, programmes, and impact.",
            "As a team we built Home, About, Programs, and Contact pages, focusing on accessibility and mobile responsiveness.",
            "My role was QA Tester: I identified layout issues, broken links, navigation problems, inconsistent styling, and form bugs, then communicated findings to the team.",
            "We used Git feature branches, pull requests, code reviews, and descriptive commit messages to collaborate effectively.",
            "The experience taught me that quality assurance is about viewing a product from the user's perspective — not just checking if code runs.",
            "Given more time we would add backend functionality, database integration, user registration, and further accessibility improvements."
        ]
    }
};

const modal      = document.getElementById('case-study-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody  = document.getElementById('modal-body');
const closeBtn   = document.getElementById('modal-close');

function openModal(key) {
    const study = caseStudies[key];
    if (!study) return;
    modalTitle.textContent = study.title;
    modalBody.innerHTML = study.content.map(p => `<p>${p}</p>`).join('');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

document.querySelectorAll('.case-study-btn').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.project));
});

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
