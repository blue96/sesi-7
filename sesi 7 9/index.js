function onload(){
    let name = '';
    let age = 0;
    let money = 0;
    let pesan = '';
    let status = false;
    name = prompt('Masukkan nama','');
    if (name === ''){
        alert('Anda tidak boleh masuk!');
    }
    else{
        age = prompt('masukkan umur', 0);
        while(status===false){
            pesan = prompt('pesan juice atau anggur', '');
            if (pesan.toLowerCase() == 'juice' || pesan.toLowerCase() == 'anggur'){
                status = true;
            }
        }
        if (pesan.toLowerCase() === 'juice' && age <= 17 || pesan.toLowerCase() === 'anggur' && age > 17){
            money = prompt('masukkan jumlah uang',0);
            if ((pesan.toLowerCase() === 'juice' && money >= 50000)||(pesan.toLowerCase() === 'anggur' && money >= 300000)){
                alert (`Anda bisa pesan ${pesan.toLowerCase()}. Sisa uang anda: ${money - (pesan.toLowerCase()==='juice' ? 50000 : 300000) }`);
            }
            else{
                alert('Uang tidak cukup. Anda harus pulang.')
            }
        }
        else{
            alert('Anda tidak boleh masuk!')
        }
    }
}