const cart = document.getElementById("cart");
document.getElementById("btn").onclick = function add_item(){
const item = cart.innerText;
cart.innerText
}

// add basket 
// document.querySelectorAll('.add-to-cart-btn').forEach(button => {
//     button.addEventListener('click', function() {
//         const productId = this.parentElement.getAttribute('data-id');
//         addToCart(productId);
//     });
// });

// function addToCart(productId) {
//     fetch('add_to_cart.php', {
//         method: 'POST',
//         body: new URLSearchParams(`product_id=${productId}`),
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     })
//     .then(response => response.text())
//     .then(data => {
//         // Tutaj możesz zaktualizować interfejs użytkownika, np. licznik produktów w koszyku
//         console.log(data);
//     });
// }