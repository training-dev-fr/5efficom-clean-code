class Pile{
    constructor(){
        this.list = [];
    }

    push(element){
        this.list.push(element);
    }

    pull(){
        this.list.pop();
    }
}