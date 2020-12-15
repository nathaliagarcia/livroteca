<template>
  <div class="overlay">
    <div id="insertWorker">
      <h2>Insira um novo livro</h2>

      <form @submit.prevent="registerBook">
        <div class="form-group">
          <label for="title" name="title">Título:</label>
          <input
            type="text"
            name="title"
            autocomplete="off"
            v-model="title"
            required
          />
        </div>
        <div class="form-group">
          <label for="author" name="author">Autor(a):</label>
          <input
            type="text"
            name="author"
            autocomplete="off"
            v-model="author"
            required
          />
        </div>
        <div class="form-group">
          <label for="description" name="description">Descrição:</label>
          <input
            type="text"
            name="description"
            autocomplete="off"
            v-model="description"
            required
          />
        </div>
        <div class="form-group">
          <label for="image" name="image">Imagem:</label>
          <input
            type="text"
            name="image"
            autocomplete="off"
            v-model="image"
            required
          />
        </div>

        <button type="submit" class="insert">Adicionar</button>
      </form>

      <button class="close-modal" @click="$emit('close')">x</button>
    </div>
  </div>
</template>

<script>
import { booksRef } from "../firebase";

export default {
  data() {
    return {
      title: '',
      author: '',
      description: '',
      image: '',
    }
  },

  methods: {
    registerBook() {
      booksRef.push(this.$data)

      this.title = ''
      this.author = ''
      this.description = ''
      this.image = ''

      this.$emit('close')
    }
  },
};
</script>

<style lang="stylus" scoped>
@import "../assets/style/colors.styl";

.overlay
  display flex
  width 100%
  height 100vh
  position fixed
  left 0
  top 0
  background-color rgba(0, 0, 0, 0.6)
  justify-content center
  align-items center

  #insertWorker
    position relative
    width 400px
    background-color #fff
    flex-direction column
    align-items center
    justify-content center
    padding 60px
    border-radius 20px
    box-shadow 2px 2px 2px rgba(0, 0, 0, 0.1)
    transition all 0.2 ease

    h2
      font-size 28px
      margin-top 0
    
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

    .close-modal
      position absolute
      top -20px
      right -20px
      width 50px
      height 50px
      border-radius 50%
      background-color purple
      color #fff
      border none
      box-shadow 2px 2px 2px rgba(0, 0, 0, 0.1)
      outline none
      cursor pointer
      font-size 16px
      font-weight 700
      margin 0

    form
      display block
      width 100%

      .form-group
        &:not(:last-child)
          margin-bottom 10px

        label, input 
          display block
          width calc(100% - 16px)
          text-align left 
        
        input 
          margin-top 5px
          padding 8px
          border 1px solid #ccc
          outline none 

</style>
