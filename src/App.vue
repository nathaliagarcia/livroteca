<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="stylus">
@import './assets/style/colors.styl'

body
  margin 0

#app
  display flex
  flex-direction column
  align-items center
  justify-content center
  background lightGray
  width 100%
  min-width 1200px
  min-height 100vh
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #111

</style>
