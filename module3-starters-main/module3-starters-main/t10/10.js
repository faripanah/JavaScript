'use strict';
const form = document.querySelector('#source');
form.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values of first name and last name inputs
    const firstName = document.querySelector('input[name="firstname"]').value;
    const lastName = document.querySelector('input[name="lastname"]').value;

    // Update the <p> element with the name
    const target = document.querySelector('#target');
    target.textContent = `Your name is ${firstName} ${lastName}`;
});
