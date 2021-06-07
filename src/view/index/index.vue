<template>
  <div class="box">
    <div class="top">

    <router-view></router-view>
    </div>
    <div class="topbar">

    <Tabbar />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped> 
.box {
  height: 100%;
  width: 100%;
  .top {
    height: 92%;
    overflow: auto;
  }
  .topbar {
    height: 8%;
  }
}
</style>