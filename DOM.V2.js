const h1 = document.querySelector("h1")
const h2 = document.querySelector("h2")
const body = document.querySelector("body")
const p = document.createElement("p")
const button = document.querySelector("button")
const b = document.querySelector("b")
const decrement = document.querySelector('.decrement')
const span = document.querySelector("span")

h1.innerText = "kusoo dhawoow DOM."
h2.innerHTML = "Hi there i am Here."
p.innerHTML = "i am a paragraph..."
b.style.color = "black"
span.style.color = "red"
let count  = 0
button.addEventListener("click",()=>{
    b.innerHTML = count++
})

decrement.addEventListener("click",()=>{
    b.innerHTML = count--
    if(count<0){
        decrement.disabled = true
        span.innerHTML = "count is finished..."
    }else if(count >0){
        decrement.disabled = false
    }
})


// styling
h1.style.color = "orange"
body.style.backgroundColor = "white"
h2.style.color ="black"
p.style.color = "black"

h1.style.textAlign = "center"


body.appendChild(p)
