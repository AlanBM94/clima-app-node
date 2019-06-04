const axios = require ('axios');


const getClima = async (lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=acf3ea683407fd3d8ba8d12e5c57f2b9&units=metric`);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}