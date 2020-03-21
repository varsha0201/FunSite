// alert("Hello from app.js");

var pics=[
    "img/1.jpeg",
    "img/2.jpeg",
    "img/3.jpeg",
    "img/4.jpeg"
]
var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;
btn.addEventListener("click",function(){
    if(counter === 3){
        counter = 0;
    }
    img.src = pics[counter]
    counter = counter+1;
});


