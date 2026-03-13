import Field from "./Field.js";

export default class Email extends Field{
    constructor(item){
        super(item);
    }

    display(){
        return super.display(`<input type="email" id="${this.id}" name="${this.name}">`);
    }
}