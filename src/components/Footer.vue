<template lang="pug">
  .footer
    .footer__container
      .footer__left
        .footer__socials
          Socials
        a(href="mailto:kaloev.eltech@gmail.com").footer__mail kaloev.eltech@gmail.com
      .footer__right
        .footer__copy 2019 @thunder-code
        Logo
</template>
<script>
import Socials from "@/components/Socials.vue";
import Logo from "@/components/Logo.vue";

export default {
  components: {
    Socials,
    Logo
  }
};
</script>
<style lang="scss" scoped>
.footer {
  border-top: 1px solid #ececec;
  padding: 15px 0;
  color: #c4c4c4;
  @include wrapper;

  &__container {
    display: flex;
    justify-content: space-between;
    @include container;
  }

  &__socials {
    padding-right: 10px;
  }

  &__mail {
    border-left: 1px solid #c4c4c4;
    padding-left: 10px;
  }

  &__left {
    display: flex;
    align-items: center;

    @include tablets {
      width: 100%;
      justify-content: center;
    }
  }

  &__right {
    display: flex;
    align-items: center;

    @include tablets {
      display: none;
    }
  }

  &__copy {
    margin-right: 10px;
  }
}
</style>
