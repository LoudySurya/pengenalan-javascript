let obj={
    alas:4,
    tinggi:5,
    luas:function(){
        return this.alas*this.tinggi/2;
    }
};

console.log("sebelum nilai properti diubah:");
console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas()\t:${obj.alas}`);

obj.alas=10;
obj.tinggi=12;

console.log("Seteleah nilai properti diubah:");
console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas()\t:${obj.alas}`);