<template>
  <div>
    <div class="container">
      <Header />
      <Title value="Meus Livros" />
      <div class="cards">
        <Card v-for="book in books" :key="book.title" :book="book"/>
      </div>
    </div>
  </div>
  
</template>

<script>
import Card from "../components/Card"
import Header from "../components/Header"
import Title from "../components/Title"
import { auth, booksRef } from '../firebase';

export default {
  components: {
    Card,
    Header,
    Title
  },

  data() {
    return {
      books: [],
      ids: [],
      name: '',
      photo: ''
    }
  },
  
  methods: {
    getBooks (snapshot) {
      if(!snapshot) return

      let data = snapshot.val()
      this.books.push( {...data, ...{id: snapshot.key} } )
    },

    removeBook (snapshot) {
      this.books = this.books.filter( (book) => book.id !== snapshot.key )
    }
  },

  mounted() {
    booksRef.on('child_added', this.getBooks)
    booksRef.on('child_removed', this.removeBook)
  }
}
</script>

<style lang="stylus" scoped>
  .container
    max-width 1200px
    margin 40px auto 

    .cards
      display flex
      justify-content center
      flex-wrap wrap
      gap 20px

</style>