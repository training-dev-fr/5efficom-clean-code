class Multiton{
    constructor(){
        if(!Multiton.instance){
            Multiton.instance = [];
        }
        if(Multiton.instance.length > 4){
            throw new Error("Max instance reach");
        }
        Multiton.instance.push(this);
        return Multiton.instance;
    }
}


console.log(new Multiton());
console.log(new Multiton());
console.log(new Multiton());
console.log(new Multiton());
console.log(new Multiton());