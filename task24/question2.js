let images = document.querySelectorAll(".img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let container = document.getElementById("container");
let track=document.getElementById("sliderTrack")

let index = 0;
let total=images.length
next.addEventListener("click", nextItem);

function nextItem() {
  index++;
 track.style.transition = `transform 0.6s ease-in-out`
 track.style.transform=`translateX(-${index * 100}vw`;

// if reached the duplicate
  if(index===total-1){
    setTimeout(()=>{
      track.style.transition="none"
      track.style.transform="translateX(0)"
      index=0
    },600)
  }
}
function prevItem(){
  if(index===0)
  {  index=total-1;
  track.style.transition="none"
  track.style.transform=`translateX(-${index * 100}vw`;}
  setTimeout(()=>{
    index--;
    track.style.transition=`transform 0.6s ease-in-out`
    track.style.transform=`translateX(-${index * 100}vw`;
  },20)
}
next.addEventListener("click",nextItem)
prev.addEventListener("click",prevItem)


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


/**track.style.transform = `translateX(-${index * 100}vw)`;
 * 
 * 0vw → slide 1

-100vw → slide 2

-200vw → slide 3

-300vw → duplicate slide 1 */

