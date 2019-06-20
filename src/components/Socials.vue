<template lang="pug">
  ul.socials
    li.socials__item
      a(href="#").socials__link
        Icon.socials__icon(:name="'vk'" :color="'#c4c4c4'")
    li.socials__item
      a(href="#").socials__link
        Icon.socials__icon(:name="'tg'" :color="'#c4c4c4'")
    li.socials__item
      a(href="#").socials__link
        Icon.socials__icon(:name="'fb'" :color="'#c4c4c4'")

</template>
<script>
import Icon from "@/components/Icon";

export default {
  components: {
    Icon
  }
};
</script>
<style lang="scss" scoped>
.socials {
  display: flex;

  &__item {
    &:not(:last-child) {
      margin-right: 5px;
    }
  }
}
</style>
