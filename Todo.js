const form = document.querySelector("form")
const inputControll = document.querySelector(".input-control")
const list = document.querySelector(".list")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(inputControll.value === ""){
        alert("fadlan marka hore xog gali")
        return
    }
    inputControll.value
    let li = document.createElement("li")
    li.innerText = inputControll.value
li.style.backgroundColor =  "gray"
    list.appendChild(li)
    inputControll.value = ""
})
