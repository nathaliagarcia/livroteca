<template>
  <button type="submit" >{{ value }}</button>
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

  button 
    display flex
    justify-content center
    align-items center
    padding 12px 35px
    background-color green
    color white
    outline none
    text-decoration none
    text-transform uppercase
    letter-spacing 1px
    border-radius 30px
    border none
    font-size 14px
    font-weight bold
    cursor pointer

    &.red
      background-color red

    &.purple
      background-color purple

    &.green
      background-color green

    &.p
      font-size 10px
      letter-spacing .5px
      padding 8px 10px
      margin 0

</style>