var Dolphins = [9, 12, 1];
var Koalas = [9, 5, 13];


var DolphinsAverage = (Dolphins[0] + Dolphins[1] + Dolphins[2]) / 3;
var KoalasAverage = (Koalas[0] + Koalas[1] + Koalas[2]) / 3;

if (DolphinsAverage > KoalasAverage) {
    console.log("Dolphins win the trophy");
} else if (KoalasAverage > DolphinsAverage) {
    console.log("Koalas win the trophy");
} else if (DolphinsAverage === KoalasAverage) {
    console.log("Both win the trophy");
} else {
    console.log("No one wins the trophy");
}

// Bonus 1
if(DolphinsAverage >= 100 && DolphinsAverage > KoalasAverage){
    console.log("Dolphins win the trophy with Bonus 1");
} else if (KoalasAverage >= 100 && KoalasAverage > DolphinsAverage) {
    console.log("Koalas win the trophy with Bonus 1");
} else if (DolphinsAverage == KoalasAverage && DolphinsAverage >= 100 && KoalasAverage >= 100) {
    console.log("Both win the trophy with Bonus 2");
} else {
    console.log("No one wins the trophy");
}