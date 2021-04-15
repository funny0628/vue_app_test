<template>
  <div>home
      <p @click="aa">测试点击</p>
  </div>
</template>

<script>
export default {
    methods: {
        aa(){
            this.$myMethod()
        },
    }

}
</script>

<style>

</style>