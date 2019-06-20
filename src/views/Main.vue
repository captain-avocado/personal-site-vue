<template lang="pug">
  .content
    .content__container
      Info.content__left
      .content__right
        Intro.content__intro
        NavBlock.content__nav-block
</template>
<script>
import Info from "@/components/Info.vue";
import Intro from "@/components/Intro.vue";
import NavBlock from "@/components/NavBlock.vue";

export default {
  components: {
    Info,
    Intro,
    NavBlock
  }
};
</script>
<style lang="scss" scoped>
.content {
  @include wrapper;
  align-items: center;

  &__container {
    @include container;
    display: flex;
  }

  &__left,
  &__right {
    flex: 1;
  }

  &__left {
    display: flex;
    justify-content: space-between;
  }

  &__right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &__nav-block {
    margin-top: 20px;
    justify-self: center;
  }
}
</style>
