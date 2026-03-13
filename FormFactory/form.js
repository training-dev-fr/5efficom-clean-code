const formHTML = document.querySelector('.form');

async function loadData(){
    let result = await fetch('./dataset.json');
    let data = await result.json();
    return data;
}

function showForm(data){
    
}


async function init(){
    const data = await loadData();
    for(let element of data){
        showForm(element);
    }
}

init();