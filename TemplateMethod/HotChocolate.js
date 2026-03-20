class HotChocolate extends Beverage{
     prepare(){
        this.super().prepare();
        console.log("Préparation de chocolat chaud en cours")
    }
    selectIngredient(){
        console.log("add chocolate");
        console.log("add milk");
    }
}