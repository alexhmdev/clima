const axios = require('axios');
const clima = require('../clima/clima');


const getLugar = async(direccion) => {
    const encodeURL = encodeURI(direccion);
const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
    headers: {'X-RapidAPI-Key': 'a13d5f3becmsh18ff6f96225f89dp12bed7jsnef627efcfb07'}
});
const resp = await instance.get();

if(resp.data.Results.length === 0){
    throw new Error(`NO hay resultados para ${direccion}`);
}
const data = resp.data.Results[0];
const ciudad = data.name;
const lat = data.lat;
const lon = data.lon;
ciudadClima = await clima.getClima(lat, lon);
    return `El clima en ${ciudad} es ${ciudadClima}°C`;
// return {
//     ciudad,
//     lat,
//     lon
// }


}

module.exports = {
    getLugar
}