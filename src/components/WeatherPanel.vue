<template>
   <div v-if="weatherData" class="weather-panel">
      <div class="weather-panel__temperature">
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
      weatherData(): boolean {
         return !!(
            this.$store.state.weather.temperature &&
            this.$store.state.weather.description &&
            this.$store.state.weather.city &&
            this.$store.state.weather.date
         );
      },
      temperature(): string {
         return formatTemperature(this.$store.state.weather.temperature);
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
   }
});
</script>
