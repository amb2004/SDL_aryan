
document.getElementById("hoverButton").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#28a745";
});

document.getElementById("hoverButton").addEventListener("mouseout", function() {
    this.style.backgroundColor = "#007bff";
});

document.getElementById("doubleClickButton").addEventListener("dblclick", function() {
    alert("Button double clicked!");
});

function changeColor() {
    document.getElementById("text").style.color = "red";
}

function showAlert() {
    alert("Button clicked!");
}
