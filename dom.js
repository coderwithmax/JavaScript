
// Selectors
const h1 = document.querySelector("h1")
const heading2 = document.querySelector("h2")
const title = document.getElementById("title")
const items = document.querySelector(".item")
const body = document.querySelector("body")
const img = document.querySelector("img")
const video = document.querySelector("video")
const p = document.createElement("p")
const button = document.querySelector("button")
const increment = document.querySelector("#increment")
const span = document.querySelector("span")
let count = 0
h1.innerHTML = "Hi i am a DOM"
heading2.innerHTML = "this is a heading2"
title.innerHTML = "we are developers";
items.innerText = "this is a class name"

p.innerHTML = " waxaan ahay axmed cabdi cumar"
body.appendChild(p)

img.src = "./image.jpg"
img.width = "500"
video.src = "./tafsiir.mp4"
video.width = "500"
video.controls = true
video.autoplay = false

// Events
button.addEventListener("click",()=>{
  increment.innerHTML = count++
  if(count >10){
    span.innerHTML = "Allahu Akbar"
  }
})

// Styling.
h1.style.color = "red"
h1.style.fontSize = "40px"
h1.style.backgroundColor = "yellow"
body.style.backgroundColor = "green"
