
const onSubmit = (event) => {
    event.preventDefault();
    let text = '';
    let txtNumber = document.getElementById('txtNumber').value;
    
    for(let i = 1 ; i<= txtNumber;i++){
        text = text + i + ":";
        for (j=1 ;j<=i;j++){
            text = text + '*'
        }
        text = text + '<br>'
    }
    document.getElementById('hasil').innerHTML = text;        
}