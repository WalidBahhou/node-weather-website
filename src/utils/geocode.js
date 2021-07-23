const request = require('request')

const geocode = (address, callback) => {
    const mapboxapi = {
        key: 'pk.eyJ1IjoicGFrbzMyMiIsImEiOiJja3JkamoxYnAxaWE5MzJxdWxkN2Q5M3BtIn0.J8mhCt1KK-VYn9eLjYIwFw',
        base: 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
    }
    const {key, base} = mapboxapi
    const url = `${base}${encodeURIComponent(address)}.json?access_token=${key}&limit=1`

    request({url, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode