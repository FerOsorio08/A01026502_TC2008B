//chatGPT
function getCursorPosition(event) {
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById("position").innerHTML = "X: " + x + " Y: " + y;
}
document.addEventListener("mousemove", getCursorPosition);

//q: give a function that shows the mouse position on screen
function showMousePosition(event) {
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById("mousePosition").innerHTML = "Posición del mouse: (" + x + "," + y + ")";
}
document.addEventListener("mousePosition", showMousePosition);

//CHATGPT
function showFullName() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const fullName = firstName + " " + lastName;
    document.getElementById("fullName").textContent = fullName;
}

const button = document.getElementById("submit-button");
button.addEventListener("click", showFullName);


//q: function that recieves a name a shows it on screen after submit
// function showName() {
//     const name = document.getElementById("name").value;
//     document.getElementById("output").textContent = "Your name is " + name;
// }

// const button = document.getElementById("submit-button");
// button.addEventListener("click", showName);



// Get the dropdown button and content
var dropdownBtn = document.querySelector(".dropdown-btn");
var dropdownContent = document.querySelector(".dropdown-content");

// Add click event listener to the button
dropdownBtn.addEventListener("click", function () {
    // Toggle the visibility of the dropdown content
    if (dropdownContent.style.display === "none") {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
});
