var a=2;
var b=0;

class DivisionByZeroError extends Error{
    constructor(msg){
        super(msg);
        this.name=this.constructor.name;
        this.message=msg;
    }
    getMessage(){
        return this.message;
    }
}

try{
    if(b==0){
        throw new DivisionByZeroError(
            'Nilai B tidak boleh 0'
        );
    }
    let c=a/b;
    console.log(`${a}/${b}=${c}`);
}catch(e){
    console.log(e.getMessage());
}