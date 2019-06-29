<template lang="pug">
  #app.app
    Header.app__header(:class="scrolled > 0 ? 'active' : ''")
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
  },
  data() {
    return {
      scrolled: false
    };
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY;
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
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
  padding-top: $header-height;

  &__header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
}
.view {
  flex: 1;
}
</style>
