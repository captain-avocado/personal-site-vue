<template lang="pug">
transition(name="tr-wrap")
  form.contact-panel
    .contact-panel__bg
    .contact-panel__content
      .contact-panel__intro
        .contact-panel__title Привет! 👋
        .contact-panel__descr Отправь свое письмо на мою электронную почту kaloev.eltech@gmail.com или перейди в профиль в любой из социальных сетей
      .contact-panel__input-area
        input(placeholder="Почта").contact-panel__input.contact-panel__input--mail
        textarea(placeholder="Сообщение").contact-panel__input.contact-panel__input--msg
      .contact-panel__bottom-area
        button(type="submit").contact-panel__submit
          Icon(:name="'mail'" :color="'#fff'").contact-panel__icon
          span.contact-panel__text Отправить
        Socials
    .contact-panel__close(@click="$emit('close')")
      Icon(:class="'rounded'" :name="'close'" :color="'#fff'")
</template>
<script>
import Socials from "@/components/Socials";
import Icon from "@/components/Icon";

export default {
  components: {
    Socials,
    Icon
  },
  data() {
    return {
      grabbed: false
    };
  }
};
</script>

<style lang="scss" scoped>
.tr-wrap-enter-active,
.tr-wrap-leave-active {
  transition: opacity 0.3s, transform 0.5s;
}

.tr-wrap-enter,
.tr-wrap-leave-to {
  transform: translateX(100px) !important;
  opacity: 0 !important;
}

.tr-wrap-enter-to,
.tr-wrap-leave {
  transform: translateX(0);
  opacity: 1;
}

.grabbing {
  cursor: grabbing !important;
}

.contact-panel {
  width: 350px;
  height: 400px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.15);
  position: relative;
  padding: 15px 30px;
  display: flex;
  cursor: grab;

  // opacity: 0;
  // // transform: translateX(-100px);
  // transition: opacity 0.4s;

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    background-color: $accent-color;
    border-radius: 10px 10px 0 0;
    z-index: 10;
  }

  &__content {
    position: relative;
    z-index: 20;
    flex: 1;

    display: flex;
    flex-direction: column;
  }

  &__intro {
    color: #fff;
    margin-bottom: 20px;
  }

  &__title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  &__descr {
    font-size: 14px;
  }

  &__input-area {
    flex: 1;

    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.15);
    background-color: #fff;
    padding: 20px;
  }

  &__input {
    border: none;
    outline: none;
    font-size: 14px;

    &::placeholder {
      font-size: 14px;
      color: #c4c4c4;
    }

    &--mail {
      border-bottom: 1px solid #ececec;
      padding-bottom: 20px;
    }

    &--msg {
      resize: none;
      padding-top: 20px;
    }
  }

  &__bottom-area {
    display: flex;
    align-items: center;
    margin: 20px 0 10px;
  }

  &__submit {
    border-radius: 30px;
    background-color: $accent-color;
    color: #fff;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 6px 12px;
    margin: 0 15px;
  }

  &__icon {
    fill: #fff;
    width: 10px;
    display: flex;
    height: 10px;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
  }

  &__close {
    position: absolute;
    bottom: -100px;
    right: 0;
  }
}
</style>
