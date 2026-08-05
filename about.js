const buttons = document.querySelectorAll(".identity-btn");

const image = document.getElementById("identity-image");

const title = document.getElementById("identity-title");

const text = document.getElementById("identity-text");



const identities = {

    developer: {
        image: "./assets/developer.jpg",
        title: "The Developer",
        text: "I enjoy building clean, meaningful digital experiences while constantly learning new technologies and improving my problem-solving skills."
    },

    drummer: {
        image: "./assets/drummer.jpg",
        title: "The Drummer",
        text: "Drumming has taught me discipline, patience and consistency. Every practice session reminds me that growth comes through repetition."
    },

    poet: {
        image: "./assets/poet.jpg",
        title: "The Poet",
        text: "Poetry helps me communicate emotion and meaning. It inspires the creativity I bring into both design and development."
    },

    faith: {
        image: "./assets/faith.jpg",
        title: "Faith",
        text: "My faith keeps me grounded and reminds me to build with humility, purpose and excellence in everything I do."
    }

};

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        const identity = button.dataset.identity;

      if(identity === "developer"){

    image.src = "./assets/developer.jpg";

    title.textContent = "The Developer";

    text.textContent = "I enjoy building clean, meaningful digital experiences while constantly learning new technologies and improving my problem-solving skills.";

}
else if(identity === "drummer"){

    image.src = "./assets/drummer.jpg";

    title.textContent = "The Drummer";

    text.textContent = "Drumming has taught me discipline, patience and consistency. Every practice session reminds me that growth comes through repetition.";

}
else if(identity === "poet"){

    image.src = "./assets/poetry.jpg";

    title.textContent = "The Poet";

    text.textContent = "Poetry gives me a place to reflect and express emotions. It has shaped how I think creatively and communicate with purpose.";

}
else if(identity === "faith"){

    image.src = "./assets/faith.jpg";

    title.textContent = "Faith";

    text.textContent = "My faith keeps me grounded. It influences how I approach challenges, serve others and continue growing both personally and professionally.";

}

    });

});
