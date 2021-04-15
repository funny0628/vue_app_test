<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item badge="3">
                <span>首页</span>
                <template>
                    <!-- <img :src="props.active ? icon.active : icon.inactive" /> -->
                </template>
            </van-tabbar-item>
            <van-tabbar-item name="search" icon="search">搜索</van-tabbar-item>
            <van-tabbar-item name="more" icon="setting-o">更多</van-tabbar-item>
            <van-tabbar-item name="my" icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import {
        Tabbar,
        TabbarItem
    } from 'vant';

    export default {
        name:'Tabs',
        components: {
            [Tabbar.name]:Tabbar,
            [TabbarItem.name]:TabbarItem
        },
        data() {
            return {
                active: 'search'
            }
        }
    }
</script>

<style>

</style>