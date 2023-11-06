// When the user chooses one of the channel buttons, change the src attribute of the img inside the .tv-show div
// You should write a single function to change the channel that accepts a single input, the channel number, and uses a conditional statement to change the TV to the image specific to that channel.
// When you set up your event listeners for the buttons, the callback function should call upon that change channel function
// Use a conditional statement to evaluate which channel they've chosen, so you can set a specific image for each channel
// Feel free to look up and use any images of your choice and include them in your conditional statement! Be sure to use an absolute path to the image file.

// Image files
let tv = document.getElementById("show-1")

let btm1 = document.getElementById("one")
let btm2 = document.getElementById("two")
let btm3 = document.getElementById("three")
let btm4 = document.getElementById("four")
let btm5 = document.getElementById("five")
let btm6 = document.getElementById("six")
let btm7 = document.getElementById("seven")
let btm8 = document.getElementById("eight")
let btm9 = document.getElementById("nine")

btm1.addEventListener("mouseover",()=>{
    tv.src =" https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg"

});

btm2.addEventListener("mouseover",()=>{
    tv.src =" https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg    "

});



btm3.addEventListener("mouseover",()=>{
    tv.src =" https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg    "

});

btm4.addEventListener("mouseover",()=>{
    tv.src =" https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg    "

});


btm5.addEventListener("mouseover",()=>{
    tv.src =" https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg "

});
btm6.addEventListener("mouseover",()=>{
    tv.src ="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg   "

});
btm7.addEventListener("mouseover",()=>{
    tv.src =" https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg    "

});
btm8.addEventListener("mouseover",()=>{
    tv.src ="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg    "

});
btm9.addEventListener("mouseover",()=>{
    tv.src ="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg    "

});
