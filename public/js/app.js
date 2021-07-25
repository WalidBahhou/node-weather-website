const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()  
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''
    const location = search.value
    search.value = ''


    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                messageOne.textContent = data.error
            } else {
                const stringForecastUpper = data.forecast
                const toUpper = stringForecastUpper[0].toUpperCase() + stringForecastUpper.substring(1)
                messageOne.textContent = data.location
                messageTwo.textContent =  toUpper +
                ', the temperateure is '+ data.temp + ' C.'
                messageThree.textContent = 'The max/min temperatures for the day are '+
                data.min + ' / ' + data.max + ' and the wind speed is ' + data.windspeed +
                ' Km/h.'
            }
        })
    })
})