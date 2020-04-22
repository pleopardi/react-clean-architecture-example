export interface Temp {
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface Weather {
  description: string;
  main: string;
}

export interface WeatherResponse {
  readonly main: Temp;
  readonly name: string;
  readonly weather: Weather[];
}
