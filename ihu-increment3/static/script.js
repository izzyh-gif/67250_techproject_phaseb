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