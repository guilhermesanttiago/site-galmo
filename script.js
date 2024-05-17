document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var firstNameInput = document.getElementById('firstNameInput');
    var lastNameInput = document.getElementById('lastNameInput');
    var emailInput = document.getElementById('emailInput');
    var mobileInput = document.getElementById('mobileInput');
    
    var firstNameError;
    
    if(firstNameInput.value === '') {
        firstNameError = 'First name is required';
        event.preventDefault(); // Prevent form from submitting
        console.log(firstNameError); // Display error in console
    }
});