// Add event listener to the form
document.getElementById("itemForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let errorMessages = [];
    
    // Get form field values
    const itemName = document.getElementById("itemName").value;
    const itemPrice = document.getElementById("itemPrice").value;
    const itemDescription = document.getElementById("itemDescription").value;
    const itemImage = document.getElementById("itemImage").files[0];
    
    // Validate the fields
    if (!itemName) {
        errorMessages.push("Item name is required.");
    }
    if (!itemPrice || itemPrice <= 0) {
        errorMessages.push("Price must be a positive number.");
    }
    if (!itemDescription) {
        errorMessages.push("Description is required.");
    }
    if (!itemImage) {
        errorMessages.push("An image must be uploaded.");
    }

    // Display error messages if any
    const errorDiv = document.getElementById("errorMessages");
    if (errorMessages.length > 0) {
        errorDiv.innerHTML = errorMessages.join("<br>");
    } else {
        errorDiv.innerHTML = ""; // Clear error messages
        alert("Form submitted successfully!");
        // Here you can call a function to submit data to the backend (e.g., using fetch or Axios)
    }
});


