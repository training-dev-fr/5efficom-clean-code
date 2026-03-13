Array.prototype.forEach2 = function(predicate){
    for(let element of this){
        predicate(element);
    }
}

Array.prototype.map2 = function(predicate){
    let result = [];
    for(let element of this){
        result.push(predicate(element));
    }
    return result;
}

Array.prototype.filter2 = function(predicate){
    let result = [];
    for(let element of this){
        if(predicate(element)){
            result.push(element);
        }
    }
    return result;
}

Array.prototype.find2 = function(predicate){
    for(let element of this){
        if(predicate(element)){
            return element;
        }
    }   
}

let arr = [1,2,3,4,5];

function test(){
    return;
}

let toto;
console.log(toto);