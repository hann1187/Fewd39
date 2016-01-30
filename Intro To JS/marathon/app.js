// This is the marathon exercise
var response = prompt("What was your best marathon time?");
if (response > 4 && response <= 5) {
  alert("Time was average");

} else if (response > 2 && response <=4) {
  alert("Time was excellent!");

} else if (response > 5) {
  alert("Speed up!");

} else {
  alert("Please enter a correct time.");
}

// This is Homework part 1 "For loop"

for (var i = 0; i <= 20; i++) {
	if (i % 2===0) {
		console.log(i + 'is even');
	} else {
		console.log(i + 'is odd');
	}
}

// This is Homework part 1 "While loop"
var i =0;
while (i<=20) {
	if (i % 2===0) {
		console.log(i + 'is even');
	} else {
		console.log(i + 'is odd');
	}
}


}

// This is Homework part 2: function Max

var num1 = 6;
var num2 = 10;

var maxNum = Math.max(num1, num2);

if (maxNum==num1){
	alert(num1);
}
else if (maxNum==num2){
	alert(num2)
}






