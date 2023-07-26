let nav_links = document.querySelectorAll(".nav-links");
let displayContent = document.querySelectorAll("#content");

nav_links.forEach((nav, index) => {
  nav.addEventListener("click", () => {
    nav_links.forEach((ele) => {
      ele.classList.remove("active");
    });

    nav.classList.add("active");
    displayContent.forEach((tab) => tab.classList.remove("active"));
    displayContent[index].classList.add("active");
  });
});

let productImg = document.getElementById("displayShoe");
let shoe_btn = document.querySelectorAll(".btn_img");
let buyNow = document.querySelector(".buyNow");

let clr = ["#f55ab9", "#2684db", "#a922e7"];

shoe_btn.forEach((item, index) => {
  item.addEventListener("click", () => {
    shoe_btn.forEach((ele) => ele.classList.remove("active"));
    productImg.src = shoe_btn[index].src;
    buyNow.style.backgroundColor = clr[index];

    item.classList.add("active");
  });
});

let password = document.querySelector(".password");
let confirmPassword = document.querySelector(".cpassword");
let pssIc1 = document.querySelector("#icon1");
let pssIc2 = document.querySelector("#icon2");

function showHide(passType) {
  if (passType.type === "password") {
    passType.setAttribute("type", "text");
  } else {
    passType.setAttribute("type", "password");
  }
}

pssIc1.addEventListener("click", function () {
  showHide(password);
});

pssIc2.addEventListener("click", function () {
  showHide(confirmPassword);
});

let menu_icon = document
  .querySelector("#menu_icon")
  .addEventListener("click", () => {
    let mainContainer = document.querySelector(".Links");
    let NavbarContain = document.querySelector(".container");

    mainContainer.classList.toggle("active");
    if (mainContainer.classList.contains("active")) {
      displayContent.forEach((content) => {
        content.style.marginTop = "200px";
      });
    } else {
      displayContent.forEach((content) => {
        content.style.marginTop = "0";
      });
    }
  });
