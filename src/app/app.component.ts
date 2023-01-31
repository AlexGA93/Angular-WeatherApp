import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// FontAwesome Icons
import { 
  faTemperatureEmpty,
  faTemperatureFull,
  faDroplet,
  faWind 
} from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from './services/weather.service';
import { WeatherType } from './types/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'WeatherApp';
  //  icons
  faTemperatureEmpty  = faTemperatureEmpty;
  faTemperatureFull   = faTemperatureFull;
  faDroplet           = faDroplet;
  faWind              = faWind;

  // date
  myDate = new Date();
  pipe = new DatePipe('en-US');

  // Weather Data
  weather_data!: WeatherType;

  // default variables
  default_latitude: number = 52.52;
  default_longitude: number = 13.419998;
  

  constructor(private _ws: WeatherService) {}

  ngOnInit(): void {
    this._ws
        .getWeatherData(this.default_latitude, this.default_longitude)
        .subscribe((weather_response) => {
          this.weather_data = weather_response;
        });
  }

  getSunriseOrSunset(): boolean{
    
    const actualTime: string = this.pipe.transform(this.myDate, 'short')?.split(', ')[1].split(' ')[0]!;
    const sunsetTime: string = this.weather_data.daily.sunset[0].split('T')[1]!;
    
    return actualTime > sunsetTime;
  }
}
