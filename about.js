const buttons = document.querySelectorAll(".identity-btn");

const image = document.getElementById("identity-image");
const title = document.getElementById("identity-title");
const text = document.getElementById("identity-text");

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        // Remove active class
        buttons.forEach(function(btn){
            btn.classList.remove("active");
        });

        // Add active class
        button.classList.add("active");

        const identity = button.dataset.identity;

        if(identity === "developer"){

            image.src = "./assets/dev img.png";
            title.textContent = "The Developer";
            text.textContent = "I enjoy building clean, meaningful digital experiences while constantly learning new technologies and improving my problem-solving skills.";

        }

        else if(identity === "drummer"){

            image.src = "./assets/drummer.jpg";
            title.textContent = "The Drummer";
            text.textContent = "Drumming has taught me discipline, patience and consistency. Every practice session reminds me that growth comes through repetition.";

        }

        else if(identity === "faith"){

            image.src = "./assets/faith.jpg";
            title.textContent = "Faith";
            text.textContent = "My faith keeps me grounded. It reminds me to pursue excellence with humility and purpose in everything I do.";

        }

        else if(identity === "poet"){

            image.src = "./assets/poetry.jpg";
            title.textContent = "The Poet";
            text.textContent = "Poetry gives me a place to slow down, reflect and express emotions. It shapes the creativity I bring into both design and development.";

        }

    });

});