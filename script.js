// EVENT LISTENER

const dropdownButton = document.querySelectorAll(".dropdown-button");


// The e gets the button that is being pressed at the moment, otherwise I wouldn't be able to select a specific button

dropdownButton.forEach(button => {
    button.addEventListener("click", e => {
        const dropdownMenu = e.target.nextElementSibling;
        dropdownMenu.classList.toggle("visible");
    });
})




