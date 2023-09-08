var wMark = 78;
var hMark = 169;

var wJohn = 92;
var hJohn = 195;

function bmi(weight, height) {
  return weight / (height * height);
}

var bmiMark = bmi(wMark, hMark);
console.log(bmiMark);


var bmiJohn = bmi(wJohn, hJohn);
console.log(bmiJohn);

var markHigherBMI = bmiMark > bmiJohn;

console.log("Is Mark's BMI higher than John's? " + markHigherBMI);

// If / else statements
if (bmiMark > bmiJohn) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher than Mark's");
}

console.log("------------------");

if (bmiMark > bmiJohn) {
  console.log("Mark's BMI " + bmiMark + " is higher than John's" + bmiJohn);
} else {
  console.log("John's BMI " + bmiJohn + " is higher than Mark's" + bmiMark);
}
