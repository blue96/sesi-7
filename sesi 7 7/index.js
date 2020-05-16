
function helpercel(number){
    return number - 32;
}

function getCelcius(farenheit){
    return helpercel(farenheit) * (5/9);
}

const onSubmit = (event) => {
    event.preventDefault();
    let txtFahrenheit = document.getElementById('txtFahrenheit').value;
    document.getElementById('hasil').innerHTML = `${txtFahrenheit}F = ${getCelcius(parseFloat(txtFahrenheit))}C`;
}