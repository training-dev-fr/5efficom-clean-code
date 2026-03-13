import Field from "./Field.js";

export default class Select extends Field{
    constructor(item) {
        super(item);
    }

    display() {
        this.select = document.createElement('select');
        for(let [key, value] of Object.entries(this.options)){
            let option = document.createElement('option');
            option.setAttribute('value',key);
            option.innerHTML = value;
            this.select.appendChild(option);
        }
        return this.select;
    }

    onChange(callback){
        this.select.addEventListener('change',() => callback(this.select.value));
    }
}