// Case study content for each project
const caseStudies = {
  netflix: {
    title: "Netflix Clone",
    content: [
      "The goal of this project was to recreate the Netflix landing page using HTML and CSS while improving my frontend development skills.",
      "During the project, I focused on creating a clean and modern user interface similar to the original Netflix website. The project included a navigation bar, hero section, background images, buttons, and multiple content sections.",
      "One of the biggest challenges I faced was positioning elements correctly on top of background images and making the layout responsive on different screen sizes. I solved this by using Flexbox, media queries, and better spacing techniques.",
      "Through this project, I improved my understanding of HTML structure, CSS styling, responsiveness, and layout design. It also helped me become more confident in building real-world frontend projects."
    ]
  },
  todo: {
    title: "To-do App",
    content: [
      "The goal of this project was to build a functional to-do app using HTML, CSS, and JavaScript.",
      "Users can add tasks, mark them as complete, and remove items from their list. I focused on keeping the interface simple and easy to use.",
      "The main challenge was managing the task list in JavaScript and updating the DOM whenever the user made a change.",
      "This project helped me practice DOM manipulation, event handling, and building interactive features on the frontend."
    ]
  },
  search: {
    title: "Live Search Bar",
    content: [
      "This project was built with The Dev Club using HTML, CSS, and JavaScript.",
      "It features a live search bar that filters results as the user types, giving instant feedback without reloading the page.",
      "I learned how to listen for keyboard input and update the displayed results in real time.",
      "This project strengthened my understanding of JavaScript events and dynamic content updates."
    ]
  },
  drum: {
    title: "Drum Web",
    content: [
      "Drum Web is a personal project aimed at building a community of drummers of any skill level who want to learn how to play drums.",
      "The site includes sections for learning resources, community features, and project information.",
      "I focused on creating a welcoming layout that works well on different screen sizes.",
      "This project helped me practice structuring content for a real audience and building a multi-section website."
    ]
  },
  youtube: {
    title: "YouTube Clone",
    content: [
      "The goal of this project was to recreate the YouTube homepage using HTML and CSS while strengthening my frontend development and layout design skills.",
      "During the project, I focused on building a clean and responsive user interface similar to the original YouTube website. The project included a navigation bar, sidebar, search bar, video thumbnails, channel information, and a structured content layout.",
      "One of the biggest challenges I faced was organizing the video grid and ensuring that the layout remained responsive across different screen sizes. I solved this by using CSS Flexbox, Grid, and spacing techniques to create a consistent and user-friendly design.",
      "Through this project, I improved my understanding of HTML structure, CSS styling, responsive design, and modern webpage layouts. It also gave me more confidence in recreating real-world websites and building visually appealing frontend projects."
    ]
  },
  bootstrap: {
    title: "Bootstrap Portfolio",
    content: [
      "The goal of this project was to build a responsive website using Bootstrap while improving my understanding of frontend frameworks and responsive web design.",
      "During the project, I focused on creating a clean and modern user interface using Bootstrap's grid system, pre-built components, and utility classes. The project included a responsive navigation bar, cards, buttons, and well-structured content sections that adapted to different screen sizes.",
      "One of the biggest challenges I faced was learning how to customize Bootstrap components while maintaining a consistent design. I solved this by combining Bootstrap's built-in classes with custom CSS to achieve the desired layout and styling.",
      "Through this project, I gained practical experience using the Bootstrap framework, improved my understanding of responsive layouts, and learned how to develop professional-looking websites more efficiently. It also strengthened my ability to combine frameworks with custom styling to create polished frontend projects."
    ]
  }
};

// Get modal elements from the page
const modal = document.getElementById("case-study-modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.getElementById("modal-close");

// Show the modal with the chosen project's case study
function openModal(projectKey) {
  const study = caseStudies[projectKey];
  if (!study) return;

  modalTitle.textContent = study.title;
  modalBody.innerHTML = study.content.map(function (paragraph) {
    return "<p>" + paragraph + "</p>";
  }).join("");

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

// Hide the modal
function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

// Open modal when a case study button is clicked
document.querySelectorAll(".case-study-btn").forEach(function (button) {
  button.addEventListener("click", function () {
    openModal(button.dataset.project);
  });
});

// Close modal with the X button
closeBtn.addEventListener("click", closeModal);

// Close modal when clicking the dark background
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Close modal with the Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
