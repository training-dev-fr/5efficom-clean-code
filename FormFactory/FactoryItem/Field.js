export default class Field {
    constructor(item) {
        Object.assign(this, item);
    }

    display(children) {
        return `<div class="form-group">
                    <label for="${this.id}">${this.label}</label>
                    ${children}
                </div>`
    }
}