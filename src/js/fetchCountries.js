import countryTemplate from '../templates/counrtyMarkup.hbs'
import refs from './refs'

const { body, countryCard } = refs;

export default function fetchCountries(searchQuery) {
    const base_url = `https://restcountries.com/v3.1/`;
    let end_point = `name`
    let query_params = `${searchQuery}`
    const url = base_url + end_point + '/' + query_params;
    fetch(url)
        .then((result) => {
            console.log("result", result)
            return result.json()
        })
        .then((data) => {
            console.log('data', data)
            let counrtyMarkup = countryTemplate(data);
            countryCard.insertAdjacentHTML('beforeend', counrtyMarkup)
            return data
        })
        .catch((error) => {
            console.log(error)
    })
}
