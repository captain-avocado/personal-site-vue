<template lang="pug">
  ul.socials
    li.socials__item
      a(href="#").socials__link
        Icon.socials__icon(:name="'vk'" :color="'#4C75A3'")
    li.socials__item
      a(href="#").socials__link
        Icon.socials__icon(:name="'tg'" :color="'#0088CC'")
    li.socials__item
      a(href="#").socials__link
        Icon.socials__icon(:name="'fb'" :color="'#3B5998'")

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
