const input_value=document.getElementById("input_value")
const tables=document.getElementById("display_table")

input_value.addEventListener("keyup",(event)=>{
    let tr=document.createElement("tr")

    tr.innerHTML=` <style>
        #table_row{
        border:1px solid black
        }
    </style>

    <td id="table_row">${event.key}</td>
    <td id="table_row">${event.code}</td>
    <td id="table_row">${event.timeStamp}</td>`
    if(tables.rows.length>10){
       tables.deleteRow(1) 
    }
    tables.appendChild(tr)
  
})