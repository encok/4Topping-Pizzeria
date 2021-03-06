// Business logic
let menu = document.querySelector('#menu-bar');
let navbar  = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    
}

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
 }

 if(window.scrollY > 60){
     document.querySelector('#scroll-top').classList.add('active');

 }
 else{
    document.querySelector('#scroll-top').classList.remove('active');
 }

 function loader(){
     document.querySelector('.loader-container').classList.add('fade-out');
 }

 function fadeOut(){
     setInterval(loader, 2000);
 }

 window.onload = fadeOut(); 

// user interface logic

function getSize() {
  
  var size = document.getElementById("pizzaSize").value;
  return parseInt(size);
}

function getCrust() {
  var crust = document.getElementById("pizzaCrust").value;
  return parseInt(crust);
}

function getMeat() {
  var topping = document.getElementById("pizzaMeat").value;
  return parseInt(topping);
}
function getVeggie() {
    var topping = document.getElementById("pizzaVeggie").value;
    return parseInt(topping);
  }

function getCheese() {
  var cheese = document.getElementById("pizzaCheese").value;
  return parseInt(cheese);
}

function getQuantity() {
  var number = document.getElementById("quantity").value;
  return parseInt(number);
}


function totalAmount() {
  var totals = (getSize() + getCrust() + getMeat()+ getVeggie() + getCheese()) * getQuantity();
  alert(
    "You have Ordered " +
    getQuantity("") +
    " pizza," + 
    "" +
    " amounting to ksh. " +totals +" " +" Thanks for your order welcome again."
  );

  
  
  var location = prompt("If you want your pizza to be delivered to you please enter your location and if not cancel.");
  if (location !== "") {
    alert("You order will be delivered shortly.Delivery fee is 100/=.");
  }
}