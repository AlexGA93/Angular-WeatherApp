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
  getWeatherData(latitude: number, longitude: number):Observable<WeatherType>{
    return this.http.get<WeatherType>(this._weatherEndPoint+`?latitude=39.47&longitude=-0.38&hourly=temperature_2m&hourly=relativehumidity_2m&hourly=relativehumidity_2m&hourly=windspeed_10m&current_weather=true&timezone=GMT&daily=sunrise&daily=sunset&daily=apparent_temperature_max&daily=apparent_temperature_min`);
  }
}
