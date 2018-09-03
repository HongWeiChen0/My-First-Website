var button1El = document.getElementById("button1");
var paragraphsElements = document.getElementsByTagName("p");
var listsElements = document.getElementsByTagName("li");
var colorChange = function () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    for (var i = 0; i < paragraphsElements.length; i++) {
        paragraphsElements[i].style.color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
    for (var j = 0; j < listsElements.length; j++) {
        listsElements[j].style.color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
}
button1El.addEventListener("click", colorChange);