let icns = document.getElementById("icons");
let cross = document.getElementById("crossIcon");
let notify = document.getElementById("notIcn");
let notifyCont = document.querySelector(".notContainer");
let allnotifications = document.querySelectorAll(".nots");
icns.addEventListener("click", () => {
  setTimeout(() => {
    displayAuto();
  }, 5000);
  if (notify.style.display === "none") {
    cross.style.display = "none";
    notifyCont.style.display = "none";
    notify.style.display = "block";
  } else {
    cross.style.display = "block";
    notifyCont.style.display = "block";
    notify.style.display = "none";
  }
});
function displayAuto() {
  for (let i = allnotifications.length - 1; i >= 0; i--) {
    setTimeout(() => {
      allnotifications[i].style.display = "none";
      if (i === allnotifications.length - 1) {
        notifyCont.style.display = "none";
      }
    }, i * 2000);
  }
}
// // displayAuto()
// // icns.addEventListener("click",displayAuto)
// let interval
// notify.addEventListener("click",()=>{
//     interval=setTimeout(displayAuto,5000)
//     notify.style.display="none"
//     cross.style.display="block"
//     notifyCont.style.display="block"
// })
// cross.addEventListener("click",()=>{
//     clearInterval(interval)
//     notify.style.display="block"
//     cross.style.display="none"
//     notifyCont.style.display="none"
// })
