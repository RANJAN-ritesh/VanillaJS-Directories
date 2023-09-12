var adminBtn = document.querySelector("#adminBtn").addEventListener("click" , function () {
    window.location = "index.html"
} )
var cartBtn = document.querySelector("#cartBtn").addEventListener("click" , function () {
    window.location = "cart.html"
} )
var priceSort = document.querySelector("#PriceSort")
priceSort.addEventListener("change" , priceSortFunc)

var alphaSort = document.querySelector("#sortByCompanyAlphabetical")
alphaSort.addEventListener("change" , alphaSortFunc)

var data = JSON.parse(localStorage.getItem("data")) || []

console.log(data)

  // Function to update the DOM based on the data array
function updateDOM() {
  var parent = document.getElementById("productDiv");

  // Clear the existing content
  parent.innerHTML = "";

  if (data.length === 0) {
    parent.innerHTML = "<h1>No Data to Show</h1>";
  } else {
    data.forEach(function (ele, index) {
      var div = document.createElement("div");
      var name = document.createElement("p");
      var company = document.createElement("h3");
      var price = document.createElement("p");
      var desc = document.createElement("p");
      var img = document.createElement("img");
      var btn = document.createElement("button");
      btn.innerHTML = "Delete";
      btn.addEventListener("click", function () {
        deleteFunc(index);
      });

      var cart = document.createElement("button");
      cart.innerHTML = "Add to Cart"
      cart.addEventListener("click" , function(){addToCart(index)})

      company.innerHTML = `${ele.company}`;
      name.innerHTML = `Name : ${ele.name}`;
      price.innerText = `Price : Rs. ${ele.price}`;
      // desc.textContent = `${ele.desc}`;
      img.src = ele.url;

      div.append(img, company, name, price, btn , cart);

      parent.appendChild(div);
    });
  }
}

// Function to delete an item
function deleteFunc(index) {
  data.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(data));
  updateDOM();
}

function priceSortFunc(event) {
  var target = event.target.value;

  if (target === "highToLow") {
    data.sort((a, b) => b.price - a.price); // Sort high to low
  } else if (target === "lowToHigh") {
    data.sort((a, b) => a.price - b.price); // Sort low to high
  }else{
    //let the original order be
  }

  updateDOM();
}

function alphaSortFunc(event){
  var target = event.target;

  if(target.checked){
    data.sort((a, b) => a.company.localeCompare(b.company));
  }else{
    data.sort((a, b) => b.company.localeCompare(a.company));
  }

  updateDOM();
}

function addToCart(index){
  // console.log(data)
  var obj = data.filter((e,i)=>{return i == index})
  // console.log(obj)
  var check = JSON.parse(localStorage.getItem("cartData")) || []
  // console.log(check)
  check = [...check , ...obj]
  localStorage.setItem("cartData" , JSON.stringify(check))
  
}


// Call the updateDOM function to initially populate the page
updateDOM();