import Field from "./Field.js";

export default class Text extends Field{
    constructor(item) {
        super(item);
    }

    display() {
        this.text = document.createElement('input');
        this.text.type = "text";
        return super.display(this.text);
    }

    onChange(callback){
        this.text.addEventListener('keyup',() => callback(this.text.value));
    }
}