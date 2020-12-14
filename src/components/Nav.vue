<template>
  <div id="nav">
    <div class="links">
      <router-link to="/login">Login</router-link>
      <router-link to="/cadastro">Cadastre-se</router-link>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  #nav
    width 550px
    padding 20px 0
    background #fff
    box-shadow 1px 1px 1px rgba(0, 0, 0, 0.1)
    border-radius 20px
    margin-bottom 15px
    
    .links
      width 60%
      display flex
      align-items center
      justify-content space-between

      a
        text-decoration none
        color #0086ed
        text-transform uppercase
        font-weight bold
        letter-spacing 1px

</style>