"use strict";

const btn_set_sq = document.getElementById("set_sq");
console.log(btn_set_sq);

btn_set_sq.addEventListener("click", function () {
  document.getElementById("innerContainer").innerHTML = "";
  const r = prompt("How many squares");
  console.log("r", r);
  generate_matrix(r);
});

function generate_matrix(r) {
  function changeColor(e) {
    console.log(mouseDown, e.type);
    console.log(e.type === "mouseover" && mouseDown);
    if (e.type === "mouseover" && mouseDown) {
      this.classList.add("hoverc");
    }
  }

  let mouseDown = false;
  document.onmousedown = () => (mouseDown = true);
  document.onmouseup = () => (mouseDown = false);

  for (let indexr = 0; indexr < r; indexr++) {
    var div_row = document.createElement("div");
    div_row.style = "display: flex; align-content: space-around;";
    div_row.style.width = "auto";
    div_row.className = "divId";

    for (let indexc = 0; indexc < r; indexc++) {
      var div_col = document.createElement("div");
      div_col.style.width = "auto";
      div_col.style.padding = "5px";
      div_col.style.height = "auto";

      //div_col.style.background = "gray";
      div_col.style.color = "white";
      //div_col.innerHTML = `${indexr}, ${indexc}`;
      div_col.className = "divIdCol";

      //div_col.style.border = "1px solid black";
      //div_col.style.borderRadius = "2px ";
      div_col.display = "flex";
      div_col.addEventListener("mouseover", changeColor);
      div_col.addEventListener("mousedown", function (e) {
        this.classList.add("hoverc");
      });

      //e.target.classList.add("hover");
      //e.target.style.backgroundColor = "red";

      //div_col.addEventListener('mousedown', self.classList.toggle('hover'))

      div_row.appendChild(div_col);
      //console.log(indexr, indexc);
    }
    document.getElementById("innerContainer").appendChild(div_row);
  }
}
//gridElement.addEventListener('mouseover', changeColor)
//    gridElement.addEventListener('mousedown', changeColor)
