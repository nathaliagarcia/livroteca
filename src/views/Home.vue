<template>
  <div id="home">
    <div class="container">
      <Header />
      <Title value="Meus Livros" />
      <div class="search">
        <label for="search">Buscar um livro:</label>
        <input
          type="text"
          name="search"
          id="search"
          v-model="search"
          @change="searchBooks"
        />
        <Button value="Buscar" class="p purple" />
      </div>
      <div class="cards">
        <Card v-for="book in books" :key="book.title" :book="book" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button';
import Card from "../components/Card";
import Header from "../components/Header";
import Title from "../components/Title";
import { auth, booksRef } from "../firebase";

export default {
  components: {
    Card,
    Header,
    Title,
    Button
  },

  data() {
    return {
      books: [],
      ids: [],
      name: "",
      photo: "",
      search: "",
    };
  },

  methods: {
    getBooks(snapshot) {
      if (!snapshot) return;

      const data = this.handleBook(snapshot);
      this.books.push(data);
    },

    removeBook(snapshot) {
      this.books = this.books.filter((book) => book.id !== snapshot.key);
    },

    updateBook(snapshot) {
      const data = this.handleBook(snapshot);
      this.books = this.books.map((book) =>
        book.id == snapshot.key ? data : book
      );
    },

    handleBook(snapshot) {
      return { ...snapshot.val(), ...{ id: snapshot.key } };
    },

    searchBooks() {
      this.books = []
      booksRef
        .orderByChild("title")
        .startAt(this.search)
        .endAt(this.search + '\uf8ff')
        .on("child_added", (snapshot) => this.getBooks(snapshot) )
      
      console.log(this.books)
    },
  },

  mounted() {
    booksRef.orderByChild('title').on("child_added", this.getBooks);
    booksRef.on("child_removed", this.removeBook);
    booksRef.on("child_changed", this.updateBook);
  },
};
</script>

<style lang="stylus" scoped>
@import "../assets/style/colors.styl";

#home
  min-width 1200px
  .container
    max-width 1200px
    margin 40px auto

    .search
      margin 15px 30px 30px
      width 95%
      display flex
      align-items center

      input
        margin 0 10px 0 4px
        padding 5px 12px
        border-radius 25px
        outline none
        border 1px solid gray

    .cards
      display flex
      justify-content center
      flex-wrap wrap
      gap 20px
</style>
