export interface WeatherState {
   coords: {
      lat: Coord;
      lon: Coord;
   };
   temperature: number | null;
   tempUnits: TempUnit;
   date: string;
   city: string;
   description: string;
   forecast: ForecastDataSet[];
}

type Coord = number | null;
export type TempUnit = "C" | "F";

export interface ForecastDataSet {
   hour: string;
   temperature: number;
   description: string;
}

export interface ApiData {
   city: {
      id: number;
      name: string;
      coord: {
         lat: number;
         lon: number;
      };
   };
   list: SingleApiRecord[];
}

export interface SingleApiRecord {
   dt: number;
   main: {
      temp: number;
   };
   weather: {
      id: number;
      description: string;
      icon: string;
      main: string;
   }[];
}
