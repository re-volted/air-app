export interface WeatherState {
   coords: {
      lat: Coord;
      lon: Coord;
   };
   city: string;
   date: string;
}

type Coord = number | null;
