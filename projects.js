/* =====================================================
   PROJECTS.JS — Case Study Modal Logic
===================================================== */

const caseStudies = {

    /* =====================================================
       NETFLIX CLONE
    ===================================================== */
    netflix: {
        title: "Netflix Clone",
        content: [
            {
                heading: "The goal",
                text: "I built the Netflix Clone as a frontend challenge to understand how a polished streaming platform can be recreated using fundamental web technologies. Instead of focusing only on making the page look similar, I wanted to understand how layout, imagery, typography, navigation, and visual hierarchy work together to create a recognisable product experience."
            },
            {
                heading: "The problem",
                text: "A streaming platform contains a large amount of visual content, but the interface still needs to feel organised and easy to navigate. The challenge was creating a layout that could present large images and content sections without making the page feel crowded or difficult to use."
            },
            {
                heading: "The solution",
                text: "I approached the project by breaking the interface into clear visual sections. The navigation provides access to the main areas of the platform, while the hero section creates the first visual focus. Content sections then guide the user through additional titles and categories."
            },
            {
                heading: "What I built",
                text: "The project includes a navigation bar, large hero section, background imagery, content rows, call-to-action buttons, text overlays, and responsive layouts. I paid particular attention to image positioning, contrast, spacing, and layering so that text remained readable over visual content."
            },
            {
                heading: "The hard parts",
                text: "One of the biggest challenges was working with layered content. Background images, gradients, text, buttons, and navigation elements all needed to work together. Responsive design added another challenge because a layout that looks strong on a large screen does not automatically work on a smaller one."
            },
            {
                heading: "The design decisions",
                text: "I focused on strong visual hierarchy rather than treating every element equally. The hero section receives the most attention, while supporting content is organised into structured sections. I also used spacing, contrast, and image placement to guide the user's attention through the page."
            },
            {
                heading: "Technology",
                text: "The project was built using HTML and CSS. I used CSS layout techniques, responsive behaviour, background images, overlays, spacing, and media queries to recreate the visual structure of the interface."
            },
            {
                heading: "What I learned",
                text: "This project strengthened my understanding of frontend layout and responsive design. More importantly, it taught me that recreating a professional interface requires understanding the design decisions behind the interface, not simply copying individual elements."
            },
            {
                heading: "The outcome",
                text: "The Netflix Clone became an important step in developing my ability to recreate real-world interfaces. It helped me become more confident with CSS layouts, responsive behaviour, visual hierarchy, and building interfaces that feel like complete products."
            }
        ]
    },


    /* =====================================================
       TO-DO APP
    ===================================================== */
    todo: {
        title: "To-Do App",
        content: [
            {
                heading: "The goal",
                text: "The To-Do App was one of my projects for moving from static webpages into interactive applications. I wanted to use JavaScript to build something where the interface changes based on what the user does rather than simply displaying fixed content."
            },
            {
                heading: "The problem",
                text: "A simple task list sounds straightforward, but it introduces an important development problem: the application needs to keep track of changing information while keeping the interface updated. Adding, completing, and deleting tasks all require the application state and the visible page to remain consistent."
            },
            {
                heading: "The solution",
                text: "I created a task-management interface where users can enter tasks, add them to the list, mark them as completed, and remove them. JavaScript controls the interaction and dynamically updates the DOM whenever the user performs an action."
            },
            {
                heading: "What I built",
                text: "The application contains a task input, task list, controls for completing tasks, and controls for removing tasks. Each task is treated as an individual piece of information that can be changed without refreshing the page."
            },
            {
                heading: "The hard parts",
                text: "The biggest challenge was understanding how to update the correct element after a user interaction. I had to work with event listeners, DOM selection, functions, and dynamically created elements while making sure one task did not accidentally affect another."
            },
            {
                heading: "The development process",
                text: "I approached the project by breaking the interaction into smaller actions: capture the user's input, create the task, display it, listen for completion actions, and provide a way to remove the task. This helped me understand how larger interactive features can be built from smaller pieces of logic."
            },
            {
                heading: "Technology",
                text: "The project was built using HTML, CSS, and JavaScript. JavaScript was responsible for event handling, DOM manipulation, and updating the interface based on user actions."
            },
            {
                heading: "What I learned",
                text: "This project changed the way I understood JavaScript. Instead of seeing JavaScript as something used only for small effects, I began to understand it as a way of creating application behaviour and connecting user actions to changes in the interface."
            },
            {
                heading: "The outcome",
                text: "The To-Do App gave me a strong foundation in DOM manipulation and event-driven development. These concepts became important for the more interactive projects I built afterwards."
            }
        ]
    },


    /* =====================================================
       LIVE SEARCH BAR
    ===================================================== */
    search: {
        title: "Live Search Bar",
        content: [
            {
                heading: "The goal",
                text: "Built with The Dev Club, the Live Search Bar project focused on creating an interface that responds immediately to user input. I wanted to understand how search and filtering functionality can be implemented on the frontend without requiring the user to submit a form or reload the page."
            },
            {
                heading: "The problem",
                text: "When users search through a list of information, they should not have to manually scan every item. A good search experience reduces the amount of information the user needs to process by showing only the results that are relevant to their input."
            },
            {
                heading: "The solution",
                text: "I built a search interface where JavaScript listens for changes to the user's input and immediately filters the available results. As the search term changes, the displayed content changes with it."
            },
            {
                heading: "How it works",
                text: "The application captures the search input, processes the user's term, compares it with the available items, and updates the DOM based on the matches. The search is handled dynamically so that the user receives feedback while typing."
            },
            {
                heading: "The hard parts",
                text: "Real-time filtering introduced several edge cases that needed to be considered. The search needed to behave consistently regardless of letter casing, handle an empty search field, and provide a useful result when no items matched the user's search."
            },
            {
                heading: "The development thinking",
                text: "This project taught me that even a small feature requires developers to think about different user behaviours. It is not enough for the search to work when the user enters an exact value. It also needs to behave predictably when the input is incomplete, empty, differently formatted, or has no match."
            },
            {
                heading: "Technology",
                text: "The project was built using HTML, CSS, and JavaScript. JavaScript was used for input events, filtering logic, and dynamic DOM updates."
            },
            {
                heading: "What I learned",
                text: "I developed a better understanding of event-driven interfaces and real-time filtering. The project also gave me a foundation that can be applied to larger features such as product filtering, searchable tables, directories, and data-driven interfaces."
            },
            {
                heading: "The outcome",
                text: "The Live Search Bar was a small project, but it helped me understand an important part of frontend development: giving users immediate feedback and making interfaces respond naturally to their actions."
            }
        ]
    },


    /* =====================================================
       DRUMWEB
    ===================================================== */
    drum: {
        title: "DrumWeb",
        content: [
            {
                heading: "The goal",
                text: "DrumWeb is a drum-learning and practice platform designed to help drummers develop their skills through structured learning and consistent practice. I wanted to combine my interest in drumming with my development skills to create something that solves a real problem for beginner and developing drummers."
            },
            {
                heading: "The problem",
                text: "Many drummers rely on scattered videos, exercises, and resources when trying to improve. This can make it difficult to know what to practise, where to start, and how to progress. I wanted DrumWeb to provide a more structured experience where users can learn rudiments, practise them, and gradually develop their technique."
            },
            {
                heading: "The solution",
                text: "I designed DrumWeb around three main ideas: Learn, Practise, and Become. The platform organises drum rudiments into clear categories and skill levels while providing a dedicated practice environment. The goal is to create an experience that encourages intentional and consistent practice rather than simply displaying information."
            },
            {
                heading: "Key features",
                text: "The platform includes a structured library of 40+ drum rudiments organised around Control, Speed, Coordination, Dynamics, and Timing. Rudiments are grouped by skill level so users can work through exercises progressively. The Practice Room is designed around tempo-based practice, supporting tempos from 40–180 BPM with 80 BPM as the default starting point."
            },
            {
                heading: "The design",
                text: "I wanted DrumWeb to feel like a modern music platform rather than a traditional educational website. I used a dark interface with strong accent colours, Poppins typography, card-based layouts, Bootstrap Icons, and clear visual hierarchy. The aim was to create a focused environment where users can concentrate on learning and practising."
            },
            {
                heading: "Technology",
                text: "The frontend is built using HTML, CSS, JavaScript, Bootstrap, and Bootstrap Icons. I am also planning the backend using Node.js, Express.js, and Supabase to support authentication, user accounts, saved practice data, and personalised features."
            },
            {
                heading: "The hard parts",
                text: "One of the biggest challenges was deciding how to organise a large amount of educational content without overwhelming the user. With more than 40 rudiments and multiple categories, the information needed to have a clear structure. I approached this using a progression of Category → Skill Level → Rudiment → Practice."
            },
            {
                heading: "My role",
                text: "I handled the concept, structure, design, frontend development, and technical direction of DrumWeb. I worked on the user experience, responsive layouts, rudiment organisation, practice experience, interactive functionality, and the planned architecture for authentication and backend functionality."
            },
            {
                heading: "What I learned",
                text: "DrumWeb taught me to think beyond individual pages and start thinking about products. I had to consider the user's journey, information architecture, scalability, responsiveness, and how different features could work together. It also showed me the importance of building around a real user problem instead of simply adding features because they are technically possible."
            },
            {
                heading: "Future improvements",
                text: "Future versions could include personalised practice plans, progress tracking, practice history, saved rudiments, user profiles, video lessons, audio demonstrations, metronome integration, practice streaks, community features, instructor accounts, and AI-powered practice recommendations."
            },
            {
                heading: "The outcome",
                text: "DrumWeb represents my ability to combine a personal interest with software development to create a product around a real problem. The project demonstrates my growing skills in frontend development, user experience, product thinking, responsive design, and planning scalable application functionality."
            }
        ]
    },


    /* =====================================================
       YOUTUBE CLONE
    ===================================================== */
    youtube: {
        title: "YouTube Clone",
        content: [
            {
                heading: "The goal",
                text: "After working on the Netflix Clone, I wanted to challenge myself with another familiar platform but with a different interface problem. YouTube combines navigation, search, sidebars, thumbnails, channel information, video metadata, and large amounts of content, making it a useful project for practising structured responsive layouts."
            },
            {
                heading: "The problem",
                text: "A video platform needs to display a large amount of information without making the interface overwhelming. Users need to quickly understand where they are, find content, scan video titles, recognise channels, and move between different sections."
            },
            {
                heading: "The solution",
                text: "I broke the interface into separate areas: top navigation, search, sidebar navigation, and a main content area containing video cards. This allowed me to organise the page around the way users would naturally scan and interact with a video platform."
            },
            {
                heading: "What I built",
                text: "The project includes a top navigation area, search interface, sidebar navigation, video thumbnails, video titles, channel information, and a structured content grid. I focused on making repeated video content visually consistent rather than designing each card as a separate element."
            },
            {
                heading: "The hard parts",
                text: "The main challenge was responsive behaviour. A multi-column video grid works well on larger screens but needs to adapt when there is less available space. The sidebar, navigation, cards, thumbnails, and text also need to remain usable when the viewport becomes smaller."
            },
            {
                heading: "The design decisions",
                text: "I used repeated card structures, consistent spacing, image proportions, and typography to create visual consistency. The layout was designed so that users could scan content quickly instead of having to process every piece of information individually."
            },
            {
                heading: "Technology",
                text: "The project was built using HTML and CSS, with Flexbox and CSS Grid used to structure the interface. Responsive techniques were used to adapt the layout to different screen sizes."
            },
            {
                heading: "What I learned",
                text: "The project improved my understanding of complex responsive layouts and reusable interface patterns. It also taught me that when an interface contains many repeated elements, consistency becomes an important part of usability."
            },
            {
                heading: "The outcome",
                text: "The YouTube Clone helped me become more comfortable designing interfaces with multiple layout systems working together. It strengthened my ability to structure content-heavy pages while keeping the interface organised and responsive."
            }
        ]
    },


    /* =====================================================
       BOOTSTRAP PORTFOLIO
    ===================================================== */
    bootstrap: {
        title: "Bootstrap Portfolio",
        content: [
            {
                heading: "The goal",
                text: "I built the Bootstrap Portfolio to understand how a frontend framework can help developers build responsive interfaces more efficiently. At this stage of my learning, I wanted practical experience using a framework instead of relying entirely on custom CSS."
            },
            {
                heading: "The problem",
                text: "Building responsive layouts from scratch can require a lot of repetitive CSS. I wanted to understand how Bootstrap's existing grid system, components, and utility classes could solve common layout problems while still allowing me to create my own visual identity."
            },
            {
                heading: "The solution",
                text: "I created a personal portfolio using Bootstrap as the foundation for responsive structure and interface components. I then combined Bootstrap utilities with custom CSS to control the appearance and make the website feel more personal."
            },
            {
                heading: "What I built",
                text: "The portfolio includes structured sections for presenting personal information, skills, and projects. Bootstrap was used to help organise the responsive layout while custom styling was used for the site's visual direction."
            },
            {
                heading: "The hard parts",
                text: "The biggest challenge was avoiding the appearance of a default Bootstrap template. I needed to understand which framework styles were useful and where custom CSS was necessary. I also had to learn how Bootstrap's responsive grid behaves at different breakpoints."
            },
            {
                heading: "The development approach",
                text: "Instead of fighting the framework, I treated Bootstrap as a foundation. I used its existing responsive behaviour where it made sense and added custom styling where I needed more control over the design."
            },
            {
                heading: "Technology",
                text: "The project was built using HTML, CSS, and Bootstrap. Bootstrap provided the responsive grid, utilities, and reusable interface components, while custom CSS was used to shape the visual identity."
            },
            {
                heading: "What I learned",
                text: "This project taught me how frameworks can speed up development when they are used intentionally. I also learned that using a framework does not mean giving up control over the design. Understanding the framework's structure makes it easier to extend or customise it."
            },
            {
                heading: "The outcome",
                text: "The Bootstrap Portfolio gave me practical experience with responsive frameworks and helped me understand the difference between building everything from scratch and building on top of an established frontend system."
            }
        ]
    },


    /* =====================================================
       iHUB AFRICA PROTOTYPE
    ===================================================== */
    ihub: {
        title: "iHub Africa Website Prototype",
        content: [
            {
                heading: "The goal",
                text: "The iHub Africa Website Prototype was developed as a team project focused on communicating iHub Africa's mission, programmes, and impact through a responsive website. The project also gave me experience working in a collaborative development environment while contributing from a quality assurance perspective."
            },
            {
                heading: "The problem",
                text: "A website representing an organisation needs to communicate information clearly while remaining easy to navigate across different devices. Beyond the visual design, the team also needed to make sure that links, forms, navigation, layouts, and interactions worked as expected."
            },
            {
                heading: "The solution",
                text: "Our team created a multi-page website covering Home, About, Programs, and Contact. We focused on responsive structure, clear navigation, consistent styling, and an experience that communicated the organisation's information in a structured way."
            },
            {
                heading: "My role",
                text: "My role on the project was QA Tester. I tested the website from the user's perspective and looked for layout problems, broken links, navigation issues, inconsistent styling, and form-related bugs. I communicated these issues to the team so they could be addressed during development."
            },
            {
                heading: "The testing process",
                text: "I approached testing by looking at the website as a user rather than only checking whether the code ran. I tested different pages, navigation paths, layouts, and interactions to identify problems that could affect the user's experience."
            },
            {
                heading: "Collaboration",
                text: "The project introduced me to a more structured team workflow. We worked with Git feature branches, pull requests, code reviews, and descriptive commit messages. This helped me understand how developers can work on the same codebase while keeping changes organised and easier to review."
            },
            {
                heading: "The hard parts",
                text: "One of the biggest challenges was recognising problems that might be easy for the person who built the feature to overlook. Testing required me to question whether an actual user would understand the navigation, whether links worked correctly, whether layouts remained usable, and whether different parts of the site behaved consistently."
            },
            {
                heading: "What I learned",
                text: "This project strengthened my understanding of quality assurance and showed me that testing is an important part of development rather than something that happens only at the end. It taught me to look at software from the user's perspective and communicate technical issues clearly to other developers."
            },
            {
                heading: "Future improvements",
                text: "With more development time, the prototype could be extended with backend functionality, database integration, user registration, dynamic programme information, and additional accessibility improvements."
            },
            {
                heading: "The outcome",
                text: "The project gave me practical experience in both collaborative development and software quality assurance. It helped me understand that a successful website is not only one that looks correct, but one that also works reliably for the people using it."
            }
        ]
    },


    /* =====================================================
       URBAN THREADS
    ===================================================== */
    urbanThreads: {
        title: "Urban Threads",
        content: [
            {
                heading: "The goal",
                text: "Urban Threads was created as an e-commerce clothing store concept where I could practise building a more realistic shopping experience. I wanted to move beyond a basic informational website and think about how a customer would actually browse and interact with an online store."
            },
            {
                heading: "The problem",
                text: "An e-commerce interface needs to balance visual presentation with usability. Clothing is a visual product, so the design needs to make products attractive while still giving users clear navigation and straightforward ways to explore what is available."
            },
            {
                heading: "The solution",
                text: "I designed Urban Threads around product discovery. The interface uses product-focused layouts, category-based browsing, navigation, and interactive elements to create a shopping experience that feels more like a real online store."
            },
            {
                heading: "What I built",
                text: "The project includes a clothing-store interface with product presentation, category-based browsing, navigation, and interactive shopping functionality. I focused on keeping the product content central while making the surrounding interface simple enough to navigate."
            },
            {
                heading: "The design",
                text: "The visual direction was based around a modern fashion aesthetic. I focused on product presentation, clean spacing, typography, responsive layouts, and clear calls to action. The goal was to make the interface visually appealing without allowing the design to interfere with the shopping experience."
            },
            {
                heading: "The hard parts",
                text: "One challenge was making the interface feel like an actual e-commerce product rather than a collection of static pages. Product cards, navigation, responsive behaviour, and interactive elements all needed to work together while keeping the interface visually balanced."
            },
            {
                heading: "Technology",
                text: "The project was built using HTML, CSS, and JavaScript. JavaScript was used to add interaction and make the interface respond to user actions rather than behaving like a collection of static pages."
            },
            {
                heading: "What I learned",
                text: "Urban Threads helped me understand how design and functionality need to work together in an e-commerce interface. I learned to think about how users browse products, how visual hierarchy affects the experience, and how responsive design changes the way an online store is used on different devices."
            },
            {
                heading: "The outcome",
                text: "Urban Threads gave me experience building a product-focused interface and helped me think more carefully about the relationship between visual design, user interaction, and the purpose of a website."
            }
        ]
    },


    /* =====================================================
       AIRBNB CLONE
    ===================================================== */
    airbnb: {
        title: "Airbnb Clone",
        content: [
            {
                heading: "The goal",
                text: "The Airbnb Clone was one of my biggest full-stack projects. My goal was to move beyond frontend-only development and build an application where the frontend, backend, database, authentication, listings, reservations, and deployment all communicate as one system."
            },
            {
                heading: "The problem",
                text: "A real accommodation platform involves much more than displaying properties. Users need to interact with listings, submit information, create reservations, and receive appropriate responses from the system. This required me to understand how data moves between the user interface, API, backend logic, and database."
            },
            {
                heading: "The solution",
                text: "I built the project as a full-stack application with separate frontend, backend, and admin-dashboard areas. The frontend communicates with a Node.js and Express backend through API requests, while MongoDB and Mongoose provide the database layer."
            },
            {
                heading: "What I built",
                text: "The application includes accommodation browsing, property listings, user functionality, reservation functionality, and a separate admin dashboard. The different parts of the application communicate through backend API endpoints rather than relying only on static frontend data."
            },
            {
                heading: "Authentication and data",
                text: "The backend uses authentication and protected functionality to manage users and application data. Passwords are handled using bcryptjs, JSON Web Tokens are used for authentication, and MongoDB with Mongoose provides the database layer."
            },
            {
                heading: "The reservation flow",
                text: "A major part of the application is the reservation flow. Users can select accommodation dates and guests before sending reservation information to the backend. The request then needs to pass through the API, backend logic, validation, and database model correctly."
            },
            {
                heading: "The hard parts",
                text: "The reservation system became one of the most valuable debugging experiences in the project. When the reservation request failed, I learned not to immediately assume that the frontend was responsible. I traced the problem through the frontend request, API URL, backend route, controller, model, database interaction, and deployment."
            },
            {
                heading: "How I debugged it",
                text: "I approached the problem systematically by separating the application into layers. First I checked what the frontend was sending, then whether the API endpoint was correct, then what the backend was receiving, and finally what was happening inside the database and deployed environment."
            },
            {
                heading: "Deployment",
                text: "I deployed the application using Render and worked through the differences between local development and a production environment. This gave me practical experience with environment variables, production server configuration, frontend and backend deployment, and debugging an application after deployment."
            },
            {
                heading: "Technology",
                text: "The project uses React for the frontend, Node.js and Express for the backend, MongoDB with Mongoose for data storage, JSON Web Tokens for authentication, bcryptjs for password handling, and Render for deployment."
            },
            {
                heading: "What I learned",
                text: "This project significantly improved my understanding of full-stack development. I learned that a feature is not complete simply because the frontend works. The frontend, API, backend logic, database models, authentication, validation, and deployment all have to communicate correctly."
            },
            {
                heading: "The outcome",
                text: "The Airbnb Clone was an important step in moving from frontend-focused projects towards complete web applications. More importantly, it taught me how to troubleshoot systematically instead of changing code randomly when something breaks."
            }
        ]
    },


    /* =====================================================
       ZAIO PORTFOLIO
    ===================================================== */
    zaio: {
        title: "ZAIO Portfolio",
        content: [
            {
                heading: "The goal",
                text: "The ZAIO Portfolio project gave me an opportunity to practise building a personal website that communicates who I am, what I can do, and the projects I have worked on. The project combined frontend development with personal branding and content structure."
            },
            {
                heading: "The problem",
                text: "A developer portfolio has to communicate a lot in a short amount of time. Visitors should be able to understand who the developer is, what they can build, what technologies they use, and how to explore their work without having to search through an unstructured page."
            },
            {
                heading: "The solution",
                text: "I structured the portfolio around clear sections that separate personal information, skills, projects, and other important content. The goal was to make the information easy to scan while still giving the website enough personality to represent me."
            },
            {
                heading: "What I built",
                text: "I created a personal portfolio experience with structured sections for my introduction, skills, projects, and personal information. The interface was designed to make navigation straightforward while allowing visitors to quickly understand my development journey."
            },
            {
                heading: "The design decisions",
                text: "I focused on visual hierarchy and section structure so that each part of the portfolio had a clear purpose. Rather than placing every piece of information on the page at once, I organised the content so that visitors could move through the portfolio naturally."
            },
            {
                heading: "The hard parts",
                text: "The biggest challenge was deciding what information actually belongs in a developer portfolio. I had to balance technical information with personality so that the site could communicate both my development skills and who I am as a person."
            },
            {
                heading: "The development thinking",
                text: "I began thinking about the portfolio as a product rather than simply another website. That meant considering the visitor's journey, what information they would look for first, and how the design could support the message I wanted to communicate."
            },
            {
                heading: "What I learned",
                text: "This project taught me that a portfolio is not only a collection of projects. It is a product that represents the developer behind it. I learned to think more carefully about content structure, personal branding, visual hierarchy, and how recruiters or clients might experience the site."
            },
            {
                heading: "The outcome",
                text: "The ZAIO Portfolio gave me experience combining development and personal branding. It also became part of the foundation for how I think about presenting my work and communicating my growth as a developer."
            }
        ]
    },


    /* =====================================================
       DRUM MACHINE
    ===================================================== */
    drumMachine: {
        title: "Drum Machine",
        content: [
            {
                heading: "The goal",
                text: "The Drum Machine project was created to combine my interest in drumming with my growing JavaScript skills. I wanted to build an interactive browser experience where user actions could trigger drum sounds and create an immediate connection between the interface and the result."
            },
            {
                heading: "The problem",
                text: "Music-related interfaces need to communicate interaction clearly. When a user presses a control, they should understand what it does and receive immediate feedback. This made the project a useful way to practise event handling while working with a more interactive type of interface."
            },
            {
                heading: "The solution",
                text: "I created an interactive drum interface where users can trigger different drum controls through the browser. The interface focuses on making the relationship between each control and its sound clear and immediate."
            },
            {
                heading: "What I built",
                text: "The project focuses on interactive drum controls that respond to user input. JavaScript connects those user interactions to the corresponding audio behaviour while the interface provides the visual controls needed to interact with the drum sounds."
            },
            {
                heading: "The hard parts",
                text: "The main challenge was connecting user interactions to audio behaviour while keeping the interface simple. I had to think about event handling, user feedback, and how the interface should respond when different controls are triggered."
            },
            {
                heading: "The development thinking",
                text: "This project helped me think about interaction as a complete user experience. The goal was not simply to make a sound play, but to make the connection between the user's action and the result feel clear and immediate."
            },
            {
                heading: "Technology",
                text: "The project uses HTML, CSS, and JavaScript. JavaScript handles the user interactions and connects the controls to the corresponding audio behaviour."
            },
            {
                heading: "What I learned",
                text: "This project helped me understand how JavaScript can connect user interactions to experiences beyond simply changing text or styles on a page. It also reinforced my interest in creating projects that combine technology with music."
            },
            {
                heading: "The outcome",
                text: "The Drum Machine gave me another practical way to explore JavaScript interaction while combining development with something I already enjoy. It also helped build the foundation for thinking about more advanced music-related web applications."
            }
        ]
    }
};


