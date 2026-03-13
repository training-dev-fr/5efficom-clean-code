export default class JQuery{
    querySelector(selector){
        this.element = document.querySelector(selector);
    }

    setColor(color){
        this.element.style.color = color;
        return this;
    }

    setFontSize(size){
        this.element.style.fontSize = size;
        return this;
    }
}

let $ = (selector) => {
    let jquery = new JQuery();
    jquery.querySelector(selector);
    return jquery;
}

export {$};