let totalPrice = 0;
let cartItems = [];

document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
       
        const planeName = this.parentElement.querySelector('.card-title').textContent;
        const planePriceText = this.parentElement.querySelector('.card-text').textContent;
        
        // Extract price as a number
        const planePrice = parseFloat(planePriceText.replace('Price: $', '').replace(/,/g, ''));

        // Update the total price
        totalPrice += planePrice;
        
        // Add the selected item to the cartItems array
        cartItems.push(`${planeName}: $${planePrice.toLocaleString()}`);

        // Send data to the forms.html page
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('totalPrice', totalPrice);
    });
});
