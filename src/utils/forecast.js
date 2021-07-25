const request = require('request')

const forecast = (long, lat, callback) => {
    
    const openweatherapi = {
        key: '7be5f8e14666d34bb3d5b19dcb811149',
        base: 'https://api.openweathermap.org/data/2.5/onecall'
    }
    const {key, base} = openweatherapi
    const url = `${base}?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(long)}&units=metric&APPID=${key}`

request ({url, json: true}, (error, { body }) => {
    if (error) {
        callback(callback('Unable to connect to weather service!', undefined))
    } else if (body.message) {
        callback(body.message, undefined)
    } else {
        callback(undefined, {
            temp: body.current.temp,
            summary: body.current.weather[0].description,
            tempmin: body.daily[0].temp.min,
            tempmax: body.daily[0].temp.max,
            windspeed: body.daily[0].wind_speed
        })
    }
})
}

module.exports = forecast