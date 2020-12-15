<template>
  <div class="login">
    <Nav />
    <div class="cardLogin">
      <h1>Cadastre-se</h1>
      <form @submit.prevent="registerUser">
        <div class="form-group">
          <label for="displayName" name="displayName">Nome:</label>
          <input
            type="text"
            id="displayName"
            name="displayName"
            autocomplete="off"
            v-model="displayName"
            required
          />
        </div>
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
        <div class="form-group">
          <label for="photoURL" name="photoURL">Foto (URL):</label>
          <input
            type="text"
            id="photoURL"
            name="photoURL"
            autocomplete="off"
            minlength="6"
            v-model="photoURL"
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
      photoURL: "",
      displayName: ""
    };
  },

  methods: {
    async registerUser() {
      try {
        const res = await auth
          .createUserWithEmailAndPassword(this.email.trim(), this.senha);
        const user =  await auth.currentUser
          .updateProfile( { displayName: this.displayName, photoURL: this.photoURL } )

        this.$router.replace('/home')
        
      } catch (error) {
        alert(error.message)
        this.displayName = ''
        this.email = ''
        this.senha = ''
        this.photoURL = ''
      }
    },
  },
};
</script>

<style lang="stylus" scoped></style>
