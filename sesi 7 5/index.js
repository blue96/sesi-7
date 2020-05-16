const greet = (nama, produk) => {return `Terima kasih ${nama} telah membeli produk ${produk}`}

const onSubmit = (event) => {
    event.preventDefault();
    let nama = document.getElementById('txtNama').value;
    let produk = document.getElementById('txtProduk').value;
    alert(greet(nama,produk));
}