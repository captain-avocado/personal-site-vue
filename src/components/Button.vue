<template lang="pug">
  router-link(to="/about").button {{ text }}
</template>
<script>
export default {
  props: ["text"]
};
</script>

<style lang="scss" scoped>
.button {
  background-color: $accent-color;
  font-size: 16px;
  border-radius: 6px;
  padding: 6px 12px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba($accent-color, 0.9);
  }
}
</style>
