const products = [
    {
        id: 1,
        name: "Modern Wooden Door",
        category: "doors",
        price: 349,
        image: "https://loremflickr.com/600/400/wooden,door"
    },
    {
        id: 2,
        name: "Classic Front Door",
        category: "doors",
        price: 499,
        image: "https://loremflickr.com/600/400/front,door"
    },
    {
        id: 3,
        name: "Glass Interior Door",
        category: "doors",
        price: 299,
        image: "https://loremflickr.com/600/400/glass,door"
    },
    {
        id: 4,
        name: "Panoramic Window",
        category: "windows",
        price: 399,
        image: "https://loremflickr.com/600/400/panoramic,window"
    },
    {
        id: 5,
        name: "Double Glass Window",
        category: "windows",
        price: 279,
        image: "https://loremflickr.com/600/400/glass,window"
    },
    {
        id: 6,
        name: "Modern Sofa",
        category: "furniture",
        price: 899,
        image: "https://loremflickr.com/600/400/modern,sofa"
    },
    {
        id: 7,
        name: "Dining Table",
        category: "furniture",
        price: 649,
        image: "https://loremflickr.com/600/400/dining,table"
    },
    {
        id: 8,
        name: "Modern Chair",
        category: "furniture",
        price: 129,
        image: "https://loremflickr.com/600/400/modern,chair"
    },
    {
        id: 9,
        name: "Modern Ceiling Lamp",
        category: "lighting",
        price: 159,
        image: "https://loremflickr.com/600/400/ceiling,lamp"
    },
    {
        id: 10,
        name: "Luxury Floor Lamp",
        category: "lighting",
        price: 189,
        image: "https://loremflickr.com/600/400/floor,lamp"
    },
    {
        id: 11,
        name: "Wall Decoration",
        category: "decor",
        price: 79,
        image: "https://loremflickr.com/600/400/wall,decoration"
    },
    {
        id: 12,
        name: "Decorative Mirror",
        category: "decor",
        price: 149,
        image: "https://loremflickr.com/600/400/decorative,mirror"
    }
];

let cart = [];

// SHOW PRODUCTS
function displayProducts(list = products) {
    const box = document.getElementById("products-container");
    if (!box) return;

<<<<<<< HEAD
    box.innerHTML = list.length
        ? list.map(p => `
            <div class="product-card">
                <img class="product-image"
                     src="${p.image}"
                     alt="${p.name}">

                <div class="product-info">
                    <span class="product-category">${p.category}</span>
                    <h3>${p.name}</h3>
                    <b>$${p.price.toFixed(2)}</b>

                    <button class="add-button"
                            onclick="addToCart(${p.id})">
=======
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
>>>>>>> 546fd9e9bf64aa2231cfd9617cdfd053b06adbd6
                        Add to Cart
                    </button>
                </div>
            </div>
        `).join("")
        : "<p>No products found.</p>";
}

<<<<<<< HEAD
// FILTER PRODUCTS
=======
// FILTER
>>>>>>> 546fd9e9bf64aa2231cfd9617cdfd053b06adbd6
function filterProducts(category) {
    displayProducts(
        category === "all"
            ? products
            : products.filter(p => p.category === category)
    );
}

<<<<<<< HEAD
// SEARCH PRODUCTS
function searchProducts() {
    const text = document
        .getElementById("search")
        .value
        .toLowerCase();
=======
// SEARCH
function searchProducts() {
    const searchInput = document.getElementById("search");
    if (!searchInput) return;

    const text = searchInput.value.toLowerCase();
>>>>>>> 546fd9e9bf64aa2231cfd9617cdfd053b06adbd6

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
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
    alert(product.name + " added to cart!");
}

// UPDATE CART
function updateCart() {
<<<<<<< HEAD
    document.getElementById("cart-count").textContent =
        cart.reduce((sum, p) => sum + p.quantity, 0);
=======
    const cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, p) => total + p.quantity, 0);
    }
>>>>>>> 546fd9e9bf64aa2231cfd9617cdfd053b06adbd6

    displayCart();
}

// DISPLAY CART
function displayCart() {
    const box = document.getElementById("cart-items");
    const totalElement = document.getElementById("cart-total");

    if (!box) return;

    if (!cart.length) {
<<<<<<< HEAD
        box.innerHTML = "<p>Your cart is empty.</p>";
        document.getElementById("cart-total").textContent = "$0.00";
=======
        box.innerHTML = `<p class="empty-cart">Your cart is empty.</p>`;
        if (totalElement) totalElement.textContent = "$0.00";
>>>>>>> 546fd9e9bf64aa2231cfd9617cdfd053b06adbd6
        return;
    }

    box.innerHTML = cart.map(p => `
        <div class="cart-item">
<<<<<<< HEAD
            <img src="${p.image}"
                 width="60"
                 alt="${p.name}">

            <div>
                <h4>${p.name}</h4>
                <p>$${p.price.toFixed(2)} × ${p.quantity}</p>

                <button onclick="changeQuantity(${p.id}, -1)">
                    −
                </button>

=======
            <div class="cart-item-image">${p.icon}</div>
            <div>
                <h4>${p.name}</h4>
                <p>$${p.price.toFixed(2)} × ${p.quantity}</p>
                <button onclick="changeQuantity(${p.id}, -1)">−</button>
>>>>>>> 546fd9e9bf64aa2231cfd9617cdfd053b06adbd6
                ${p.quantity}

                <button onclick="changeQuantity(${p.id}, 1)">
                    +
                </button>

                <button onclick="removeFromCart(${p.id})">
                    ✕
                </button>
            </div>
<<<<<<< HEAD
        </div>
    `).join("");

    const total = cart.reduce(
        (sum, p) => sum + p.price * p.quantity,
        0
    );
=======
            <button class="remove-button" onclick="removeFromCart(${p.id})">
                ✕
            </button>
        </div>
    `).join("");

    const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);
>>>>>>> 546fd9e9bf64aa2231cfd9617cdfd053b06adbd6

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
    alert("Your message has been sent!");
    event.target.reset();
}

<<<<<<< HEAD
// START
displayProducts();
updateCart();
=======
// INIT - SIGUROHEM QË HTML ËSHTË NGARKUAR PLOTËSISHT PARA EXECUTION
document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
    updateCart();
});
   
>>>>>>> 546fd9e9bf64aa2231cfd9617cdfd053b06adbd6
