const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle ('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove ('bx-x');
    navbar.classList.remove('open');
};



// --------------------------------------------------------------------------------

function searchCar() {

    const input = document.getElementById('filter').value.toUpperCase();

    const cardContainer = document.getElementById('card-lists');
    console.log(cardContainer);

    const cards = cardContainer.getElementsByClassName('box');
    console.log(cards)


    for(let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card-body h3.card-title");
        console.log(title)

        if(title.innerText.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }

}

//-------------------------------------------------------------------------------------------

const showPopupBtn = document.querySelector(".h-btn1");
const showPopupBtn2 = document.querySelector(".h-btn2"); // Add this line

const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
    formPopup.classList.remove("show-signup"); // Make sure the login form is shown
});

// Show signup popup when the "Sign Up" button is clicked
showPopupBtn2.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
    formPopup.classList.add("show-signup"); // Show the signup form
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

//-------------------------------------------------------------------------------------------
