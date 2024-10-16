document.getElementById("registerForm").addEventListener("submit", function(event) {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        event.preventDefault();  // Prevent form submission
        document.getElementById("error").textContent = "Passwords do not match!";
    } else {
        alert("Registration successful! Your profile has been created.");
    }
});