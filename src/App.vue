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

body
  margin 0

#app
  display flex
  flex-direction column
  align-items center
  justify-content center
  background #f6f6f6
  width 100%
  min-height 100vh
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #111

</style>
