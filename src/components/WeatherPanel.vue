<template>
   <div v-show="weatherData" class="weather-panel">
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
import { formatTemp } from "@/utils/formatting";

export default Vue.extend({
   data: () => {
      return {};
   },
   computed: {
      weatherData(): boolean {
         return !!this.$store.state.weather.city;
      },
      temperature(): string {
         return formatTemp(29.6);
      },
      date(): string {
         return this.$store.state.weather.date;
      },
      location(): string {
         return this.$store.state.weather.city;
      },
      description(): string {
         return `mostly sunny`;
      }
   }
});
</script>
