import Password from "./FactoryItem/Password.js";
import Text from "./FactoryItem/Text.js";

export default class FormFactory{
    constructor(item){
        if(item.type === "text"){
            return new Text(item);
        }
        if(item.type === "password"){
            return new Password(item);
        }
    }
}