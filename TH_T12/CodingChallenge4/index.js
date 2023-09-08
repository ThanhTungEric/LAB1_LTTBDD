var billvalue = 430;

var tip = billvalue >= 50 && billvalue <= 300 ? billvalue * 0.15 : billvalue * 0.2;

console.log(`The bill was ${billvalue}, the tip was ${tip}, and the total value ${billvalue + tip}`);