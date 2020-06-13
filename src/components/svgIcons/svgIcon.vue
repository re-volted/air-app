<template>
   <component :style="iconStyle" :is="loader"></component>
</template>

<script>
export default {
   name: "svgIcon",
   props: {
      icon: {
         type: String,
         required: true
      },
      width: {
         type: String,
         default: "20px"
      },
      height: {
         type: String,
         default: "20px"
      },
      color: {
         type: String,
         default: "currentColor"
      },
      strokeColor: {
         type: String,
         default: "none"
      }
   },
   computed: {
      loader() {
         return () => import(`@/components/svgIcons/${this.icon}.vue`);
      },
      iconStyle() {
         const { width, height, color, strokeColor } = this;
         return {
            width,
            height,
            "--fill-color": color,
            "--stroke-color": strokeColor
         };
      }
   }
};
</script>

<style lang="scss" scoped>
svg {
   fill: var(--fill-color);
   stroke: var(--stroke-color);
}
</style>
