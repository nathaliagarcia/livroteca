<template>
  <li>
    <img :src="book.image" :alt="book.title">
    <div class="info">
      <h2>{{ book.title }}</h2>
      <p>{{ book.author }}</p>
      <p>{{ book.year }}</p>
      
      <div class="buttons">
        <Button value="Editar" class="green p" @click.native="modalShow=true" />
        <Button value="Excluir" class="red p" @click.native="deleteBook" />
      </div>
      <transition name="fade">
        <ModalUpdate v-show="modalShow" @close="modalShow = false" :book="book" />
      </transition>
      
    </div>
    
  </li>
</template>

<script>
import Button from "../components/Button"
import ModalUpdate from "../components/ModalUpdate"
import { db } from '../firebase';

export default {
  data() {
    return {
      modalShow: false
    }
  },

  components: {
    Button,
    ModalUpdate
  },

  props: {
    book: Object
  },

  methods: {
    async deleteBook() {
      try {
        await db.ref('books/' + this.book.id).remove()
      } catch(error) {
        alert(error)
      }
    },
  }

}
</script>

<style lang="stylus" scoped>
  li
    display flex
    align-items center
    justify-content center
    width 320px
    max-height 160px
    margin 0 20px
    border-radius 15px
    box-shadow 1px 1px 30px 0 rgba(175, 179, 182, 0.14)
    background #fff

    &:hover
      img
        margin-left -10px

    img 
        height 140px
        width 95px
        object-fit cover
        border-radius 15px
        margin-left -30px
        transition all 0.25s ease 

    .info
      display flex
      flex-direction column
      align-items start
      justify-content center
      padding 15px
      height calc(160px - 30px)
      width 100%

      h2
        font-size 18px
        text-align left 
        text-transform capitalize

      p
        color #4A4A4A
        font-size 14px
        text-transform capitalize

      h2, p
        margin 0

      .buttons
        display flex
        margin-top 8px

        .green
          margin-right 3px

    .fade-enter-active, .fade-leave-active 
      transition opacity .25s
    .fade-enter, .fade-leave-to
      opacity 0

</style>