let products = [
    {
    image: "burger.jpg",
    name: "Burger",
    price: 180
},
{
    image: "Pizza.jpg",
    name: "Pizza",
    price: 250
},
{
    image: "Fried Chicken.jpg",
    name: "Fried Chicken",
    price: 220
},
{
    image: "Pasta.jpg",
    name: "Pasta",
    price: 170
},
{
    image: "Grilled Chicken.jpg",
    name: "Grilled Chicken",
    price: 230
},
{
    image: "Hot Dog.jpg",
    name: "Hot Dog",
    price: 140
},
];


// عرض المنتجات
let productsList = document.querySelector(".productslist");

for (let x = 0; x < products.length; x++) {

    productsList.innerHTML += `
        <div class="product">

            <img src="${products[x].image}">

            <div class="details">

                <p class="product-name">
                    ${products[x].name}
                </p>

                <p class="price">
                    ${products[x].price} EGP
                </p>

                <button onclick="addToCart(${x})">
                    Add Cart
                </button>

            </div>

        </div>
    `;
}



let cart = JSON.parse(localStorage.getItem("cart")) || [];



function addToCart(index) {

    let product = products[index];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product.name + " has been added to your cart 🛒");
}



function openCart() {

    document.getElementById("cartBox").style.display = "flex";

    displayCart();
}



function closeCart() {

    document.getElementById("cartBox").style.display = "none";
}



function displayCart() {

    let cartItems = document.getElementById("cartItems");

    let totalPrice = document.getElementById("totalPrice");

    cartItems.innerHTML = "";

    let total = 0;



    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

        totalPrice.textContent = "0";

        return;
    }


  
    for (let i = 0; i < cart.length; i++) {

        total += cart[i].price;

        cartItems.innerHTML += `
            <div class="cart-item">

                <div>
                    <strong>${cart[i].name}</strong>
                    <br>
                    ${cart[i].price} EGP
                </div>

                <button
                    class="remove-btn"
                    onclick="removeFromCart(${i})">
                    Remove
                </button>

            </div>
        `;
    }


  
    totalPrice.textContent = total;
}



function removeFromCart(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}
