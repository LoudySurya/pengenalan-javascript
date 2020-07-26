var a=3;
var b=4;

function hipotenusa(a,b){
    function kuadrat(x){
        return x*x;
    }
    return c=Math.sqrt(kuadrat(a)+kuadrat(b));

}
console.log('Menghitung sisi miring segitiga siku-siku');

var c= hipotenusa(a,b);

console.log(`Sisi miring =${c}`);