const axios = require('axios');

const getClima = async (lat,lon) => {
   const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=d779a3e4cb72109ac63460d276ef47b3`);
    
    
    return resp.data.main.temp;
}

module.exports = {
    getClima
}