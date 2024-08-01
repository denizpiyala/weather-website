const url = 'https://api.openweathermap.org/data/3.0'
const key = '1e638052eb4a5ffd7058e71a62005941'
const setQuery = (e) => {
    if(e.keyCode =='13')
    getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}
const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name},${result.sys.country}`

    let temperature = document.querySelector('.temperature')
    temperature.innerText = `${Math.round(result.main.temperature)}°C`

    let describe = document.querySelector('.describe')
    describe.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temperature_min)}°C /
    ${Math.round(result.main.temperature_max)}°C  `

}

const searchbar = document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)