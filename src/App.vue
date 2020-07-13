<template>
   <div id="app">
      <transition name="fade" mode="out-in">
         <router-view></router-view>
      </transition>
      <div v-if="loading" class="loader">
         <loader />
      </div>
      <p class="photo-copyright">
         photo from
         <a href="https://unsplash.com/" class="text--bold">UNSPLASH</a>
      </p>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import Loader from "@/components/Loader.vue";

export default Vue.extend({
   name: "App",
   components: {
      Loader
   },
   computed: {
      loading(): boolean {
         return this.$store.state.loading;
      }
   },
   mounted() {
      if (!("geolocation" in navigator)) {
         this.$store.dispatch("setErrorMsg", "Geolocation not available.");
         return;
      }

      // get position
      navigator.geolocation.getCurrentPosition(
         pos => {
            this.$store.dispatch("setErrorMsg", "");

            if (!this.$store.getters["weather/hasCoords"]) {
               this.$store.dispatch("weather/setCoords", {
                  lat: pos.coords.latitude,
                  lon: pos.coords.longitude
               });
            }
            if (!this.$store.getters["weather/isDataFetched"]) {
               return this.$store.dispatch("weather/getWeatherByCoords");
            }
         },
         err => {
            this.$store.dispatch("setErrorMsg", err.message);
         }
      );
   }
});
</script>
