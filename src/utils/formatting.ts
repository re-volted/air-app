function formatTemperature(temp: number, unit: "C" | "F"): string {
   switch (unit) {
      case "C":
         return `${Math.round(temp)}°C`;
      case "F":
         return `${Math.round(temp * 1.8 + 32)}°F`;
      default:
         return "";
   }
}

export { formatTemperature };
