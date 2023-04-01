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

//CHATGPT
function addRow() {
    // Get the table
    var table = document.getElementById("myTable");

    // Create a new row and cells
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();

    // Add some text to the new cells
    cell1.innerHTML = "New Row, Column 1";
    cell2.innerHTML = "New Row, Column 2";
    cell3.innerHTML = "New Row, Column 3";
}

const button1 = document.getElementById("submit-row");
button1.addEventListener("click", addRow);

function addColumn() {
    // Get the table
    var table = document.getElementById("myTable");

    // Get the number of rows in the table
    var numRows = table.rows.length;

    // Add a cell to each row in the table
    for (var i = 0; i < numRows; i++) {
        var cell = table.rows[i].insertCell();
        cell.innerHTML = "New Column";
    }
}

const button2 = document.getElementById("submit-column");
button2.addEventListener("click", addColumn);

//q: function that adds a row and a column to a table
// function addRow() {
//     const table = document.getElementById("myTable");
//     const row = table.insertRow();
//     const cell1 = row.insertCell();
//     const cell2 = row.insertCell();
//     const cell3 = row.insertCell();
//     cell1.innerHTML = "New Row, Column 1";
//     cell2.innerHTML = "New Row, Column 2";
//     cell3.innerHTML = "New Row, Column 3";
// }




//CHATGPT
function setValue(row, col, value) {
    // Get the table and the specified cell
    var table = document.getElementById("MyTable");
    var cell = table.rows[row].cells[col];

    // Set the value of the cell
    cell.innerHTML = value;
}

const setValueBtn = document.getElementById("setValueBtn");
setValueBtn.addEventListener("click", function () {
    const row = document.getElementById("row").value - 1;
    const col = document.getElementById("col").value - 1;
    const value = document.getElementById("value").value;
    setValue(row, col, value);
});

//q: function that sets a value in a table cell
// function setValue(row, col, value) {
//     const table = document.getElementById("myTable");
//     const cell = table.rows[row].cells[col];
//     cell.innerHTML = value;
// }



//CHATGPT
function addRandomColor() {
    // List of colors to choose from
    var colors = ["Red", "Green", "Blue", "Yellow", "Orange", "Purple"];

    // Get the select element
    var select = document.getElementById("colorSelect");

    // Choose a random color from the list
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Create a new option element and add the random color
    var option = document.createElement("option");
    option.text = randomColor;
    select.add(option);
}


function removeRandomColor() {
    // Get the select element
    var select = document.getElementById("colorSelect");

    // Choose a random option index to remove
    var randomIndex = Math.floor(Math.random() * select.options.length);

    // Remove the selected option
    select.remove(randomIndex);
}
// Add event listeners to the buttons

const addColorBtn = document.getElementById("addColor");
addColorBtn.addEventListener("click", addRandomColor);

const removeColorBtn = document.getElementById("removeColor");
removeColorBtn.addEventListener("click", removeRandomColor);


//q: function that adds a random color to a select element
// function addRandomColor() {
//     const colors = ["Red", "Green", "Blue", "Yellow", "Orange", "Purple"];
//     const select = document.getElementById("colorSelect");
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     const option = document.createElement("option");
//     option.text = randomColor;
//     select.add(option);
// }

// function removeRandomColor() {
//     const select = document.getElementById("colorSelect");
//     const randomIndex = Math.floor(Math.random() * select.options.length);
//     select.remove(randomIndex);
// }


//ChatGPT
function changeCatImage() {
    // Generate random width and height values between 300 and 600
    var width = Math.floor(Math.random() * 301) + 300;
    var height = Math.floor(Math.random() * 301) + 300;

    // Set the new dimensions in the HTML
    document.getElementById("width").innerHTML = width;
    document.getElementById("height").innerHTML = height;

    // Replace the cat image with a new one of the generated dimensions
    document.getElementById("catImage").src = "https://placekitten.com/" + width + "/" + height;
}

// Add event listener to the cat image
var catImage = document.getElementById("catImage");
catImage.addEventListener("mouseover", changeCatImage);

//q: function that changes the dimensions of a cat image and the image
// function changeCatImage() {
//     const width = Math.floor(Math.random() * 301) + 300;
//     const height = Math.floor(Math.random() * 301) + 300;
//     document.getElementById("width").innerHTML = width;
//     document.getElementById("height").innerHTML = height;
//     document.getElementById("catImage").src = "https://placekitten.com/" + width + "/" + height;
// }


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
