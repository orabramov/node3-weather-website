const request= require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/58ff6f4b1c631ff2cdaef2923482137a/'+latitude+','+longitude+'?lang=en'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('unable to find location. Try another search', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' it is currently ' + body.currently.temperature + ' degree out. there is a ' + body.currently.precipProbability + '% chance of rain'
            )
        }
    })

}

module.exports = forecast
