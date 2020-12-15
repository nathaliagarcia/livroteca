<template>
  <div>
    <div class="container">
      <Header />
      <h1>Livroteca</h1>
      <div class="cards">
        <Card v-for="book in books" :key="book.title" :book="book"/>
      </div>
    </div>
  </div>
  
</template>

<script>
import Card from "../components/Card"
import Header from "../components/Header"
import { auth, booksRef } from '../firebase';

export default {
  components: {
    Card,
    Header
  },

  data() {
    return {
      books: [],
      name: '',
      photo: ''
    }
  },
  
  methods: {
    getBooks (snapshot) {
      if(!snapshot) return
      let data = snapshot.val()
      this.books.push(data)
    }
  },

  mounted() {
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

</style>