const axios = require('axios');

const getLugarLatLng = async (direc) => {
    const encodeUrl = encodeURI(direc);

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&APPID=1019870432a8618d477d8db49abcae45`,
    });

    const resp = await instance.get();

    if (resp.data.length === 0){
        throw new Error(`No hay resultados para ${direc}`);
    }

    const direccion = resp.data.name;
    const lat = resp.data.coord.lat;
    const lng = resp.data.coord.lon; 
    
         return{
            direccion,
            lat,
            lng
        }
}

module.exports = {
    getLugarLatLng,
}