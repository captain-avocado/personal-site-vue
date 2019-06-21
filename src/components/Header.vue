<template lang="pug">
  .header
    .header__container
      .header__left
        Logo
      .header__right
        .header__menu-wrap(v-show="handleHeaderShow()")
          .menu.header__menu
            router-link(to="/notes" @click.native="showMenu = false").menu__item Заметки
            router-link(to="/projects" @click.native="showMenu = false").menu__item Проекты
            router-link(to="/more" @click.native="showMenu = false").menu__item Другое
            a(href="#" @click="showModal = true").menu__item.menu__item--rectangle Связаться
          a(href="https://github.com/klv-codehub" target="_blank").header__github-icon
            Icon(v-bind:color="'#000'" v-bind:name="'github-icon'")
          Button(v-bind:text="'Обо мне'")
        Icon.mobile.header__mobile-contact(:name="'mail-big'" :className="'rounded-small'" :color="'#fff'" @click.native="showModal = true")
        Icon.mobile.header__mobile-menu(:name="'menu'" :className="'rounded-small'" :color="'#fff'"  @click.native="showMenu = !showMenu")
    ContactPanel.header__contact-panel(v-show="showModal" @close="showModal = false")
</template>
<script>
import Logo from "@/components/Logo.vue";
import Icon from "@/components/Icon.vue";
import Button from "@/components/Button.vue";
import ContactPanel from "@/components/ContactPanel.vue";

export default {
  components: {
    Logo,
    Button,
    Icon,
    ContactPanel
  },
  data() {
    return {
      showModal: false,
      showMenu: false
    };
  },
  methods: {
    handleHeaderShow() {
      if (screen.width > 800) return true;
      return this.showMenu ? true : false;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  padding: 15px 0;
  @include wrapper;

  position: relative;
  z-index: 10;

  &__contact-panel {
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 20;

    @include tablets {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }
  }

  &__container {
    display: flex;
    justify-content: space-between;
    @include container;
  }

  &__menu {
    margin-right: 10px;
    @include tablets {
      margin-right: 0;
    }
  }

  &__github-icon {
    margin-right: 50px;
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    @include tablets {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }

  &__menu-wrap {
    display: flex;
    align-items: center;
    @include tablets {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(#fff, 0.99);
    }
  }

  &__right {
    display: flex;
    align-items: center;
  }

  &__mobile-contact {
    margin-right: 15px;
  }

  &__mobile-contact,
  &__mobile-menu {
    z-index: 100;
  }

  .menu {
    @include tablets {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &__item {
      margin-right: 35px;
      &:last-child {
        margin-right: 10px;
        @include tablets {
          margin-right: 0;
          marign-bottom: 0;
        }
      }

      @include tablets {
        margin-right: 0;
        margin-bottom: 10px;
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
        font-size: inherit;
        cursor: pointer;

        @include tablets {
          display: none;
        }
      }
    }
  }
}
</style>
