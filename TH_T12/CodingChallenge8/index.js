var billvalue = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var tip = [];
var total = [];

function calcTip(billvalue) {
  if (billvalue >= 50 && billvalue <= 300) {
    return billvalue * 0.15;
  } else {
    return billvalue * 0.2;
  }
}

for (var i = 0; i < billvalue.length; i++) {
  tip.push(calcTip(billvalue[i]));
  total.push(tip[i] + billvalue[i]);
}

console.log(tip);
console.log(total);

// Bonus

function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log("result: " + calcAverage([2, 3, 7]));