function Segitiga(a,t){
    this.alas=a;
    this.tinggi=t;
}
Segitiga.prototype.luas=function(){
    return this.alas*this.tinggi/2;
}