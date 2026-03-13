import DiapoFactory from "./DiapoFactory.js";

const diaporamaHTML = document.querySelector('.diaporama');

async function loadData(){
    let result = await fetch('./content.json');
    let data = await result.json();
    return data;
}

function showDiaporama(data){
    let element = new DiapoFactory(data[currentItem]);
    diaporamaHTML.innerHTML = element.display();
    
}

function prepareEvent(data){
    document.querySelector('#prev').addEventListener('click',function(){
        currentItem--;
        showDiaporama(data);
    });
    document.querySelector('#next').addEventListener('click',function(){
        currentItem++;
        showDiaporama(data);
    });
}

let currentItem = null;
async function init(){
    const data = await loadData();
    prepareEvent(data);
    currentItem = 0;
    showDiaporama(data);
}

init();