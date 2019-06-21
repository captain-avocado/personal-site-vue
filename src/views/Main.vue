<template lang="pug">
  .content
    .content__container
      Info.content__left
      .content__right
        .content__block
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

    @include laptops {
      flex-direction: column;
      align-items: center;
      padding: 80px 0;
    }
  }

  &__left,
  &__right {
    flex: 1;
  }

  &__left {
    align-self: center;

    @include laptops {
      margin-bottom: 80px;
    }
  }

  &__right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &__nav-block {
    margin-top: 20px;
    align-self: center;
  }

  &__block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
