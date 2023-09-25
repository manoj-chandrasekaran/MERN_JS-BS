function submitForm() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var websiteInput = document.getElementById('website');
    var messageTextarea = document.querySelector('textarea');

    // Reset previous error messages and styling
    resetValidation();

    if (nameInput.value.trim() === '') {
        displayErrorMessage(nameInput, 'Name is required.');
    }

    if (emailInput.value.trim() === '') {
        displayErrorMessage(emailInput, 'Email is required.');
    }

    if (websiteInput.value.trim() === '') {
        displayErrorMessage(websiteInput, 'Website is required.');
    }

    if (messageTextarea.value.trim() === '') {
        displayErrorMessage(messageTextarea, 'Message is required.');
    }
}

function displayErrorMessage(element, message) {
    var errorDiv = document.createElement('div');
    errorDiv.textContent = message;
    errorDiv.style.color = 'red';
    errorDiv.style.display = 'inline-block'; // Display the error message inline
    errorDiv.style.marginLeft = '10px'; // Add margin for spacing
    errorDiv.className = 'error-message'; // Add a class for easy removal

    element.parentNode.insertBefore(errorDiv, element.nextSibling); // Insert the error message after the element

    // Highlight the input field in red
    element.style.border = '1px solid red';
}

function resetValidation() {
    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (errorMessage) {
        errorMessage.remove();
    });

    var inputFields = document.querySelectorAll('input, textarea');
    inputFields.forEach(function (field) {
        field.style.border = '1px solid #ccc';
    });
}
