<template lang="pug">
  .info
    .info__avatar
    .info__descr
      Title.info__title(:text="'Калоев Артем'")
      .info__subtitle(:text="''") Фронтенд разработчик
      .info__text Санкт-Петербург. Учусь на программиста в СПбГЭТУ “ЛЭТИ”, 3 курс. Окончил курсы Loftschool по веб-разработке. Есть опыт работы в веб-студии, на фрилансе (больше 1 года).
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
.info {
  max-width: 550px;

  &__avatar {
    width: 200px;
    height: 200px;
    min-width: 200px;
    min-height: 200px;
    margin-right: 40px;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("../assets/images/avatar.jpg");
  }

  &__title {
    margin-bottom: 15px;
  }

  &__subtitle {
    font-size: 18px;
    margin-bottom: 10px;
  }
}
</style>
