<template>
   <div v-if="hasForecastData" class="forecast">
      <div class="forecast__titles">
         <div class="forecast__title">Hour</div>
         <div class="forecast__title">Temperature</div>
         <div class="forecast__title">Description</div>
      </div>
      <ul class="forecast__list">
         <li
            v-for="(data, i) in forecastData"
            :key="i"
            class="forecast__list-row"
         >
            <div class="forecast__info">
               {{ data.hour }}
            </div>
            <div class="forecast__info">
               {{ formatTemperature(data.temperature) }}
            </div>
            <div class="forecast__info">
               {{ data.description }}
            </div>
         </li>
      </ul>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import { formatTemperature } from "@/utils/formatting";
import { TempUnit } from "@/store/weather/types";

export default Vue.extend({
   name: "Forecast",
   computed: {
      hasForecastData() {
         return !!this.$store.state.weather.forecast.length;
      },
      forecastData() {
         return this.$store.state.weather.forecast;
      },
      tempUnits(): TempUnit {
         return this.$store.state.weather.tempUnits;
      }
   },
   methods: {
      formatTemperature(temp: number): string {
         return formatTemperature(temp, this.tempUnits);
      }
   }
});
</script>
