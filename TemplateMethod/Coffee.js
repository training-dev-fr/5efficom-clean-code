class Coffee extends Beverage{
    prepare(){
        this.super().prepare();
        console.log("Préparation de café en cours")
    }
    selectIngredient(){
        console.log("add coffee");
    }
}