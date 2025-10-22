const input_box = document.getElementById("input_box");
const table_content = document.getElementById("table_content");
let print_limit = document.getElementById("print_limit");
let count = 0;

input_box.addEventListener("keyup", (event) => {
  count++;
  let tr = document.createElement("tr");
  tr.innerHTML = `
    <style>
    #table_row{
    border-bottom: 1px solid black;
    }
    </style>
    <td id="table_row">${event.key}</td>
    <td id="table_row"> ${event.code}</td> `;
    
  if (count <= 10) {
    table_content.appendChild(tr);
    
  }
  else{
    print_limit.textContent = "You have reached your limit";
  }
});

