document.addEventListener("DOMContentLoaded", function() {
    const hiddenElement = document.querySelector(".box-1 .hidden-element");
    const showMoreButton = document.querySelector(".box-1 .show-more-button");

    showMoreButton.addEventListener("click", function() {
        hiddenElement.classList.toggle("hidden");
        
        if (hiddenElement.classList.contains("hidden")) {
            showMoreButton.textContent = "Show More";
        } else {
            showMoreButton.textContent = "Show Less";
        }
    });
});


/* function calculateTriangularNumber() {
    let input = document.getElementById("input").value;
    let number = parseInt(input);
    let triangularNumber = 0;
    for (let i = 1; i <= number; i++) {
        triangularNumber += i;
    }
    document.getElementById("triangularResult").textContent = `Le nombre triangulaire associé à ${number} est ${triangularNumber}`;
    document.getElementById("result").textContent = `Le nombre triangulaire associé à ${number} est ${triangularNumber}`;
}

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
*/
