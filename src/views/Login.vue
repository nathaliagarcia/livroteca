<template>
  <div class="login">
    <Nav />
    <div class="cardLogin">
    <h1>Login</h1>
    <form @submit.prevent="signIn">
      <div class="form-group">
        <label for="email" name="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          autocomplete="off"
          v-model="email"
          required
        />
      </div>
      <div class="form-group">
        <label for="senha" name="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          name="senha"
          autocomplete="off"
          v-model="senha"
          required
        />
      </div>
      <button type="submit">Entrar</button>
    </form>
  </div>
  </div>
</template>

<script>
import Nav from "../components/Nav"
import { auth } from '../firebase';

export default {
  components: {
    Nav
  },

  data() {
    return {
      email: "",
      senha: "",
    };
  },

  methods: {
    async signIn() {
      try {
        const res = await auth
          .signInWithEmailAndPassword(this.email.trim(), this.senha);
          this.$router.replace('/home')
      } catch (error) {
        alert(error.message)
        this.email = ''
        this.senha = ''
      }
    },
  }
};
</script>

<style lang="stylus">
@import "../assets/style/colors.styl";

.login
  margin 0 auto

  .cardLogin
    width 550px
    background-color #fff
    padding 40px 0
    border-radius 20px
    box-shadow 1px 1px 1px rgba(0, 0, 0, 0.1)

    h1
      margin-top 0

    form
      width 100%

      .form-group:not(:last-child)
        margin-bottom 15px
      
      .form-group label,
      .form-group input
        display flex
        margin 0 auto
        width 60%
      
      .form-group input
        margin-top 5px
        padding 8px
        outline none
      
      button
        display flex
        justify-content center
        align-items center
        width 180px
        height 45px
        margin 30px auto 0
        background-color purple
        color #fff
        outline none
        text-decoration none
        text-transform uppercase
        letter-spacing 1px
        border-radius 30px
        border none
        font-size 14px
        font-weight bold
        cursor pointer


</style>
