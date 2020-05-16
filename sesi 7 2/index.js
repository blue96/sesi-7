function helperfar(number){
    return number * (9/5);
}

function helpercel(number){
    return number - 32;
}

function getFarenheit(celcius){
    return helperfar(celcius) + 32;
}

function getCelcius(farenheit){
    return helpercel(farenheit) * (5/9);
}

console.log(`15C = ${getFarenheit(15)}F`); //return 59

console.log(`59F = ${getCelcius(59)}C`); //return 15