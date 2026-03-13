// import dotenv from 'dotenv'
import getUserData from "./fetchuserdata.js";

export default async function getWeather() {
  const data = await getUserData();

  const [latitude, longitude] = data.loc.split(",");
  const key = import.meta.env.VITE_OPEN_WEATHER_MAP_KEY;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

  try {
    const weatherApiResponse = await fetch(url);
    if (weatherApiResponse.ok) {
      const weatherData = await weatherApiResponse.json();
      return {
        city: data.city,
        main: weatherData,
      };
    } else {
      throw new error("Failed to fetch weather data");
    }
  } catch (error) {
    console.error("there was an error", error);
  }
}

export async function forecast() {
  try {
    const key = import.meta.env.VITE_OPEN_WEATHER_MAP_KEY;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=kanpur&appid=${key}`,
    );
    if (res.ok) {
      const data = res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
  const data = await res.json();
}
