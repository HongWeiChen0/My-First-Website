var button1El = document.getElementById("button1");
var button2El = document.getElementById("button2");
var button3EL = document.getElementById("button3");
var button4El = document.getElementById("button4");
var button5El = document.getElementById("button5");
var paragraphsElements = document.getElementsByTagName("p");
var listsElements = document.getElementsByTagName("li");

var colorChange = function() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    for (var i = 0; i < paragraphsElements.length; i++) {
        paragraphsElements[i].style.color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
    for (var j = 0; j < listsElements.length; j++) {
        listsElements[j].style.color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
};

var defaultColor = function() {
    for (var i = 0; i < paragraphsElements.length; i++) {
        paragraphsElements[i].style.color = 'rgb(' + 0 + ', ' + 0 + ', ' + 0 + ')';
    }
    for (var j = 0; j < listsElements.length; j++) {
        listsElements[j].style.color = 'rgb(' + 0 + ', ' + 0 + ', ' + 0 + ')';
    }
};

var bigFont = function() {
    document.body.style.fontSize = "24px";
};

var smallFont = function() {
    document.body.style.fontSize = "12px";
};

var normalFont = function() {
    document.body.style.fontSize = "100%";
}

button1El.addEventListener("click", colorChange);
button2El.addEventListener("click", defaultColor);
button3EL.addEventListener("click", bigFont);
button4El.addEventListener("click", smallFont);
button5El.addEventListener("click", normalFont);