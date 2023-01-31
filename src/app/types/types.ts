export interface WeatherType {
    latitude:              number;
    longitude:             number;
    generationtime_ms:     number;
    utc_offset_seconds:    number;
    timezone:              string;
    timezone_abbreviation: string;
    elevation:             number;
    current_weather:       CurrentWeather;
    hourly_units:          HourlyUnits;
    hourly:                Hourly;
    daily_units:           DailyUnits;
    daily:                 Daily;
}

export interface CurrentWeather {
    temperature:   number;
    windspeed:     number;
    winddirection: number;
    weathercode:   number;
    time:          string;
}

export interface Daily {
    time:                     Date[];
    sunrise:                  string[];
    sunset:                   string[];
    apparent_temperature_max: number[];
    apparent_temperature_min: number[];
}

export interface DailyUnits {
    time:                     string;
    sunrise:                  string;
    sunset:                   string;
    apparent_temperature_max: string;
    apparent_temperature_min: string;
}

export interface Hourly {
    time:                string[];
    temperature_2m:      number[];
    relativehumidity_2m: number[];
    windspeed_10m:       number[];
}

export interface HourlyUnits {
    time:                string;
    temperature_2m:      string;
    relativehumidity_2m: string;
    windspeed_10m:       string;
}
