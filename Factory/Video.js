export default class Video{
    constructor(item){
        this.item = item;
    }

    display(){
        return `<video src="${this.item.url}"/>`
    }
}