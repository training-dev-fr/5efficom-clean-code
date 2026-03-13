import Field from "./FactoryItem/Field.js";

export default class FormFactory {
    constructor() {

    }

    async create(item){
        const module = await import(`./FactoryItem/${capitalize(item.type)}.js`);
        let Item = module.default;

        if(!(Item.prototype instanceof Field)){
            throw new Error(`${item.type} n'est pas un type pris en charge dans ce formulaire`);
        }

        return new Item(item);
    }


}

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}