<template lang="pug">
  span
    svgicon.icon(
      :name="name"  
      @mouseover.native="hovering = true"
      @mouseleave.native="hovering = false"
      :class="{ active: hovering }"
    )
</template>
<script>
import "@/icons";

export default {
  props: ["color", "name"],
  data() {
    return {
      hovering: false
    };
  }
};
</script>
<style lang="scss" scoped>
.span {
  display: flex;
  cursor: pointer;
  width: 15px;
  height: 15px;
}

.icon {
  max-width: 100%;
  max-width: 100%;
  transition: opacity 0.3s;
}

.active {
  opacity: 0.7;
}
</style>
