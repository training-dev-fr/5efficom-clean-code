import Field from "./Field.js";

export default class Password extends Field{
    constructor(item) {
        super(item);
    }

    display() {
        return super.display(`<input type="password" id="${this.id}" name="${this.name}">`);
    }
}