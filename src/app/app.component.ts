import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  // Reactive Form
  myForm: FormGroup = this.fb.group({
    latitude: [52.52, Validators.required],
    longitude: [13.41, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private _ws: WeatherService
  ) {}

  ngOnInit(): void {
    // set default coords
    this.getWeatherData();
  }

  getSunriseOrSunset(): boolean{
    
    const actualTime: string = this.pipe.transform(this.myDate, 'short')?.split(', ')[1].split(' ')[0]!;
    const sunsetTime: string = this.weather_data.daily.sunset[0].split('T')[1]!;
    
    return actualTime > sunsetTime;
    // return true
  }

  private getWeatherData(){
    return this._ws
    .getWeatherData(this.myForm.value.latitude, this.myForm.value.longitude)
    .subscribe((weather_response: WeatherType) => {
      this.weather_data = weather_response;
    });
  }

  onSubmit(){
    // console.log(this.myForm.value.latitude +'\n'+ this.myForm.value.longitude);
    // calling method with form data
    this.getWeatherData();
  }
}
