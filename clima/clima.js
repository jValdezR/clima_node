const axios = require('axios');

const getClima = async(lat,lng) =>{

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c86ced22c7faa2bc6b33b045b52c9527&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima,
}