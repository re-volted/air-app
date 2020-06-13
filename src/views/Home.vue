<template>
   <div class="container">
      <div class="home">
         <app-header msg="AirApp" />
         <weather-check-form />
         <weather-panel />
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
         errorStr: null
      };
   },
   mounted() {
      if (!("geolocation" in navigator)) {
         this.errorStr = "Geolocation not available.";
         return;
      }

      this.gettingLocation = true;

      // get position
      navigator.geolocation.getCurrentPosition(
         pos => {
            this.gettingLocation = false;
            this.$store.dispatch("weather/saveGeoCoords", {
               lat: pos.coords.latitude,
               lon: pos.coords.longitude
            });
         },
         err => {
            this.gettingLocation = false;
            this.errorStr = err.message;
         }
      );
   },
   computed: {
      city() {
         return this.$store.state.city;
      }
   }
};
</script>
