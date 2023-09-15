var prodBtn = document.querySelector("#productBtn").addEventListener("click" , function () {
    window.location = "product.html"
} )
var adminBtn = document.querySelector("#adminBtn").addEventListener("click" , function () {
    window.location = "index.html"
} )


var gpDiv = document.getElementById("cart-parent")
var priceParent = document.getElementById("price-parent")

var priceData = JSON.parse(localStorage.getItem("cartData")) || []

let totalPrice = priceData.reduce((acc,ele)=>{
    return parseFloat(acc)+(ele.quantity*ele.price)
},0)

let totalItems = priceData.reduce((acc,ele)=>{
    return parseFloat(acc)+(ele.quantity)
},0)

function priceDetailsFunc(){
    var data = JSON.parse(localStorage.getItem("cartData")) || []
    

    var priceChild1 = document.getElementById("price-child1")

    priceChild1.innerHTML = `<h3>Total Items in Cart : <span>${totalItems}</span></h3>
                              
                              <h3>Total Price : <span>  ₹  ${totalPrice}</span></h3>`

    
     document.getElementById("voucherInputBtn").addEventListener("click" , discountFunc)                         
    console.log(totalPrice , totalItems)
}
priceDetailsFunc()

function discountFunc(){
    let voucherInputData = document.getElementById("voucherInput").value
    console.log(voucherInputData)
    let persistOgPrice ;
    if(voucherInputData == "season50"){
        persistOgPrice = totalPrice
        totalPrice = totalPrice-(totalPrice*0.5)
        console.log("worked")
        alert(`yay coupon season50 applied 🎆🎆`)
    }
    priceDetailsFunc()
    totalPrice = persistOgPrice
}

function cartDOM(){
    var data = JSON.parse(localStorage.getItem("cartData")) || []

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

   let deleteBtn = document.createElement("button")
   deleteBtn.innerHTML = "Delete"
   deleteBtn.addEventListener("click" , ()=>{deleteCartElement(e.id)})

   let div3 = document.createElement("div")
   div3.setAttribute("id" , "counterDeleteDiv")

    div2.append(incCount,textCount,decCount)
    div3.append(div2 , deleteBtn)
    div1.append( company ,name , price , div3)
    parentDiv.append(img,div1 , div3)

    
    gpDiv.append(parentDiv)
})
}

function counterFunc(d,i){
    var data = JSON.parse(localStorage.getItem("cartData")) || []
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

function deleteCartElement(id){
    var data = JSON.parse(localStorage.getItem("cartData")) || []
    let narr = data.filter((e)=>{return e.id != id})

    console.log(narr)

    localStorage.setItem("cartData" , JSON.stringify(narr))

    cartDOM()
    console.log("reaching")
}

cartDOM()
