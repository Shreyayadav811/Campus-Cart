// Fetch the items from the backend
fetch('http://localhost:5000/api/items')
    .then(response => response.json())
    .then(items => {
        const itemContainer = document.querySelector('.item-container');
        items.forEach(item => {
            // Create a new item card for each item
            const itemCard = document.createElement('div');
            itemCard.classList.add('item-card');

            // Create the image element
            const itemImage = document.createElement('img');
            itemImage.src = `http://localhost:5000/uploads/${item.image}`;
            itemImage.alt = `${item.title} image`;

            // Create the title, description, and price elements
            const itemTitle = document.createElement('h3');
            itemTitle.textContent = item.title;

            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;

            const itemPrice = document.createElement('p');
            itemPrice.textContent = `Price: ₹${item.price}`;

            const itemContact = document.createElement('p');
            itemContact.textContent = `Contact: ${item.contactNumber}`;

            // Append all elements to the item card
            itemCard.appendChild(itemImage);
            itemCard.appendChild(itemTitle);
            itemCard.appendChild(itemDescription);
            itemCard.appendChild(itemPrice);
            itemCard.appendChild(itemContact);

            // Append the item card to the item container
            itemContainer.appendChild(itemCard);
        });
    })
    .catch(error => {
        console.error('Error fetching items:', error);
    });
