<template>
    <div class="grid">
        <van-grid :column-num="5">
            <van-grid-item v-for="(item,index) in list" :key="index" :icon="item.image_url" :text="item.opt_name" />

        </van-grid>
    </div>
</template>

<script>
    import {
        Grid,
        GridItem,
        Button
    } from 'vant';
    import { Image as VanImage } from 'vant';
    export default {
        name:"Grids",
        components: {
            [Grid.name]: Grid,
            [GridItem.name]: GridItem,
            [Button.name]: Button,
            [VanImage.name]: VanImage,

        },
        props: {
            listData:{
                // type:Object | Function,
                // default:{},
            },
        },
        created () {
            console.log(this.listData);
        },
        computed:{
            list:function(){
                return this.listData.data.opt2_list
            }
        }
    }
</script>

<style lang="less" scoped>
.grid {
    .van-grid-item {
        height: 6.25rem;
        .van-grid-item__content--center {

            display: flex;
            flex-direction: column;
            margin-left: .3125rem;
        }
    }
}
</style>