import FormFactory from "./FormFactory.js";
const formFactory = new FormFactory();

const formHTML = document.querySelector('.form');

async function loadData(){
    let result = await fetch('./dataset.json');
    let data = await result.json();
    return data;
}

async function showForm(element){
    let item = await formFactory.create(element)
    formHTML.appendChild(item.display());
    item.onChange(value => console.log(value));
}


async function init(){
    const data = await loadData();
    for(let element of data){
        await showForm(element);
    }
}

init();