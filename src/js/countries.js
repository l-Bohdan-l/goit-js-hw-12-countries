import refs from './refs'
import fetchCountries from './fetchCountries'
import countryTemplate from '../templates/counrtyMarkup.hbs'



const { inputEl, countryList, body, countryCard } = refs;
const debounce = require('lodash.debounce')
inputEl.addEventListener('input', debounce(findCountry, 500));

function clearCountries() {
    countryCard.innerHTML = '';
    countryList.innerHTML = '';
}

function findCountry(e) {
    clearCountries();
    // console.log(e.target.value);
    let searchQuery = e.target.value;
    fetchCountries(searchQuery);
    // let counrtyMarkup = countryTemplate(fetchCountries(searchQuery));
    // countryCard.insertAdjacentHTML('beforeend', counrtyMarkup)
}

