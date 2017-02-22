// function jackhammer() {
//   alert("You win!"); 
// }

var counter = 0;
function jackhammer() {
  counter++;
  console.log(counter);
  if (counter === 5) {
    alert("You win");
  }
}

var colors = ["green", "purple", "orange", "yellow", "black", "red"];
function changeTheColor(box) {
  var color = colors[Math.floor(Math.random() * colors.length)];
  console.log("I am working");
  box.style["background-color"] = color;
}