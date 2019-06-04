
const axios = require('axios');


const getLongLat = async (direccion) => {
    const encodedUrl = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'X-RapidAPI-Key': '3916865927mshfa6ed92ad2d0b93p1e3dfbjsn91a619d4b126'}
      });
    
    const respuesta = await instance.get();

    if(respuesta.data.Results.length === 0) throw new Error(`No se encontraron resultados para ${direccion}`);

    const data = respuesta.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        dir,
        lat,
        lon
    }

}


module.exports = {
    getLongLat
}
