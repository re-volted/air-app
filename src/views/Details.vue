<template>
   <div class="container">
      <div class="details">
         <router-link class="details__header" to="/">
            <svg-icon icon="weather" height="36px" width="36px" color="#fff" />
            <h1 class="details__title">{{ appName }}</h1>
         </router-link>
         <div v-if="isDataFetched" class="details__info-container">
            <p class="details__info">
               Date: <span>{{ date }}</span>
            </p>
            <p class="details__info">
               Location: <span>{{ location }}</span>
            </p>
         </div>
         <div v-else>
            <weather-check-form />
         </div>
         <forecast />
         <p v-if="errorMsg" class="error-message">
            {{ errorMsg }}
         </p>
      </div>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import SvgIcon from "@/components/svgIcons/svgIcon.vue";
import WeatherCheckForm from "@/components/WeatherCheckForm.vue";
import Forecast from "@/components/Forecast.vue";

export default Vue.extend({
   components: {
      SvgIcon,
      WeatherCheckForm,
      Forecast
   },
   computed: {
      appName(): string {
         return this.$store.getters["getAppName"];
      },
      isDataFetched(): boolean {
         return this.$store.getters["weather/isDataFetched"];
      },
      date(): string {
         return this.$store.state.weather.date;
      },
      location(): string {
         return this.$store.state.weather.city;
      },
      errorMsg(): string {
         return this.$store.state.errorMsg;
      }
   }
});
</script>
