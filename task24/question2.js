let images = document.querySelectorAll(".img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let container = document.getElementById("container");
let cont = document.getElementById("cont");
let index = 0;
next.addEventListener("click", nextItem);

function nextItem() {
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
  for (let i = 0; i < images.length; i++) {
    if (i !== index) {
      images[i].style.display = "none";
    } else {
      images[index].style.display = "block";
    }
  }
}
prev.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  for (let i = 0; i < images.length; i++) {
    if (i !== index) {
      images[i].style.display = "none";
    } else {
      images[index].style.display = "block";
    }
  }
});
let timeIn = setInterval(nextItem, 3000);
let newInter
container.addEventListener("mouseenter", () => {
  clearInterval(timeIn);
  clearInterval(newInter)
});
container.addEventListener("mouseleave", () => {
    clearInterval(timeIn);
  newInter=setInterval(nextItem, 3000);
});


