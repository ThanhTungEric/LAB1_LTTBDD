var Dolphins = [100 , 100 , 100];
var Koalas = [40 , 50 , 50];

function calcAverage(scores) {
    var sum = 0;
    for (var i = 0; i < scores.length; i++) {
        sum = sum + scores[i];
    }
    var avg = sum / scores.length;
    return avg;
}

var avgDolhins = calcAverage(Dolphins);
var avgKoalas = calcAverage(Koalas);

console.log(avgDolhins);

if (avgDolhins > avgKoalas*2) {
    console.log(" Dolphins win ( " +avgDolhins+ " vs " +avgKoalas+ ") ");
}
else if (avgKoalas > avgDolhins*2) {
    console.log(" Koalas win ( " +avgKoalas+ " vs " +avgDolhins+ ") ");
}
else {
    console.log("No one wins the trophy");
}