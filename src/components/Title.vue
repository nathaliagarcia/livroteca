<template>
  <div class="title">
    <h1>{{ value }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    value: String
  }
}
</script>

<style lang="stylus" scoped>
@import "../assets/style/colors.styl";

  .title
    margin 60px auto 0
    background-color darken(green, 5%)
    border-radius 15px
    width 95%

    h1
      margin 0
      padding 15px
      color #fff
      text-transform uppercase
      letter-spacing 1px
      font-size 24px
</style>