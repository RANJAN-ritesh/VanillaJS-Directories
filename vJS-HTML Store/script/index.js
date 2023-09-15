var adminBtn = document.querySelector("#productBtn").addEventListener("click" , function () {
    window.location = "product.html"
} )
var cartBtn = document.querySelector("#cartBtn").addEventListener("click" , function () {
    window.location = "cart.html"
} )

document.querySelector("form").addEventListener("submit" , formSubmit)

var data = []

if(localStorage.getItem("data")){
    data = JSON.parse(localStorage.getItem("data"))
}

let count = JSON.parse(localStorage.getItem("count")) || 0

function formSubmit(event){
 event.preventDefault()
 
 var target = event.target

 
 var name = target.querySelector("#name").value
 var url = target.querySelector("#imgSrc").value
 var price = target.querySelector("#price").value
 var desc = target.querySelector("#desc").value
 var company = target.querySelector("#company").value

 var obj = {
    id:count++,
    name,
    url,
    price,
    desc,
    company,
    quantity:1
 }
 
data.push(obj)

localStorage.setItem("count" , JSON.stringify(count))
localStorage.setItem("data" , JSON.stringify(data))


document.querySelector("form").reset()
}