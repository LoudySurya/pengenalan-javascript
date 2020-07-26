var readline=require('readline-sync');

function hitung (a,b,callback){
    return callback(a,b);

}

let a=parseFloat(readline.question("Masukkan nilai a:"));
let b=parseFloat(readline.question("Masukkan nilai b:"));

console.log(`${a}+${b}=`+hitung(a,b,function(){return a+b;}));
console.log(`${a}-${b}=`+hitung(a,b,function(){return a-b;}));
console.log(`${a}*${b}=`+hitung(a,b,function(){return a*b;}));
console.log(`${a}/${b}=`+hitung(a,b,function(){return a/b;}));
