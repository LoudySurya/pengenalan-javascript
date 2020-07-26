var a=3;
var t=4;

class Segitiga{
    constructor(a,t){
        this.alas=a;
        this.tinggi=t;
    }
    luas(){
        return this.alas*this.tinggi/2;
    }
    cetakPropert(){
        console.log(`alas\t:${this.alas}`);
        console.log(`tinggi\t:${this.tinggi}`);

        class SegitigaWarna extends Segitiga{
            constructor(a,t,w){
                super(a,t);
                this.warna=w;
            }
            cetakPropert(){
                super.cetakPropert();
                console.log(`warna\t:${this.warna}`);
            }
        }
        let obj=new SegitigaWarna(a,t,'merah');
        obj.cetakPropert;

        console.log(`luas\r:${obj.luas()}`);
    
    }
}