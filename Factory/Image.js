export default class Image{
    constructor(item){
        this.item = item;
    }

    display(){
        return `<img src="${this.item.url}"/>`
    }
}