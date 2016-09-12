import config from '../config/secrets';

export default function fetchWeather(lat, long) {
    let apiKey = config.forecastApiKey;

    let url = `https://api.forecast.io/forecast/${apiKey}/${lat},${long}`;

    return fetch(url).then((response) => response.json());
}