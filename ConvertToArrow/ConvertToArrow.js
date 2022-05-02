// document.getElementById("button").onclick = function() {
//     setBgColor("paragraph", "blue");
//     //            (id, color) => document.getElementById(id).style = "background-color: " + color;
// }
// document.getElementById("alert").onclick = function() {
//     alert(document.getElementById("popup-input").value);
// }
// document.getElementById("hover-this").onmouseover = function() {
//     setBackgroundColorById("body", "red");
// }
// document.getElementById("hover-this").onmouseout = function() {
//     setBackgroundColorById("body", "white");
// }

// const getValById = (id) => document.getElementById(id).value;;

// const setBgColor = (id, color) => document.getElementById(id).style = "background-color: " + color;

// const mouseOverFunction = (el) => el.style = "background-color: black";

//    function setBackgroundColorById(id, color){
//        document.getElementById(id).style = "background-color: " + color;

//    }

//    function getValueFromId(id){
//        return document.getElementById(id).value;
//    }

// function mouseOverFunction(el) {
//     el.style = "background-color: black";
// }

document.getElementById("button").onclick = function() {
    setBgColor("paragraph", "blue");
}

document.getElementById("alert").onclick = function() {
    alert(document.getElementById("popup-input").value);
}
document.getElementById("hover-this").onmouseover = function() {
    setBgColor("body", "red");
}
document.getElementById("hover-this").onmouseout = function() {
    setBgColor("body", "white");
}

const getValById = (id) => document.getElementById(id).value;;

const setBgColor = (id, color) => document.getElementById(id).style = "background-color: " + color;

const mouseOverFunction = (el, colorIn) => console.log(el.style = "background-color: " + colorIn.value);
// const mouseOverFunction = (el, colorIn) => console.log(colorIn.value);