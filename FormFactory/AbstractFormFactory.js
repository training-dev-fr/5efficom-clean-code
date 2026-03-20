import Text from './FactoryItem/Text.js';
import Password from './FactoryItem/Password.js';

export default class AbstractFormFactory {
    constructor() {

    }

    createText(item){
        return new Text()
    }

    createPassword(item){
        return new Password()
    }

    createRatings(item){

    }
}

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}