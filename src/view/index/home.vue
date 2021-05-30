<template>
    <div class="home">
        <div class="home-top">
            <van-search v-model="value" shape="round" background="#4fc08d" placeholder="请输入搜索关键词" />
            <van-tabs v-if="tabsList.length > 0" @change="tabsChange">
                <van-tab v-for="(item,index) in tabsList" :title="item.title" :key="index" :name="item.id">
                    <div class="home-container">
                        <Grids class="gard" :listData="detail"/>
                    </div>
                        
                </van-tab>
            </van-tabs>
        </div>
        
        
    </div>
</template>

<script>
    import {
        Search,
        Tab,
        Tabs
    } from 'vant';
    import {homeData} from '../../utils/dataList/home.js'
    export default {
        components: {
            [Search.name]: Search,
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
        },
        data() {
            return {
                value: '',
                imgurl: require('../../assets/image/index/service 2.png'),
                tabsList:homeData.tabsList,
                detail:homeData['tabs_1'],
            }
        },
        created () {
        },
        methods: {
            tabsChange(name,title){
                this.detail = homeData[name]
            },
        }

    }
</script>

<style lang='less'>
    .home {
        width: 100%;
        height: 100%;
        position: relative;

    }

    .home img {
        width: 1.375rem;
        height: 1.375rem;
        position: absolute;
        right: 10px;
    }
    .home .home-container {
        display: flex;
        .gard {
            // width: 25%;
        }
    }
</style>