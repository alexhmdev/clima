const lugar = require('./Lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima'
    }
})
.argv;

lugar.getLugar(argv.direccion)
.then(console.log);
// clima.getClima(lugar.latitude, lugar.longitude)
// .then(console.log)
// .catch(console.log);



