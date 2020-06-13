export interface WeatherState {
   errorMsg: string;
   coords: {
      lat: Coord;
      lon: Coord;
   };
   temperature: number | null;
   date: string;
   city: string;
   description: string;
}

type Coord = number | null;
