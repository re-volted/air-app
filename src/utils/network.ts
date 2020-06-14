import { api } from "./constants";
import { ApiCallParams } from "./types";

function buildUrl(params: ApiCallParams): string {
   let url;

   switch (true) {
      case !!params.lat && !!params.lon:
         url = `${api.url}&lat=${params.lat}&lon=${params.lon}&appid=${api.key}`;
         break;
      case !!params.city:
         url = `${api.url}&q=${params.city}&appid=${api.key}`;
         break;
      default:
         url = "";
   }

   return url;
}

export { buildUrl };
