<template>
  <div>
      <van-grid clickable :column-num="2">
  <van-grid-item icon="home-o" text="路由跳转" to="/" />
  <van-grid-item icon="search" text="URL 跳转" url="/my" />
</van-grid>
  </div>
</template>

<script>
 import {
        Grid,
        GridItem
    } from 'vant';
    export default {
        name:"Routergrid",
        components: {
            [Grid.name]: Grid,
            [GridItem.name]: GridItem,

        }
    }
</script>

<style>

</style>