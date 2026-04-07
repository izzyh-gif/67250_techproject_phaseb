/* var x = 5;
var y = 7;
var z = x + y;
console.log(z)
var A = "Hello ";
var B = "world!";
var C  = A + B;
console.log(C);

function sumnPrint(x1, x2) {
    console.log(x1 + x2);
}
sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
    console.log(C)
    if (C.length < z) {
        console.log(z)
    }
} else {
    console.log("good job!");
}

L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(L) {
    for(let i = 0; i < L.length; i++) {
        if (L[i] == "Banana") {
            alert("Banana found");
        }
    } 
}
findTheBanana(L1);
findTheBanana(L2);

function findTheBanana(fruit) {
    if (fruit == "Banana") {
        alert("Banana Found");
    }
}
L1.forEach(findTheBanana);
L2.forEach(findTheBanana); */

var now = new Date();
var hour = now.getHours();

function greeting(hour) {
    let greetingElement = document.getElementById("greeting");

    if (greetingElement) {
        let message = "";

        if (hour >= 20 || hour < 5) {
            message = "Good night";
        }
        else if (hour < 12) {
            message = "Good morning";
        }
        else if (hour < 18) {
            message = "Good afternoon";
        }
        else {
            message = "Good evening";
        }

        let originalText = greetingElement.innerHTML;
        greetingElement.innerHTML = message + ", " + originalText;
    }
}

greeting(hour);

function addYear() {
    let currentYear = new Date().getFullYear();
    let yearElement = document.getElementById("copyYear");

    if (yearElement) {
        yearElement.innerHTML = "© " + currentYear +  " MonoMuse Museum. All rights reserved";
    }
}

/* Sets the 'active' class on the navigation link that matches the current page URL.*/

function ActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav li a');

    // Iterate over each link
    navLinks.forEach(link => {
    // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

// Execute the function to set the active navigation link on page load
ActiveNav();

 // When the "Read Less" button is clicked
 $("#readLess").click(function(){ 
    $("#longIntro").hide(); // Hide the long introduction text
    $("#readLess").hide();  // Hide the "Read Less" button itself
    $("#readMore").show();  // Show the "Read More" button  

  });
  
// When the "Read More" button is clicked
  $("#readMore").click(function(){
    $("#longIntro").show();  // Show the long introduction text
    $("#readLess").show();   // Show the "Read Less" button
    $("#readMore").hide();   // Hide the "Read More" button  
  });

//When the "Buy Now" button is clicked
$(".buyNow").click(function() {
    $("#purchaseForm").show();           // show the form
    // want to make selected date the date but not sure how to do that yet
    $('html, body').animate({ scrollTop: $("#purchaseForm").offset().top }, 500); // scroll to form
});

if (window.location.pathname.includes('explore.html')) {
    var map = L.map('map').setView([40.4387, -79.9972], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    L.marker([40.4437, -79.9490]).addTo(map);
}


function toggleMenu() {
  var nav = document.querySelector(".nav_bar");
  var btn = document.querySelector(".hamburger");

  nav.classList.toggle("responsive");
}

//Exhibit Slideshow 
var currentSlide = 0;

function changeSlide(n) {
    var slides = document.querySelectorAll(".slide");

    slides[currentSlide].classList.remove("is-active");

    currentSlide = (currentSlide + n + slides.length) % slides.length;

    slides[currentSlide].classList.add("is-active");
}

// Ticket 
const PRICES = { adult: 18, student: 18, member: 18 };

function updatePrice() {
  const adult   = parseInt(document.getElementById('quantityAdult').value)   || 0;
  const student = parseInt(document.getElementById('quantityStudent').value) || 0;
  const member  = parseInt(document.getElementById('quantityMember').value)  || 0;

  document.getElementById('summaryAdult').textContent   = adult;
  document.getElementById('summaryStudent').textContent = student;
  document.getElementById('summaryMember').textContent  = member;

  document.getElementById('priceAdult').textContent   = (adult   * PRICES.adult).toFixed(2);
  document.getElementById('priceStudent').textContent = (student * PRICES.student).toFixed(2);
  document.getElementById('priceMember').textContent  = (member  * PRICES.member).toFixed(2);

  const total = (adult * PRICES.adult) + (student * PRICES.student) + (member * PRICES.member);
  document.getElementById('priceTotal').textContent = total.toFixed(2);

  
}
if (document.getElementById("purchaseForm")) {
document.getElementById('quantityAdult').addEventListener('input', updatePrice);
document.getElementById('quantityStudent').addEventListener('input', updatePrice);
document.getElementById('quantityMember').addEventListener('input', updatePrice);

document.getElementById("purchaseForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const adult   = parseInt(document.getElementById("quantityAdult").value)   || 0;
  const student = parseInt(document.getElementById("quantityStudent").value) || 0;
  const member  = parseInt(document.getElementById("quantityMember").value)  || 0;

  if (adult + student + member < 1) {
    alert("Please select at least one ticket.");
    return;
  }

  const name  = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const total = (adult * PRICES.adult) + (student * PRICES.student) + (member * PRICES.member);

  localStorage.setItem("order", JSON.stringify({ name, email, adult, student, member, total }));

  window.location.href = "confirmation.html";
});
}

if (document.getElementById("confTotal")) {
  const order = JSON.parse(localStorage.getItem("order"));

  if (!order) {
    window.location.href = "buytickets.html";
  } else {
    document.getElementById("confTotal").textContent = order.total.toFixed(2);
  }
}



