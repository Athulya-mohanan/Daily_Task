let input = document.getElementById("input");
let content = document.getElementById("content");
input.addEventListener("input", () => {
  let textvalue = input.value;

  if (content.textContent.includes(textvalue)) {
  }
});

