const axios = require('axios');
const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b9c08455ae85c90e25c0527f847a8e09`)
        //return resp.length.main.temp;
    return resp.data.main.temp;
}

module.exports = {
    getClima
}