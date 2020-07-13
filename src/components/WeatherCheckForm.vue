<template>
   <form @submit="handleSubmit" class="weather-check-form" method="get">
      <vue-google-autocomplete
         ref="autocomplete"
         id="city"
         classname="weather-check-form__input"
         placeholder="Enter a city name..."
         @placechanged="updateOnPlaceChange"
      >
      </vue-google-autocomplete>
      <!-- <input
         type="search"
         name="city"
         id="city"
         class="weather-check-form__input"
         placeholder="Enter a city name..."
         v-model="form.city"
      /> -->
      <button type="submit" class="weather-check-form__btn">
         Check!
      </button>
   </form>
</template>

<script lang="ts">
import Vue from "vue";
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default Vue.extend({
   name: "WeatherCheckForm",
   data: () => {
      return {
         form: {
            city: ""
         }
      };
   },
   components: {
      VueGoogleAutocomplete
   },
   computed: {
      hasCoords(): boolean {
         return (
            this.$store.state.weather.coords.lat &&
            this.$store.state.weather.coords.lon
         );
      }
   },
   methods: {
      handleSubmit(e: Event) {
         e.preventDefault();

         if (this.form.city) {
            this.$store.dispatch("weather/getWeatherByCity", {
               city: this.form.city
            });

            if (this.$refs.autocomplete) {
               const input = this.$refs.autocomplete as HTMLInputElement;
               input.value = "";
            }

            this.form.city = "";
            return;
         }

         if (this.hasCoords) {
            return this.$store.dispatch("weather/getWeatherByCoords");
         } else {
            this.$store.dispatch(
               "setErrorMsg",
               "Coordinates not available. Please, provide a city name."
            );
         }
      },
      updateOnPlaceChange(e: {
         locality?: string;
         latitude?: number;
         longitude?: number;
      }) {
         if (e.locality) {
            this.form.city = e.locality;
         } else if (e.latitude && e.longitude) {
            this.$store.dispatch("weather/setCoords", {
               lat: e.latitude,
               lon: e.longitude
            });
         } else {
            this.$store.dispatch(
               "setErrorMsg",
               "Google API doesn't provide enough information about this place to fetch weather data. Please, try something else."
            );
         }
      }
   }
});
</script>
