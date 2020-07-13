import { TempUnit } from "@/store/weather/types";

function formatTemperature(temp: number, unit: TempUnit): string {
   switch (unit) {
      case TempUnit.CELSIUS:
         return `${Math.round(temp)}°C`;
      case TempUnit.FAHRENHEIT:
         return `${Math.round(temp * 1.8 + 32)}°F`;
      default:
         return `${Math.round(temp)}°C`;
   }
}

export { formatTemperature };