/* =====================================================
   MODAL ELEMENTS
===================================================== */

const modal = document.getElementById('case-study-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.getElementById('modal-close');


/* =====================================================
   RENDER CASE STUDY CONTENT
===================================================== */

function renderCaseStudyContent(content) {

    return content.map(block => {

        if (typeof block === 'string') {
            return `<p>${block}</p>`;
        }

        const heading = block.heading
            ? `<h3 class="modal__heading">${block.heading}</h3>`
            : '';

        return `
            ${heading}
            <p>${block.text}</p>
        `;

    }).join('');
}


/* =====================================================
   OPEN MODAL
===================================================== */

function openModal(key) {

    const study = caseStudies[key];

    if (!study) {
        console.warn(`No case study found for project: ${key}`);
        return;
    }

    modalTitle.textContent = study.title;

    modalBody.innerHTML = renderCaseStudyContent(study.content);

    modal.classList.add('open');

    document.body.style.overflow = 'hidden';
}


/* =====================================================
   CLOSE MODAL
===================================================== */

function closeModal() {

    if (!modal) return;

    modal.classList.remove('open');

    document.body.style.overflow = '';
}


/* =====================================================
   CASE STUDY BUTTONS
===================================================== */

document.querySelectorAll('.case-study-btn').forEach(btn => {

    btn.addEventListener('click', () => {

        const projectKey = btn.dataset.project;

        openModal(projectKey);

    });

});


/* =====================================================
   CLOSE BUTTON
===================================================== */

if (closeBtn) {

    closeBtn.addEventListener('click', closeModal);

}


/* =====================================================
   CLOSE WHEN CLICKING OUTSIDE MODAL
===================================================== */

if (modal) {

    modal.addEventListener('click', event => {

        if (event.target === modal) {
            closeModal();
        }

    });

}


/* =====================================================
   CLOSE WITH ESCAPE KEY
===================================================== */

document.addEventListener('keydown', event => {

    if (event.key === 'Escape') {
        closeModal();
    }

});