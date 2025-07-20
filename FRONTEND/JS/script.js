document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple form validation
    if (!email || !password) {
        alert("Please fill in both fields.");
        return;
    }

    // Simulate a successful login (Replace this with your actual login logic)
    alert("Login successful!");

    // Redirect to the home page
    window.location.href = "home.html";  // Update this path to match your home page
});
