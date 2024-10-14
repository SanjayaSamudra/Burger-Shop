// Function to load the header
function loadHeader() {
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header').innerHTML = data; // Insert the header into the page
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Call the loadHeader function when the page loads
window.onload = loadHeader;

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

function chgTitle(burgerButton, title){

    const buttonText = burgerButton.textContent;
    const burgerTitle = document.getElementById(title)

    burgerTitle.innerText = buttonText;

}

function increment() {
    const input = document.getElementById('quantity');
    input.value = parseInt(input.value) + 1;
}

function decrement() {
    const input = document.getElementById('quantity');
    input.value = Math.max(0, parseInt(input.value) - 1);
}




