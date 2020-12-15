<template>
  <div class="header">
    <div class="user">
      <img :src="photo" :alt="name">
      <div class="welcome">
        <p>Bem vindo(a),</p>
        <h3>{{ name }}</h3>
      </div>
      <Button value="Sair" class="red p" @click.native="signOut" />
    </div>
    <Button value="Adicionar um livro" class="purple" @click.native="modalShow=true" />

    <transition name="fade">
      <Modal v-show="modalShow" @close="modalShow = false"/>
    </transition>
  </div>
  
</template>

<script>
import { auth, booksRef } from '../firebase';
import Button from '../components/Button'
import Modal from '../components/Modal'

export default {
  components: {
    Button,
    Modal
  },

  data() {
    return {
      name: '',
      photo: '',
      modalShow: false,
    }
  },

  methods: {
    async signOut () {
      try {
        const res = await auth
          .signOut();
        this.$router.push('login')
      } catch (error) {
        alert(error);
      }
    },
  },

  mounted() {
    const { displayName, photoURL } = auth.currentUser
    this.name = displayName
    this.photo = photoURL
  }
}
</script>

<style lang="stylus" scoped>
.header
  display flex
  align-items center
  justify-content space-around

  .user
    background-color #fff
    border-radius 15px
    display flex
    align-items center
    width 30%

    img
      width 80px
      height 80px
      border-radius 100%
      margin-left -30px

    .welcome
      text-align left
      width 100%
      margin-left 15px

      p, h3
        margin 0
    
    .red
      margin 0 20px
  
  .fade-enter-active, .fade-leave-active 
    transition opacity .25s
  .fade-enter, .fade-leave-to
    opacity 0

</style>