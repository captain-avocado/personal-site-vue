<template lang="pug">
  router-link(to="/")
    svgicon.logo(name="logo")
</template>

<script>
import "@/icons/logo.js";

export default {};
</script>

<style lang="scss" scoped>
.logo {
  width: 45px;
  height: 45px;
  transition: fill 0.3s;
  &:hover {
    fill: rgba(#000, 0.8);
  }
  cursor: pointer;
}
</style>
