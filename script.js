function fillInputs() {
 let B1 = prompt("B-1:");
  if (B1 > 0 && B1 < 16) {
  document.getElementById("b1").innerHTML = B1;
  } else {
    alert("Invalid number...");
    }
  let I1 = prompt("I-1:");
  if (I1 > 0 && I1 < 16) {
  document.getElementById("i1").innerHTML = I1;
  } else {
    alert("Invalid number...");
    }
}
