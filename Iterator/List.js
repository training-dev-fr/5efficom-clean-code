export default class List{
    constructor(items, firstItem){
        this.items = items;
        this.currentItem = firstItem;
    }

    isNext(){
        return this.currentItem.nextItem !== null;
    }

    next(){
        this.currentItem = this.currentItem.nextItem;
    }

    forEach(callback){
        callback(this.currentItem);
        if(this.isNext()){
            this.next();
            this.forEach(callback);
        }
    }
}