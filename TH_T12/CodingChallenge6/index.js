var billvalue = 100;

function calcTip(billvalue) {
  if (billvalue >= 50 && billvalue <= 300) {
    return billvalue * 0.15;
  } else {
    return billvalue * 0.2;
  }
}

console.log(calcTip(billvalue) + billvalue);

var arrBillValue = [125, 555, 44];

var arrTip = [
  calcTip(arrBillValue[0]),
  calcTip(arrBillValue[1]),
  calcTip(arrBillValue[2]),
];
var totalBill = [
  arrTip[0] + arrBillValue[0],
  arrTip[1] + arrBillValue[1],
  arrTip[2] + arrBillValue[2],
];
console.log(totalBill);
