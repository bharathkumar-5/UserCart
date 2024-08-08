document.addEventListener("DOMContentLoaded", () => {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'card';
        userCard.innerHTML = `
            <h2>${user.name}</h2>
            <p>${user.email}</p>
            <button class="delete" onclick="removeFromCart(${user.id})">Delete</button>
        `;
        cartList.appendChild(userCard);
    });
});

function removeFromCart(userId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(user => user.id !== userId);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload(); // Reload the page to reflect the changes
}
