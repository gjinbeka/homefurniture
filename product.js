let selectedProduct = null;

let quantity = 1;


// GET PRODUCT ID FROM URL

const urlParams =
    new URLSearchParams(
        window.location.search
    );


const productId =
    Number(urlParams.get("id"));


// FIND PRODUCT

selectedProduct =
    products.find(
        product =>
            product.id === productId
    );


// IF PRODUCT EXISTS

if (selectedProduct) {

    document.title =
        `${selectedProduct.name} | HomeStyle`;


    document.getElementById(
        "productImage"
    ).src =
        selectedProduct.image;


    document.getElementById(
        "productImage"
    ).alt =
        selectedProduct.name;


    document.getElementById(
        "productName"
    ).textContent =
        selectedProduct.name;


    document.getElementById(
        "productPrice"
    ).textContent =
        `$${selectedProduct.price}`;


    document.getElementById(
        "productDescription"
    ).textContent =
        selectedProduct.description;

}


// CHANGE QUANTITY

function changeQuantity(amount) {

    quantity += amount;


    if (quantity < 1) {

        quantity = 1;

    }


    document.getElementById(
        "quantity"
    ).textContent =
        quantity;

}


// ADD PRODUCT TO CART

function addProductToCart() {

    if (!selectedProduct) {
        return;
    }


    for (let i = 0; i < quantity; i++) {

        cart.push(selectedProduct);

    }


    saveCart();

    updateCart();

    openCart();

}
