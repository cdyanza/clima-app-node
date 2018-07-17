const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&Key=AIzaSyBwZ-KRRYTRbOL9MIi7NKUDn6NBJG0nd_0`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    let address = resp.data.results[0];
    return {
        direccion: address.formatted_address,
        lat: address.geometry.location.lat,
        lng: address.geometry.location.lng
    }
}

module.exports = {
    getLugarLatLng
}