export default class Banque{
    constructor(DABList){
        this.DABList = DABList;
        for(let DAB of this.DABList){
            DAB.addEvent("withdraw", this.checkAccount);
            DAB.addEvent("withdraw", this.removeFromAccount);
            DAB.addEvent("deposite", this.addToAccount);
        }
    }

    checkAccount({amount, dab}){
        //
        console.log("Check if account as enough money to withdraw : " + amount + " \n DAB : " + dab.name)
    }

    removeFromAccount({amount, dab}){
        //
        console.log("Remove " + amount + " from account"+ " \n DAB : " + dab.name)
    }

    addToAccount({amount, dab}){
        //
        console.log("Add " + amount + " to account"+ " \n DAB : " + dab.name)
    }
}