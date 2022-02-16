// creating a variable for the search form div
let searchFormEl = document.querySelector('#search-form');

function handleSearch(event) {
    event.preventDefault();

    let searchInputVal = document.querySelector("#search-input");
    let selectInputVal = document.querySelector("#format-input");

    if(!searchInputVal) {
        console.error("You need a search input value!");
        return;
    }

    let queryString = './search-results.html?q=' + searchInputVal + '&format=' + selectInputVal;

    location.assign(queryString);
}

searchFormEl.addEventListener("submit", handleSearch);
