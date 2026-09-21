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
                        Add to Cart
                    </button>
                </div>
            </div>
        `).join("")
        : "<p>No products found.</p>";
}

// FILTER PRODUCTS
function filterProducts(category) {
    displayProducts(
        category === "all"
            ? products
            : products.filter(p => p.category === category)
    );
}

// SEARCH PRODUCTS
function searchProducts() {
    const text = document
        .getElementById("search")
        .value
        .toLowerCase();

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
    document.getElementById("cart-count").textContent =
        cart.reduce((sum, p) => sum + p.quantity, 0);

    displayCart();
}

// DISPLAY CART
function displayCart() {
    const box = document.getElementById("cart-items");

    if (!cart.length) {
        box.innerHTML = "<p>Your cart is empty.</p>";
        document.getElementById("cart-total").textContent = "$0.00";
        return;
    }

    box.innerHTML = cart.map(p => `
        <div class="cart-item">
            <img src="${p.image}"
                 width="60"
                 alt="${p.name}">

            <div>
                <h4>${p.name}</h4>
                <p>$${p.price.toFixed(2)} × ${p.quantity}</p>

                <button onclick="changeQuantity(${p.id}, -1)">
                    −
                </button>

                ${p.quantity}

                <button onclick="changeQuantity(${p.id}, 1)">
                    +
                </button>

                <button onclick="removeFromCart(${p.id})">
                    ✕
                </button>
            </div>
        </div>
    `).join("");

    const total = cart.reduce(
        (sum, p) => sum + p.price * p.quantity,
        0
    );

    document.getElementById("cart-total").textContent =
        "$" + total.toFixed(2);
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
    document.getElementById("cart").classList.add("active");
    document.getElementById("cart-overlay").classList.add("active");
}

// CLOSE CART
function closeCart() {
    document.getElementById("cart").classList.remove("active");
    document.getElementById("cart-overlay").classList.remove("active");
}

// CHECKOUT
function checkout() {
    if (!cart.length) {
        alert("Your cart is empty!");
    } else {
        alert("Thank you for shopping with HomeStyle!");
    }
}

// CONTACT FORM
function sendMessage(event) {
    event.preventDefault();
    alert("Your message has been sent!");
    event.target.reset();
}

// START
displayProducts();
updateCart();