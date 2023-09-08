var temperature = [12, 5, -5, 0, 4];

function printForecast(arr) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str += `... ${arr[i]}°C in ${i + 1} days `;
    }
    console.log(str);
    }
printForecast(temperature);
