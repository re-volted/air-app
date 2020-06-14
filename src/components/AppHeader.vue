<template>
   <div class="header">
      <div class="header__logo">
         <svgIcon icon="weather" height="50px" width="50px" color="#fff" />
         <h1 class="header__title">{{ appName }}</h1>
      </div>
      <p class="text--light">Check the weather!</p>
      <p class="text--light">
         Enter the city name or
         <span class="text--bold">leave empty for geolocation!</span>
      </p>
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import svgIcon from "@/components/svgIcons/svgIcon.vue";

export default Vue.extend({
   name: "AppHeader",
   components: { svgIcon },
   computed: {
      appName() {
         return this.$store.getters["getAppName"];
      }
   }
});
</script>
