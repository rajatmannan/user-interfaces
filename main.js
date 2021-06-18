
var i = 0;
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
var speed = 90;

window.onload = function typeW() {
    if (i < text.length) {
        document.getElementById('type').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeW, speed);
        document.querySelector('header').style.height = "70px";
        document.getElementById('form').style.left = "180px";
        
    }
}
