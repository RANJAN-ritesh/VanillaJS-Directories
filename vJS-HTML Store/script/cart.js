var prodBtn = document.querySelector("#productBtn").addEventListener("click" , function () {
    window.location = "product.html"
} )
var adminBtn = document.querySelector("#adminBtn").addEventListener("click" , function () {
    window.location = "index.html"
} )

var data = JSON.parse(localStorage.getItem("cartData")) || []
var gpDiv = document.getElementById("cart-parent")

function cartDOM(){

    gpDiv.innerHTML = ""


data.forEach((e,i)=>{

    
    let parentDiv = document.createElement("div")

    let img = document.createElement("img")
    img.src = e.url


    let div1 = document.createElement("div")
    let company = document.createElement("h3")
    company.innerHTML = e.company
    let name = document.createElement("p")
    name.innerHTML = e.name
    let price = document.createElement("p")
    price.innerHTML = e.price
    let div2 = document.createElement("div")
    let incCount = document.createElement("button")
    incCount.innerHTML = "+"
    incCount.addEventListener("click" , function (){
        counterFunc(1 , i)
    })
    let textCount = document.createElement("span")
    textCount.innerHTML = e.quantity
    let decCount = document.createElement("button")
    decCount.innerHTML = "-"
    decCount.addEventListener("click" , function (){
        counterFunc(-1 , i)
    })

    div2.append(incCount,textCount,decCount)
    div1.append( company ,name , price , div2)
    parentDiv.append(img,div1 , div2)

    
    gpDiv.append(parentDiv)
})
}

function counterFunc(d,i){
    let narr = data.forEach((ele,index)=>{
        if(index == i){
            if(ele.quantity+d >= 0){
                ele.quantity += +(d)
            }
           
        }
    })
    localStorage.setItem("cartData" , JSON.stringify(data))
    cartDOM()

}

cartDOM()

console.log(data)