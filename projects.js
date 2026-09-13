/* =====================================================
   PROJECTS.JS — case study modal logic
===================================================== */

const caseStudies = {
    netflix: {
        title: "Netflix Clone",
        content: [
            { heading: "The goal", text: "I built this clone to recreate the Netflix landing experience with HTML and CSS, and to prove to myself that I could take a familiar, high-polish product and rebuild the feel of it from scratch. I was not trying to copy every pixel. I wanted a page that immediately felt like Netflix: dark atmosphere, strong hero, clear calls to action, and stacked content rows that invite you to keep scrolling." },
            { heading: "What I built", text: "The page includes a navigation bar, a full-width hero with overlay text and buttons, background imagery, and several content sections that group titles the way a streaming homepage would. I paid close attention to contrast, spacing, and how headings sit on top of images so the layout still reads clearly even when the photography is busy." },
            { heading: "The hard parts", text: "The biggest challenge was layering. Text, buttons, and gradients all had to sit on top of background images without looking messy or getting lost. On smaller screens the hero and the content rows fought for space, so I used Flexbox, media queries, and tighter spacing to keep the structure intact. Getting the overlay dark enough for readability without killing the image took more iteration than I expected." },
            { heading: "What I learned", text: "This project taught me how much of a real product page is layout discipline: consistent section structure, hierarchy, and responsive rules. I left it with a stronger sense of how to build a visually dense landing page that still feels organised, and with more confidence recreating interfaces people already recognise." }
        ]
    },
    todo: {
        title: "To-Do App",
        content: [
            { heading: "The goal", text: "I wanted a small, useful app that actually stored a list of tasks and responded to the user in real time. The To-Do App was my way of moving past static pages and into JavaScript that owns the interface: add a task, mark it complete, delete it, and see the list update without a page reload." },
            { heading: "What I built", text: "The interface is intentionally simple so the interaction stays obvious. Users type a task, add it to the list, tick items off, and remove anything they no longer need. Each action is wired through event listeners that create, update, or remove elements in the DOM rather than swapping whole pages." },
            { heading: "The hard parts", text: "The difficult part was not the markup. It was keeping the JavaScript list of tasks in sync with what was on screen. If I created a task in memory but forgot to render it, or deleted a node without updating the data, the UI lied. I had to think carefully about when to listen for clicks, how to target the right item, and how to rebuild or patch the list after every change." },
            { heading: "What I learned", text: "This is where DOM manipulation and event handling stopped feeling abstract. I practised writing functions that do one thing well, handling empty states, and making an interface that still feels calm when the list grows. It is a small app, but it is the kind of project that made later interactive work much less intimidating." }
        ]
    },
    search: {
        title: "Live Search Bar",
        content: [
            { heading: "The goal", text: "Built with The Dev Club, this project was about instant feedback. I wanted users to type into a search field and see matching results appear as they typed — no submit button, no page reload, just a list that tightens with every keystroke." },
            { heading: "What I built", text: "The page holds a search input and a set of results. JavaScript listens for input events, compares the current query against the available items, and shows only the matches. That makes the experience feel fast and keeps the user in control of how they scan the list." },
            { heading: "The hard parts", text: "Real-time filtering sounds simple until you handle casing, empty queries, and the moment when nothing matches. I had to decide whether a blank field should show everything or nothing, and I had to update the DOM often enough to feel live without turning the page into a mess of leftover nodes. Matching text as the user types also forced me to think about how people actually search, not just how I stored the data." },
            { heading: "What I learned", text: "This project sharpened my understanding of JavaScript events and dynamic content. It taught me to treat the UI as something that can change on every input, and it made later work with filters, search, and live previews much easier to reason about." }
        ]
    },
    drum: {
        title: "Drum Web",
        content: [
            { heading: "The goal", text: "Drum Web is personal. I am a drummer as well as a developer, and I wanted a site that could grow into a community for players at any skill level — a place to find resources, feel welcomed, and keep practising. This is not a clone of someone else's product. It is the start of something I actually want to exist." },
            { heading: "What I built", text: "The site is organised into sections for learning resources, community-oriented content, and project information. I designed it as a multi-section website rather than a single landing block, so visitors can move through ideas instead of hitting one hero and stopping. The layout is meant to feel open and inviting on both large screens and phones." },
            { heading: "The hard parts", text: "The challenge was content structure as much as styling. A community site needs a clear path: what is this, why should I stay, and where do I go next. I spent time grouping information so it did not feel like a dump of links, and I used responsive layout so the same story still works when the viewport shrinks. Balancing personality with a clean reading experience took more passes than a typical practice project." },
            { heading: "What I learned", text: "Building for a real audience changed how I think about pages. I practised writing HTML that can grow, CSS that holds a longer narrative together, and a tone that matches the people I want to reach. Drum Web is still developing, but it is the project that taught me to design around a purpose, not just around a layout exercise." }
        ]
    },
    youtube: {
        title: "YouTube Clone",
        content: [
            { heading: "The goal", text: "After the Netflix clone, I wanted a harder layout problem: a content-heavy homepage with a sidebar, a search bar, and a dense grid of videos. Recreating YouTube with HTML and CSS was a way to practise real-world interface density without losing hierarchy." },
            { heading: "What I built", text: "The page includes a top navigation bar, a sidebar, a search field, video thumbnails, channel information, and a structured content area. Each card had to carry a thumbnail, a title, and supporting details without colliding with its neighbours. I treated the homepage as a system of repeating units rather than one-off blocks." },
            { heading: "The hard parts", text: "The video grid was the main fight. On a wide screen it needs several columns; on a phone it has to collapse without looking sparse or cramped. I used Flexbox and CSS Grid together with consistent gaps so cards wrap cleanly. Aligning the sidebar with the main feed, and keeping search and navigation usable at every breakpoint, required more media-query work than the Netflix landing page." },
            { heading: "What I learned", text: "This project made me more comfortable with complex, repeating layouts and with recreating products that people use every day. I learned that polish on a grid comes from spacing, consistent card structure, and responsive rules that are decided early. It left me more confident building visually busy frontend pages that still feel organised." }
        ]
    },
    bootstrap: {
        title: "Bootstrap Portfolio",
        content: [
            { heading: "The goal", text: "I built this portfolio to learn how a frontend framework speeds up consistent, responsive layouts. The brief was to ship a personal site with Bootstrap's grid and components, then layer custom CSS so it still felt like mine rather than a default template." },
            { heading: "What I built", text: "I used Bootstrap's grid system, pre-built components, and utility classes for structure, then wrote custom CSS for colour, type, and the details that make a portfolio feel finished. The result is a multi-section site that stays aligned across breakpoints without me having to invent every layout rule from scratch." },
            { heading: "The hard parts", text: "Bootstrap is fast until you need it to look unique. Overriding component styles without breaking the grid, and mixing utilities with my own classes, was the main challenge. I had to learn when to accept a Bootstrap pattern and when to write custom CSS so the design stayed consistent instead of fighting the framework." },
            { heading: "What I learned", text: "I came away with practical experience combining a framework with custom styling, and a clearer sense of how responsive systems work when someone else has already solved the breakpoints. That knowledge still helps when I choose between writing layout from scratch and leaning on a library." }
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

function renderCaseStudyContent(content) {
    return content.map(block => {
        if (typeof block === 'string') {
            return `<p>${block}</p>`;
        }

        const heading = block.heading
            ? `<h3 class="modal__heading">${block.heading}</h3>`
            : '';

        return `${heading}<p>${block.text}</p>`;
    }).join('');
}

function openModal(key) {
    const study = caseStudies[key];
    if (!study) return;
    modalTitle.textContent = study.title;
    modalBody.innerHTML = renderCaseStudyContent(study.content);
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
