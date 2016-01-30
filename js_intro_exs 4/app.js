var response = prompt("What was your best marathon time?");

if (response > 4 && response <= 5) {
  alert("Time was average");
} else if (response > 2 && response <=4) {
  alert("Time was excellent");
} else if (response > 5) {
  alert("Speed up!");
} else {
  alert("Please enter a correct time.");
}


for(i=0; i<21; i++){
  if(i%2 === 0){
    console.log(i + " is even");
  }else{
    console.log(i + " is odd");
  }
}

function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

function maxOfThree(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}