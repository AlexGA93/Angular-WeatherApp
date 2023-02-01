import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// environment
import { environment } from '../../environments/environment.development';
import { WeatherType } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  _weatherEndPoint: string = environment.weatherUrl;

  constructor(
    // angular http module injection
    private http: HttpClient
  ) { }

  // methods
  getWeatherData(latitude: string, longitude: string):Observable<WeatherType>{
    console.log(latitude+'\n'+longitude);
    
    return this.http.get<WeatherType>(this._weatherEndPoint+`?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&hourly=relativehumidity_2m&hourly=relativehumidity_2m&hourly=windspeed_10m&current_weather=true&timezone=GMT&daily=sunrise&daily=sunset&daily=apparent_temperature_max&daily=apparent_temperature_min`);
  }
}
