
// side-nav section working

var sidenav = document.querySelector(".side-nav")

function shownav(){
    sidenav.style.left = "0"
}

function closenav(){
    sidenav.style.left = "-55%"
}

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting

    // Get form fields
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    // Check if all fields are filled
    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill all the fields.");
    } else {
        alert("Form submitted successfully!");
        this.submit(); // Submits the form
    }
});

