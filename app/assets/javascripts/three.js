var numbers = [];

function threeBox(boxNumber) {
  if (numbers.indexOf(boxNumber) === -1) {
    numbers.push(boxNumber);
  }
  if (numbers.length === 3) {
    alert("You have won");
    numbers = [];
  }
  console.log(numbers)
  }
