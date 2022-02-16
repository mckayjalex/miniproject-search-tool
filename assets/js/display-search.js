let resultTextEl = document.querySelector('#result-text');
let resultContentEl = document.querySelector('#result-content');
let seachFormEl = document.querySelector('#search-form');

function getParams() {
    let searchParemsArr = document.location.search.split('&');

    let query = searchParemsArr[0].split('=').pop();
    let format = searchParemsArr[1].split('=').pop();

    searchApi(query, format);
}

function printResults(resultObj) {
    console.log(resultObj);

    let resultCard = document.createElement('div');
    resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

    let resultBody = document.createElement('div');
    resultBody.classList.add('card-body');
    resultCard.append(resultBody);

    let titleEl = document.createElement('h3');
    titleEl.textContent = resultObj.title;

    
}