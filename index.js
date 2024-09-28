let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
  ul.classList.toggle("showData");
  // console.log(ul)
  if (ul.className == "showData") {
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
});
let shops = document.getElementById("shops");
let reviews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");

shops.addEventListener("click", () => {
  shops.style.color = "rgb(105, 201, 201)";
  reviews.style.color = "white";
  blogs.style.color = "white";
  contacts.style.color = "white";
});
reviews.addEventListener("click", () => {
  reviews.style.color = "rgb(105, 201, 201)";
  shops.style.color = "white";
  blogs.style.color = "white";
  contacts.style.color = "white";
});
blogs.addEventListener("click", () => {
  blogs.style.color = "rgb(105, 201, 201)";
  reviews.style.color = "white";
  shops.style.color = "white";
  contacts.style.color = "white";
});
contacts.addEventListener("click", () => {
  contacts.style.color = "rgb(105, 201, 201)";
  reviews.style.color = "white";
  blogs.style.color = "white";
  blogs.style.color = "white";
});

let crd = document.querySelectorAll(".crd");
let itemPage = document.querySelector(".itemPage");
let container = document.querySelector(".container");
let itemImg = document.getElementById("itemImg");
let buyBtn = document.getElementById("buyBtn");

crd.forEach(function (curValue) {
  curValue.addEventListener("click", function () {
    console.log(curValue);
    itemPage.style.display = "flex";
    container.style.display = "none";

    let imgSrc = curValue.firstElementChild.src;
    itemImg.src = imgSrc;

    let buyText =  document.querySelector(".buyText")
    buyBtn.addEventListener("click", function () {
      document.querySelector(".buyPage").style.display = "block";
      buyText.innerHTML = `  <h3>Enter Details: </h3>
        <input type="text" placeholder="Enter Your Name" id = 'name'><br>
        <input type="text" placeholder="Enter Your Address" id = 'address'><br>
        <input type="text" placeholder="Enter Your Mobaile Number" id = 'number'><br>
        <h3>Payment Option :</h3>
        <select >
            <option value="Google-Pay">Google-Pay</option>
            <option value="Phone-Pay">Phone-Pay</option>
            <option value="Bharat-Pay">Bharat-Pay</option>
            <option value="Cash-On-Delivery">Cash-On-Delivery</option>
        </select><br>
`
           
            let button = document.createElement('button');
            button.innerText = 'Submit';
            buyText.appendChild(button);

            button.addEventListener('click',function(){
                let name = document.getElementById("name");
                if(name.value == '' && address.value == '' && number.value == ''){
                    alert("Please Enter Details")
                }else{
                    alert('Your Response Recorded');
                    document.querySelector(".buyPage").style.display = "none";
                }
            })


            let cross = document.querySelector(".cross");
            cross.addEventListener("click", function () {
            document.querySelector(".buyPage").style.display = "none";
      });
    });
  });
});
