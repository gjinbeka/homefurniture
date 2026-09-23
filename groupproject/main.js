const products = [
    {
        id: 1,
        name: "Luxury Sofa",
        price: 899,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
        description:
            "A beautiful luxury sofa designed to bring comfort and modern style to your living room. Made with high-quality materials and a soft finish."
    },

    {
        id: 2,
        name: "Modern Door",
        price: 499,
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80",
        description:
            "Our Modern Door combines elegant design, durability and excellent quality. Perfect for contemporary homes and modern architectural spaces."
    },

    {
        id: 3,
        name: "Modern Window",
        price: 299,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
        description:
            "Modern Window with a clean and elegant design. It provides natural light while giving your home a stylish contemporary appearance."
    },

    {
        id: 4,
        name: "Coffee Table",
        price: 349,
        image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=600&q=80",
        description:
            "A modern coffee table with a simple and elegant design. A perfect addition to living rooms, lounges and modern interiors."
    },

    {
        id: 5,
        name: "Modern Lamp",
        price: 159,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
        description:
            "A stylish modern lamp that adds warmth and personality to your home. Perfect for living rooms, bedrooms and offices."
    },

    {
        id: 6,
        name: "Home Decoration",
        price: 79,
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
        description:
            "Elegant home decoration designed to give your interior a sophisticated and comfortable atmosphere."
    }
];


let cart = JSON.parse(localStorage.getItem("cart")) || [];


/* =========================
   SHOW PRODUCTS
========================= */

function showProducts(list = products) {

    const productList = document.getElementById("productList");

    productList.innerHTML = list.map((p) => `

        <div class="card">

            <a href="product.html?id=${p.id}" class="product-link">

                <img src="${p.image}" alt="${p.name}">

                <div class="card-info">

                    <h3>${p.name}</h3>

                    <span class="price">
                        $${p.price}
                    </span>

                </div>

            </a>

            <button
                class="add-button"
                onclick="event.stopPropagation(); event.preventDefault(); addCart(${p.id})"
            >
                +
            </button>

        </div>

    `).join("");
}


/* =========================
   ADD TO CART
========================= */

function addCart(id) {

    const product = products.find(p => p.id === id);

    if (!product) return;

    cart.push(product);

    saveCart();

    updateCart();

    openCart();
}


/* =========================
   REMOVE FROM CART
========================= */

function removeCart(index) {

    cart.splice(index, 1);

    saveCart();

    updateCart();
}


/* =========================
   SAVE CART
========================= */

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}


/* =========================
   UPDATE CART
========================= */

function updateCart() {

    document.getElementById("count").textContent =
        cart.length;


    document.getElementById("cartItems").innerHTML =

        cart.length === 0

        ? "<p>Your cart is empty.</p>"

        : cart.map((p, i) => `

            <div class="cart-item">

                <span>${p.name}</span>

                <b>$${p.price}</b>

                <button onclick="removeCart(${i})">
                    ✕
                </button>

            </div>

        `).join("");


    const total = cart.reduce(
        (sum, p) => sum + p.price,
        0
    );

    document.getElementById("total").textContent =
        total;
}


/* =========================
   OPEN CART
========================= */

function openCart() {

    document.getElementById("cart")
        .classList.add("open");

    document.getElementById("overlay")
        .classList.add("show");
}


/* =========================
   CLOSE CART
========================= */

function closeCart() {

    document.getElementById("cart")
        .classList.remove("open");

    document.getElementById("overlay")
        .classList.remove("show");
}


/* =========================
   SEARCH
========================= */

function searchProducts() {

    const text =
        document.getElementById("search")
        .value
        .toLowerCase();

    const filtered =
        products.filter(p =>
            p.name.toLowerCase().includes(text)
        );

    showProducts(filtered);
}


/* =========================
   CONTACT FORM
========================= */

function sendMessage(e) {

    e.preventDefault();

    alert("Message sent successfully!");

    e.target.reset();
}


/* =========================
   CHECKOUT
========================= */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

    } else {

        alert(
            "Thank you for your order!"
        );

        cart = [];

        saveCart();

        updateCart();

        closeCart();
    }
}


/* =========================
   INITIALIZE
========================= */

showProducts();

updateCart();
