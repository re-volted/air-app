<template>
   <form @submit="handleSubmit" class="weather-check-form" method="get">
      <input
         type="search"
         name="city"
         id="city"
         class="weather-check-form__input"
         v-model="form.city"
      />
      <button type="submit" class="weather-check-form__btn">
         Check!
      </button>
   </form>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
   name: "WeatherCheckForm",
   data: () => {
      return {
         form: {
            city: ""
         }
      };
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
         if (!this.form.city && this.hasCoords) {
            return this.$store.dispatch("weather/getWeatherByCoords");
         }
         if (this.form.city) {
            return this.$store.dispatch("weather/getWeatherByCity", {
               city: this.form.city
            });
         }
      }
   }
});
</script>
