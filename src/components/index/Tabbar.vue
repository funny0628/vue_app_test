<template>
    <div>
        <van-tabbar v-model="active" route>
            <van-tabbar-item to="/home" name="home" icon="card" >首页</van-tabbar-item>
            <van-tabbar-item to="/search" name="search" icon="search" >搜索</van-tabbar-item>
            <van-tabbar-item to="/more" name="more" icon="setting-o">更多</van-tabbar-item>
            <van-tabbar-item to="/my" name="my" icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import {
        Tabbar,
        TabbarItem
    } from 'vant';

    export default {
        name: 'Tabbar',
        components: {
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem
        },
        data() {
            return {
                active: 'search',
                homeImgUrl: require('../../assets/image/index/shouye.png'),
                icon: {
                    active: 'https://img01.yzcdn.cn/vant/user-active.png',
                    inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
                },
            }
        },
        watch: {
            active: function (value) {
                if (!value) return false;
                value === "home" ? this.icon.activeImgUrl : this.icon.inactive
            }
        }
    }
</script>

<style>

</style>