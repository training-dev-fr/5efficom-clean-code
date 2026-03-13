import Field from "./Field.js";

export default class Text extends Field{
    constructor(item) {
        super(item);
    }

    display() {
        return super.display(`<input type="text" id="${this.id}" name="${this.name}">`);
    }
}