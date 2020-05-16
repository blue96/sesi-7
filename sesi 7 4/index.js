const convertToLower = (text = "") => {return text.toLowerCase()}

const onSubmit = (event) => {
    event.preventDefault();
    let tulisan = document.getElementById('txtUpper').value;
    document.getElementById('hasil').innerHTML = convertToLower(tulisan);
}