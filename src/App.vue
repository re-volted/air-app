<template>
   <div id="app">
      <transition>
         <keep-alive>
            <router-view></router-view>
         </keep-alive>
      </transition>
   </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
   name: "App"
});
</script>
