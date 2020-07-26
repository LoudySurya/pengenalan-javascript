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
}

let obj=new Segitiga(a,t);
console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas()\t:${obj.luas()}`);