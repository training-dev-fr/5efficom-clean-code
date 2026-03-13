import FormFactory from "./FormFactory.js";

const formHTML = document.querySelector('.form');

async function loadData(){
    let result = await fetch('./dataset.json');
    let data = await result.json();
    return data;
}

function showForm(element){
    let item = new FormFactory(element)
    formHTML.innerHTML += item.display();
}


async function init(){
    const data = await loadData();
    for(let element of data){
        showForm(element);
    }
}

init();