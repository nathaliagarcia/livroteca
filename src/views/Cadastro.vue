<template>
  <div>
    <Nav />
    <div class="cardLogin">
      <h1>Cadastre-se</h1>
      <form @submit.prevent="registerUser">
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
            minlength="6"
            v-model="senha"
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import { auth } from '../firebase';

export default {
  components: {
    Nav,
  },

  data() {
    return {
      email: "",
      senha: "",
    };
  },

  methods: {
    async registerUser() {
      try {
        const res = await auth
          .createUserWithEmailAndPassword(this.email.trim(), this.senha);
        this.$router.replace('/home')
      } catch (error) {
        alert(error.message)
        this.email = ''
        this.senha = ''
      }
    },
  },
};
</script>

<style lang="stylus" scoped></style>
