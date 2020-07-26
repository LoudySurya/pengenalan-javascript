function increment(a){
    a.x +=1;
}

let obj =new Object();
obj.x=10;

console.log('sebelum dinaikkan nilainnya:');
console.log(`obj.x${obj.x}`);

increment (obj);

console.log("\n Setelah dinaikkan nilainya");
console.log(`obj.x: ${obj.x}`);