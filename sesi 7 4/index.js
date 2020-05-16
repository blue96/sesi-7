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

console.log(`umur kucing ketika 1 tahun manusia adalah ${convertUmurKucing(1)} tahun kucing`);
console.log(`umur kucing ketika 2 tahun manusia adalah ${convertUmurKucing(2)} tahun kucing`);
console.log(`umur kucing ketika 2.5 tahun manusia adalah ${convertUmurKucing(2.5)} tahun kucing`);
console.log(`umur kucing ketika 3 tahun manusia adalah ${convertUmurKucing(3)} tahun kucing`);
console.log(`umur kucing ketika 3.3 tahun manusia adalah ${convertUmurKucing(3.3)} tahun kucing`);
console.log(`umur kucing ketika 4 tahun manusia adalah ${convertUmurKucing(4)} tahun kucing`);