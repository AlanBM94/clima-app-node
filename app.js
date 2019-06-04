const {argv} = require('./config');

const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');



// const res = lugar.getLongLat(argv.direccion)
//                 .then(console.log);

// clima.getClima(19.430000, -99.139999)
//         .then(console.log);

const getInfo = async (direccion) => {
    try {
        const lug = await lugar.getLongLat(direccion);
        const cli = await clima.getClima(lug.lat, lug.lon);
        return `El clima de ${lug.dir} es de ${cli} grados Celcius`;
    } catch (error) {
        return `No se encontró el clima de ${direccion}`;
    }
}


console.log(getInfo(argv.direccion)
        .then(console.log)
        .catch(console.log))

// console.log(res);

  
