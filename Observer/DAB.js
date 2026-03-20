export default class DAB{
    constructor(name){
        this.name = name;
        this.callbackList = [];
    }

    withdraw(amount){
        //
        for(let event of this.callbackList.filter(e => e.event === "withdraw")){
            event.callback({amount, dab: this});
        }
        return amount;
    }

    deposite(amount){
        //
        for(let event of this.callbackList.filter(e => e.event === "deposite")){
            event.callback({amount, dab: this});
        }
        return amount;
    }

    addEvent(event, callback){
        this.callbackList.push({event, callback});
    }
}