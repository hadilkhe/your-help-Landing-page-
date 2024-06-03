document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Basic form validation
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var referral = document.getElementById('referral').value;

    if (name && email && phone && referral) {
        alert('Form submitted successfully!');
        
    } else {
        alert('Please fill out all required fields.');
    }
});
