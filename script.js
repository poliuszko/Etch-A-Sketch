"use strict";
const r = 4;
const c = 4;

for (let indexr = 0; indexr < r; indexr++) {
  var div_row = document.createElement("div");
  div_row.style = "display: flex";
  div_row.className = "divId";
  for (let indexc = 0; indexc < c; indexc++) {
    var div_col = document.createElement("div");
    div_col.style.width = "100px";
    div_col.style.padding = "5px";
    div_col.style.height = "100px";
    div_col.style.background = "gray";
    div_col.style.color = "white";
    div_col.innerHTML = `${indexr}, ${indexc}`;
    div_col.className = "divIdCol";

    div_col.style.border = "1px solid black";
    div_col.style.borderRadius = "2px ";
    div_col.display = "flex";
    div_row.appendChild(div_col);
    console.log(indexr, indexc);
    document.getElementById("container").appendChild(div_row);
  }
}
