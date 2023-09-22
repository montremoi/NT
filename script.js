function calculateTriangularNumber() {
    let input = document.getElementById("input").value;
    let number = parseInt(input);
    let triangularNumber = 0;
    for (let i = 1; i <= number; i++) {
        triangularNumber += i;
    }
    document.getElementById("triangularResult").textContent = `Le nombre triangulaire associé à ${number} est ${triangularNumber}`;
    document.getElementById("result").textContent = `Le nombre triangulaire associé à ${number} est ${triangularNumber}`;
}
document.addEventListener("DOMContentLoaded", function() {
        const hiddenElement = document.querySelector(".box-1 .hidden-element");
        const box1 = document.querySelector(".box-1");

        box1.addEventListener("click", function() {
            hiddenElement.style.display = hiddenElement.style.display === "block" ? "none" : "block";
        });
    });
function toggleMenu() {
    var menu = document.getElementById("result");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function showAbout() {
    var aboutSection = document.getElementById('about');
    aboutSection.style.display = 'block';
}
