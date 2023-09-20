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

function toggleMenu() {
    var menu = document.querySelector('.menu');
    var aboutSection = document.querySelector('#about');
    
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        aboutSection.style.display = 'none'; // Hide the About section
    } else {
        menu.style.display = 'none';
        aboutSection.style.display = 'block'; // Show the About section
    }
}


function showAbout() {
    var aboutSection = document.getElementById('about');
    aboutSection.style.display = 'block';
}
