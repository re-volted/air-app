function formatTemperature(temp: number, unit: "C" | "F" = "C"): string {
   switch (unit) {
      case "C":
         return `${Math.round(temp)}°C`;
      case "F":
         return `${temp * 1.8 + 32}°F`;
      default:
         return "";
   }
}

export { formatTemperature };
