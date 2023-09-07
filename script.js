"use strict";

const btn_set_sq = document.getElementById("set_sq");
const btn_set_red = document.getElementById("set_red");
const btn_set_blue = document.getElementById("set_blue");
const btn_set_green = document.getElementById("set_green");
const btn_set_black = document.getElementById("set_black");

btn_set_sq.addEventListener("click", function () {
  document.getElementById("innerContainer").innerHTML = "";
  const r = prompt("How many squares");
  console.log("r", r);
  generate_matrix(r);
});

btn_set_red.addEventListener("click", () => color_px = "red" )
btn_set_blue.addEventListener("click", () => color_px = "blue" )
btn_set_green.addEventListener("click", () => color_px = "green" )
btn_set_black.addEventListener("click", () => color_px = "black" )

let color_px = "black";

function changeColor(e, colr = "black") {
    console.log("Event:", event)
    console.log("colr", colr)
  //console.log(mouseDown, e.type);
  //console.log(e.type === "mouseover" && mouseDown);
    console.log(e.target)
    if (e.type === "mouseover") {
    e.target.classList.add(colr);
  }
    
}

function generate_matrix(r) {
  //let mouseDown = false;
  //document.onmousedown = () => (mouseDown = true);
  //document.onmouseup = () => (mouseDown = false);

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
      const b = "black";
      //div_col.style.border = "1px solid black";
      //div_col.style.borderRadius = "2px ";
      div_col.display = "flex";
      //div_col.addEventListener("mouseover", changeColor(e, "black"));
      div_col.addEventListener("mouseover", function(e) {changeColor(e,color_px)});
      
      //div_col.addEventListener("mousedown", function (e) {
      //  this.classList.add("hoverc");

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
