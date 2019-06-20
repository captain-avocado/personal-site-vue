<template lang="pug">
  .intro
    Title.intro__title(:text="'О сайте'")
    .intro__text Здесь я оставляю заметки на тему веб-разработки и не только. А еще тут подробнее можно узнать обо мне, моих проектах и связаться со мной
</template>
<script>
import Title from "@/components/Title.vue";

export default {
  components: {
    Title
  }
};
</script>

<style lang="scss" scoped>
.intro {
  text-align: center;
  max-width: 380px;

  &__title {
    margin-bottom: 20px;
  }
}
</style>
