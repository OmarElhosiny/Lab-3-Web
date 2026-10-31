let quantity =0
document.getElementById("showCount").addEventListener("click", function() {
document.getElementById("result").innerText = "Quantity: "+ quantity;
});
document.getElementById("addOne").addEventListener("click", function() {
quantity++;
});
document.getElementById("addTwo").addEventListener("click", function() {
quantity += 2;
});

document.getElementById("addThree").addEventListener("click", function() {
quantity += 3;
});
document.getElementById("clearCart").addEventListener("click", function() {
quantity = 0;
document.getElementById("result").innerText = "Quantity: "+ quantity;

});