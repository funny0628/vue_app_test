<template>
    <div class="home">
        <div class="home-top">
            <van-search v-model="value" shape="round" background="#4fc08d" placeholder="请输入搜索关键词" />
            <van-tabs v-if="tabsList.length > 0" @change="tabsChange">
                <van-tab v-for="(item,index) in tabsList" :title="item.title" :key="index" :name="item.id">
                    <div class="home-container">
                        <Grids class="gard" :listData="detail"/>
                    </div>
                    <div class="content">
                        <a @click="targetOut" >点击跳转百度链接</a>
                    </div>
                    <div @click="aa" class="paixu">
                        <div class="biaoti">标题</div>
                        <p>内容</p>
                        <p>内容</p>
                        <p>内容</p>
                        <div class="biaoti">标题</div>
                        <p>内容</p>
                        <p>内容</p>
                        <div class="biaoti">标题</div>
                        <p>内容</p>
                        <p>内容</p>
                        <p>内容</p>
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
            targetOut(){
                window.location.href = 'http://www.baidu.com'; 
            },
            aa(e){
                console.log('1111',e.target);
            }
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
    .home .content {
        a::before{
            content:counter(h)'.';
        }
        a{
            counter-increment:h;
        }
    }
    .home .paixu {
        div::before{
            content:"\2612" counter(h)'.';
            display: inline-block;
        }
        div {
            counter-increment:h;
            counter-reset: a;
        }
        p::before{
            content:counter(a)'.';
        }
        p {
            counter-increment:a;
        }
    }
</style>