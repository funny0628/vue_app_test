<template>
  <div id="app">
    <router-view>
      
    </router-view>
  </div>
</template>

<script>
import ErrorComponent from './components/layout/ErrorComponent.vue'
import LoadingComponent from './components/layout/LoadingComponent.vue'

const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('./view/index'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
})

export default {
  name: 'App',


}
</script>


<style>
#app {
  width: 100vw;
  height: 100vh;
}
</style>
