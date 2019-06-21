<template lang="pug">
  #app.app
    Header
    router-view.view
    Footer
</template>
<script>
import "@/assets/sass/main.scss";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  // name: "home",
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.view {
  flex: 1;
}
</style>
