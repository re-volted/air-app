<template>
   <div id="app">
      <transition name="fade" mode="out-in">
         <router-view></router-view>
      </transition>
   </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
   name: "App"
});
</script>
