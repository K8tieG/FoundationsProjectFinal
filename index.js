//Do this when form is submitted
document.querySelector("form").addEventListener("submit", userOrder);


function userOrder(event) {
    event.preventDefault();
    let dish = document.querySelector('#dish');
    let flavor = document.querySelector('#flavor');
    let topping = document.querySelector('#topping');
    let order = document.createElement('li');
    let newOrder = document.createElement('span');
    newOrder.innerHTML = 'Your order: ' + flavor.value + ' ice cream with ' + topping.value + ' in a ' + dish.value;
    order.appendChild(newOrder)
    const list = document.querySelector("ul");
    list.appendChild(order);
    let img = document.createElement("img");
    img.src = "ice-cream.png";
    let src = document.getElementById("x");
    src.appendChild(img);
}







