<template>
  <div>
    <div class="container">
      <Button value="Sair" class="red p" @click.native="signOut" />
      <h1>Livroteca</h1>
      <div class="cards">
        <Card v-for="book in books" :key="book.title" :book="book"/>
      </div>
      <Button value="Adicionar um livro" class="purple" @click="modalShow=true" />
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
import Button from "../components/Button"
import { auth, booksRef } from '../firebase';

export default {
  components: {
    Modal,
    Card,
    Button
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
        const res = await auth
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
    console.log(user)
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

    .fade-enter-active, .fade-leave-active 
      transition opacity .25s
    .fade-enter, .fade-leave-to
      opacity 0

</style>