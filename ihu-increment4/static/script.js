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

document.getElementById("purchaseForm").addEventListener("submit", function(event) {
  event.preventDefault();

  if (this.checkValidity()) { // ensures required fields are filled
    alert("Redirecting to payment system.");
  }
});