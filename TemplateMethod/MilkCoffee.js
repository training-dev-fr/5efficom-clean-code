class MilkCoffee extends Beverage{
    prepare(){
        this.super().prepare();
        console.log("Préparation de café au lait en cours")
    }
    selectIngredient(){
        console.log("add coffee");
        console.log("add milk");
    }
}