<template>
  <li>
    <img :src="book.image" :alt="book.title">
    <div>
      <h2>{{ book.title }}</h2>
      <p>{{ book.author }}</p>
    </div>
    
  </li>
</template>

<script>
export default {
  props: {
    book: Object
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

    div
      display flex
      flex-direction column
      align-items start
      justify-content center
      padding 15px
      height calc(160px - 30px)

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

</style>