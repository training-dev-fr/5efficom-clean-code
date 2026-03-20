class Beverage{
    prepare() {
        this.chooseBeverage();
        this.pay();
        this.heatingWater();
        this.pourWater();
        if(this.selectIngredient){
            this.selectIngredient();
        }
    }

    chooseBeverage(){
        console.log("Choix effectué");
    }

    pay(){
        console.log("Paiement effectué")
    }

    heatingWater(){
        console.log("Eau en chauffe")
    }

    pourWater(){
        console.log("Eau versée");
    }

    selectIngredient(){
        throw new Error("Not implemented");
    }
}