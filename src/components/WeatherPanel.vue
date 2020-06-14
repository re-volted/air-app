<template>
   <div v-if="hasWeatherData" class="weather-panel">
      <div @click="toggleTempUnits" class="weather-panel__temperature">
         <p>{{ temperature }}</p>
      </div>
      <div class="weather-panel__data">
         <div class="weather-panel__data-item">
            <p><span>Date:</span> {{ date }}</p>
         </div>
         <div class="weather-panel__data-item">
            <p><span>Location:</span> {{ location }}</p>
         </div>
         <div class="weather-panel__data-item">
            <p><span>Description:</span> {{ description }}</p>
         </div>
      </div>
      <router-link to="/about" class="weather-panel__more">More</router-link>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import { formatTemperature } from "@/utils/formatting";

export default Vue.extend({
   data: () => {
      return {};
   },
   computed: {
      hasWeatherData(): boolean {
         return this.$store.getters["weather/isDataFetched"];
      },
      temperature(): string {
         return formatTemperature(
            this.$store.state.weather.temperature,
            this.$store.state.weather.tempUnits
         );
      },
      description(): string {
         return this.$store.state.weather.description;
      },
      location(): string {
         return this.$store.state.weather.city;
      },
      date(): string {
         return this.$store.state.weather.date;
      }
   },
   methods: {
      toggleTempUnits(): void {
         this.$store.commit("weather/TOGGLE_TEMP_UNITS");
      }
   }
});
</script>
