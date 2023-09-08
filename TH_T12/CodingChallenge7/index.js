var Mark = ["Mark Miller", 78, 169];
var John = ["John Smith", 92, 195];

function bmi(weight, height) {
    return weight / (height * height);
}

var bmiMark = bmi(Mark[1], Mark[2]);
var bmiJohn = bmi(John[1], John[2]);

if( bmiMark > bmiJohn ) {
    console.log("Mark's BMI " + bmiMark + " is higher than John's " + bmiJohn);
} else {
    console.log("John's BMI " + bmiJohn + " is higher than Mark's " + bmiMark);
}
