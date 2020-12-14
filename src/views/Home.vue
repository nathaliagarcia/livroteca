<template>
  <div>
    <div class="container">
      <button class="logout" @click="signOut">Sair</button>
      <h1>Livroteca</h1>
      <div class="cards">
        <Card v-for="book in books" :key="book.title" :book="book"/>
      </div>
      <button @click="modalShow = true">Adicionar um livro</button>
    </div>

    <transition name="fade">
      <Modal v-show="modalShow" @close="modalShow = false"/>
    </transition>
  </div>
  
</template>

<script>
import Modal from "../components/Modal"
import Card from "../components/Card"
import { auth, booksRef } from '../firebase';

export default {
  components: {
    Modal,
    Card,
  },

  data() {
    return {
      modalShow: false,
      books: []
    }
  },
  
  methods: {
    async signOut () {
      try {
        const res = await firebase
          .auth()
          .signOut();
        this.$router.push('login')
      } catch (error) {
        alert(error);
      }
    },

    getBooks (snapshot) {
      if(!snapshot) return

      let data = snapshot.val()
      this.books.push(data)
    }
  },

  mounted() {
    const user = auth.currentUser
    booksRef.on('child_added', this.getBooks)
  }
}
</script>

<style lang="stylus" scoped>
  .container
    max-width 1200px
    margin 0 auto 

    .cards
      display flex
      justify-content center
      flex-wrap wrap
      gap 20px

    button 
      display flex
      justify-content center
      align-items center
      width 240px
      height 45px
      margin 30px auto 0
      background-color #0086ed
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
    
    .logout
      background-color #D02021
      width 180px

    .fade-enter-active, .fade-leave-active 
      transition opacity .25s
    .fade-enter, .fade-leave-to
      opacity 0

</style>