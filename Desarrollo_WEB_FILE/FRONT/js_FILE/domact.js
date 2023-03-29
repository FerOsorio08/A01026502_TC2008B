
function showMousePosition(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "Posición del mouse: (" + x + "," + y + ")";
    document.getElementById("mousePosition").innerHTML = coor;
}

