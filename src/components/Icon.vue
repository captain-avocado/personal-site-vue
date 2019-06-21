<template lang="pug">
  span.span(:class="className")
    svgicon.icon(
      :name="name"  
      @mouseover.native="hovering = true"
      @mouseleave.native="hovering = false"
      :class="{ active: hovering }"
      :color="color"
    )
</template>
<script>
import "@/icons";

export default {
  props: ["color", "name", "className"],
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

@mixin rounded($size, $color) {
  width: $size;
  height: $size;
  border-radius: 50%;
  background-color: $color;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rounded {
  @include rounded(65px, $accent-color);
}

.rounded-small {
  @include rounded(45px, $accent-color);
}
</style>
