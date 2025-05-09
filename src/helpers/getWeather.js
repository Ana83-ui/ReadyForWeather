import axios from "axios";

export const getWeather = async (position) => {
  const { latitude, longitude } = position.coords;
  const URL_API = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m&timezone=auto&forecast_days=3`;
  const response = await axios.get(URL_API);
  const { temperature_2m, relative_humidity_2m, time } = response.data.current;
  return {
    temperature: temperature_2m, //el nombre de las propiedades deben coincidir con el store
    humidity: relative_humidity_2m,
    time: time,
  };
};

navigator.geolocation.getCurrentPosition(
  //toma la ubicacion del usuario, el cual debe aceptar
  async (position) => {
    try {
      const weather = await getWeather(position);
      console.log("Datos del clima:", weather);
    } catch (error) {
      console.error("Error al obtener el clima:", error);
    }
  },
  (error) => {
    console.error("Error obteniendo la ubicación:", error);
  }
);
