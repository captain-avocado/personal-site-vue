<template lang="pug">
  .nav-block 
    ul.nav-block__list
      li.nav-block__item
        .nav-block__left
          .nav-block__icon 👔
          .nav-block__text работодателю
        .nav-block__right
          router-link(to="/about").nav-block__link резюме
      li.nav-block__item
        .nav-block__left
          .nav-block__icon 💻
          .nav-block__text заказчику
        .nav-block__right
          router-link(to="/projects").nav-block__link портфолио
      li.nav-block__item
        .nav-block__left
          .nav-block__icon 🤳
          .nav-block__text связаться со мной
        .nav-block__right
          a(href="#").nav-block__link контакты
</template>
<style lang="scss" scoped>
.nav-block {
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 850%;
  max-width: 350px;

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-style: italic;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &__icon {
    font-style: normal;
  }

  &__link {
    color: $accent-color;

    @include underscore-effect($accent-color);
  }

  &__left {
    display: flex;
  }

  &__icon {
    margin-right: 5px;
  }
}
</style>
