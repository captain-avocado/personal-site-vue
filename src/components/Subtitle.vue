<template lang="pug">
  .title {{ text }}
</template>
<script>
export default {
  props: ["text"]
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 24px;
  font-weight: 900;
}
</style>
