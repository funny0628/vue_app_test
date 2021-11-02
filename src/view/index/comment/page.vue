<template>
  <div>
    <h5>当前的curIndex是:{{ cur }}</h5>
    <button @click="setCurIndex(4)">点击增加4</button>
  </div>
</template>

<script>
import {mapState , mapMutations} from 'vuex'
export default {
  computed: {
    ...mapState('file1',{
      cur:(state) => state.curIndex 
    })
  },
  methods: {
    //写法一
    ...mapMutations('file1',["setCurIndex"]),
    //写法二
    // setCurIndex(num){
    //   this.$store.commit("file1/setCurIndex",num)
    // }
  }
}
</script>

<style>

</style>