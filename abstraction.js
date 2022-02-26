class PersegiPanjang {
    constructor(panjang, lebar) {
        this.panjang = panjang;
        this.lebar = lebar;
    }
    luas(){
        let hasil = this.panjang * this.lebar;
        return hasil;
    }
    keliling(){
        let hasil = 2 * (this.panjang + this.lebar);
        return hasil;
    }
}
let persegiPanjang = new PersegiPanjang(4, 3);
console.log(persegiPanjang.luas());
console.log(persegiPanjang.keliling());