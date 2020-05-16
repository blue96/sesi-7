const convertUmurKucing = (umurManusia) => {
    if (umurManusia >=0 && umurManusia <1) {
        return umurManusia * 15;
    }
    else if (umurManusia > 1 && umurManusia <2){
        return (((umurManusia - 1) * 2) + 15); 
    }
    else if (umurManusia > 2){
        return (((umurManusia - 2) * 4) + 24); 
    }
    else if (umurManusia === 2){
        return 24; 
    }
    else if (umurManusia === 1){
        return 15; 
    }
}

const onSubmit = (event) => {
    event.preventDefault();
    let umurMan = document.getElementById('txtUmurManusia').value;
    document.getElementById('hasil').innerHTML = convertUmurKucing(umurMan);
}
}