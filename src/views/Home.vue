<template>
   <div class="container">
      <div class="home">
         <app-header />
         <weather-check-form />
         <weather-panel />
         <p v-if="errorMsg" class="error-message">
            An error occurred while fetching data: "{{ errorMsg }}"
         </p>
      </div>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "@/components/AppHeader.vue";
import WeatherCheckForm from "@/components/WeatherCheckForm.vue";
import WeatherPanel from "@/components/WeatherPanel.vue";

export default Vue.extend({
   name: "Home",
   components: {
      AppHeader,
      WeatherCheckForm,
      WeatherPanel
   },
   computed: {
      errorMsg(): string {
         return this.$store.state.errorMsg as string;
      }
   }
});
</script>
