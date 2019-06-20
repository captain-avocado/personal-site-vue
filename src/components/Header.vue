<template lang="pug">
  .header
    .header__container
      .header__left
        Logo
      .header__right
        .menu.header__menu
          router-link(to="/notes").menu__item Заметки
          router-link(to="/projects").menu__item Проекты
          router-link(to="/more").menu__item Другое
          a(href="#").menu__item.menu__item--rectangle Связаться
        a(href="https://github.com/klv-codehub" target="_blank").header__github-icon
          Icon(v-bind:color="'#000'" v-bind:name="'github-icon'")
        Button(v-bind:text="'Обо мне'")
</template>
<script>
import Logo from "@/components/Logo.vue";
import Icon from "@/components/Icon.vue";
import Button from "@/components/Button.vue";

export default {
  components: {
    Logo,
    Button,
    Icon
  }
};
</script>

<style lang="scss" scoped>
.header {
  padding: 15px 0;
  @include wrapper;

  &__container {
    display: flex;
    justify-content: space-between;
    @include container;
  }

  &__menu {
    margin-right: 10px;
  }

  &__github-icon {
    margin-right: 50px;
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__right {
    display: flex;
    align-items: center;
  }

  .menu {
    &__item {
      margin-right: 35px;
      &:last-child {
        margin-right: 10px;
      }

      transition: color 0.3s;
      color: #000;
      &:hover {
        color: #3d3d3d;
      }

      &--rectangle {
        border-radius: 10px;
        border: 1px solid #ececec;
        padding: 6px 10px;
      }
    }
  }
}
</style>
