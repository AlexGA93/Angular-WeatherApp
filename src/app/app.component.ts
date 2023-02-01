import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// FontAwesome Icons
import {
  faTemperatureEmpty,
  faTemperatureFull,
  faDroplet,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from './services/weather.service';
import {
  formDataPayload,
  formDataPayloadString,
  WeatherType,
} from './types/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';

  //  icons
  faTemperatureEmpty = faTemperatureEmpty;
  faTemperatureFull = faTemperatureFull;
  faDroplet = faDroplet;
  faWind = faWind;

  // date
  myDate = new Date();
  pipe = new DatePipe('en-US');

  // Weather Data
  coordinates: formDataPayloadString = {
    longitude: '-3.70',
    latitude: '40.43',
  };
  weather_data!: WeatherType;

  constructor(private _ws: WeatherService) {}

  ngOnInit(): void {
    // set default coords
    this.getWeatherData();
  }

  getSunriseOrSunset(): boolean {
    const actualTime: string = this.pipe
      .transform(this.myDate, 'short')
      ?.split(', ')[1]
      .split(' ')[0]!;
    const sunsetTime: string = this.weather_data.daily.sunset[0].split('T')[1]!;

    return actualTime <= sunsetTime;
  }

  private getWeatherData() {
    console.log(this.coordinates);

    return this._ws
      .getWeatherData(this.coordinates.latitude, this.coordinates.longitude)
      .subscribe((weather_response: WeatherType) => {
        this.weather_data = weather_response;
      });
  }

  onSubmit() {
    // calling method with form data
    this.getWeatherData();
  }

  getDataFromChild(event: formDataPayload) {
    this.coordinates.latitude = event.latitude.toString();
    this.coordinates.longitude = event.longitude.toString();
    this.getWeatherData();
  }
}
