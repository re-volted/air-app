<template>
   <div class="container">
      <div class="home">
         <app-header msg="AirApp" />
         <weather-check-form />
         <weather-panel />
         <p v-if="geoErrMsg" class="error-message">{{ geoErrMsg }}</p>
         <p v-else-if="errorMsg" class="error-message">
            An error occurred while fetching data: "{{ errorMsg }}"
         </p>
      </div>
   </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import WeatherCheckForm from "@/components/WeatherCheckForm.vue";
import WeatherPanel from "@/components/WeatherPanel.vue";

export default {
   name: "Home",
   components: {
      AppHeader,
      WeatherCheckForm,
      WeatherPanel
   },
   data: function() {
      return {
         gettingLocation: false,
         geoErrMsg: null
      };
   },
   mounted() {
      if (!("geolocation" in navigator)) {
         this.geoErrMsg = "Geolocation not available.";
         return;
      }

      this.gettingLocation = true;

      // get position
      navigator.geolocation.getCurrentPosition(
         pos => {
            this.geoErrMsg = null;
            this.gettingLocation = false;
            this.$store.dispatch("weather/saveGeoCoords", {
               lat: pos.coords.latitude,
               lon: pos.coords.longitude
            });
            return this.$store.dispatch("weather/getWeatherByCoords");
         },
         err => {
            this.gettingLocation = false;
            this.geoErrMsg = err.message;
         }
      );
   },
   computed: {
      errorMsg() {
         return this.$store.state.weather.errorMsg;
      }
   }
};
</script>
