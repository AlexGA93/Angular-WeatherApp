export const environment = {
    production: false,
    weatherUrl: 'https://api.open-meteo.com/v1/forecast'
};
/**
 * https://api.open-meteo.com/v1/forecast?latitude=39.47&longitude=-0.38&hourly=temperature_2m&hourly=relativehumidity_2m&hourly=windspeed_10m&current_weather=true&timezone=GMT&daily=sunrise&daily=sunset&daily=apparent_temperature_max&daily=apparent_temperature_min
 * ?latitude=39.47
 * &longitude=-0.38
 * &hourly=temperature_2m
 * &hourly=relativehumidity_2m
 * &hourly=windspeed_10m
 * &current_weather=true
 * &timezone=GMT
 * &daily=sunrise
 * &daily=sunset
 * &daily=apparent_temperature_max
 * &daily=apparent_temperature_min
 */