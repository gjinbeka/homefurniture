const products = [
    {id:1, name:"Modern Wooden Door", category:"doors", price:349, icon:"🚪", description:"Elegant wooden door for modern homes."},
    {id:2, name:"Classic Front Door", category:"doors", price:499, icon:"🚪", description:"Strong and stylish entrance door."},
    {id:3, name:"Glass Interior Door", category:"doors", price:299, icon:"🚪", description:"Modern glass door for interior spaces."},
    {id:4, name:"Panoramic Window", category:"windows", price:399, icon:"🪟", description:"Large energy-efficient panoramic window."},
    {id:5, name:"Double Glass Window", category:"windows", price:279, icon:"🪟", description:"Double-glazed window with excellent insulation."},
    {id:6, name:"Modern Sofa", category:"furniture", price:899, icon:"🛋️", description:"Comfortable sofa with modern design."},
    {id:7, name:"Dining Table", category:"furniture", price:649, icon:"🪑", description:"Beautiful wooden dining table."},
    {id:8, name:"Modern Chair", category:"furniture", price:129, icon:"🪑", description:"Comfortable chair for dining or office."},
    {id:9, name:"Modern Ceiling Lamp", category:"lighting", price:159, icon:"💡", description:"Stylish ceiling light for your home."},
    {id:10, name:"Luxury Floor Lamp", category:"lighting", price:189, icon:"💡", description:"Elegant floor lamp with warm lighting."},
    {id:11, name:"Wall Decoration", category:"decor", price:79, icon:"🖼️", description:"Modern decoration for your walls."},
    {id:12, name:"Decorative Mirror", category:"decor", price:149, icon:"🪞", description:"Beautiful mirror for modern interiors."}
];

let cart = [];

// SHOW PRODUCTS
function displayProducts(list = products) {
    const box = document.getElementById("products-container");
    if (!box) return;

    box.innerHTML = list.length ? list.map(p => `
        <div class="product-card">
            <div class="product-image">${p.icon}</div>
            <div class="product-info">
                <span class="product-category">${p.category}</span>
                <h3>${p.name}</h3>
                <p class="product-description">${p.description}</p>
                <div class="product-bottom">
                    <span class="price">$${p.price.toFixed(2)}</span>
                    <button class="add-button" onclick="addToCart(${p.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join("") : "<p>No products found.</p>";
}

// FILTER
function filterProducts(category) {
    displayProducts(
        category === "all"
            ? products
            : products.filter(p => p.category === category)
    );
}

// SEARCH
function searchProducts() {
    const searchInput = document.getElementById("search");
    if (!searchInput) return;

    const text = searchInput.value.toLowerCase();

    displayProducts(
        products.filter(p =>
            p.name.toLowerCase().includes(text) ||
            p.category.toLowerCase().includes(text)
        )
    );
}

// ADD TO CART
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const item = cart.find(p => p.id === id);

    if (item) {
        item.quantity++;
    } else {
        cart.push({...product, quantity: 1});
    }

    updateCart();
    alert(product.name + " added to cart!");
}

// UPDATE CART
function updateCart() {
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, p) => total + p.quantity, 0);
    }

    displayCart();
}

// DISPLAY CART
function displayCart() {
    const box = document.getElementById("cart-items");
    const totalElement = document.getElementById("cart-total");

    if (!box) return;

    if (!cart.length) {
        box.innerHTML = `<p class="empty-cart">Your cart is empty.</p>`;
        if (totalElement) totalElement.textContent = "$0.00";
        return;
    }

    box.innerHTML = cart.map(p => `
        <div class="cart-item">
            <div class="cart-item-image">${p.icon}</div>
            <div>
                <h4>${p.name}</h4>
                <p>$${p.price.toFixed(2)} × ${p.quantity}</p>
                <button onclick="changeQuantity(${p.id}, -1)">−</button>
                ${p.quantity}
                <button onclick="changeQuantity(${p.id}, 1)">+</button>
            </div>
            <button class="remove-button" onclick="removeFromCart(${p.id})">
                ✕
            </button>
        </div>
    `).join("");

    const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

    if (totalElement) {
        totalElement.textContent = "$" + total.toFixed(2);
    }
}

// CHANGE QUANTITY
function changeQuantity(id, amount) {
    const item = cart.find(p => p.id === id);
    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        removeFromCart(id);
    } else {
        updateCart();
    }
}

// REMOVE FROM CART
function removeFromCart(id) {
    cart = cart.filter(p => p.id !== id);
    updateCart();
}

// OPEN CART
function openCart() {
    const cartEl = document.getElementById("cart");
    const overlay = document.getElementById("cart-overlay");
    if (cartEl && overlay) {
        cartEl.classList.add("active");
        overlay.classList.add("active");
    }
}

// CLOSE CART
function closeCart() {
    const cartEl = document.getElementById("cart");
    const overlay = document.getElementById("cart-overlay");
    if (cartEl && overlay) {
        cartEl.classList.remove("active");
        overlay.classList.remove("active");
    }
}

// CHECKOUT
function checkout() {
    if (!cart.length) {
        alert("Your cart is empty!");
    } else {
        alert("Thank you for shopping with HomeStyle!");
        cart = [];
        updateCart();
        closeCart();
    }
}

// CONTACT FORM
function sendMessage(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
    event.target.reset();
}

// INIT - SIGUROHEM QË HTML ËSHTË NGARKUAR PLOTËSISHT PARA EXECUTION
document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
    updateCart();
});
   