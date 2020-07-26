var readline = require('readline-sync');

var a= parseInt(readline.question("Masukkan Nilai a\n"));
var b= parseInt(readline.question("Masukkan Nilaib\n"));

function PB(a,b){
    var c=a/b;
    return(c>=0)? Math.floor(c):Math.ceil(c);


}
console.log(`${a}/${b}=${PB(a,b)}`);