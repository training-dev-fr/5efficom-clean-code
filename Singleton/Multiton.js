class Multiton{
    constructor(){
        if(!Multiton.instanceList){
            Multiton.instanceList = [];
        }
        if(Multiton.instanceList.length > 4){
            throw new Error("Max instance reach");
        }
        Multiton.instanceList.push(this);
        return Multiton.instanceList;
    }
}


console.log(new Multiton());
console.log(new Multiton());
console.log(new Multiton());
console.log(new Multiton());
console.log(new Multiton());