<template>
  <div class="my">
    <p>my</p>
    <el-tree
      :data="data"
      node-key="id"
      :props="defaultProps">
    </el-tree>
    <!-- @功能 -->
    <div>
      <vue-tribute :options="tributeOptions">
        <div class="infoInput"  v-html="text" type="text" placeholder="@..." @input="inputEvent"></div>
      </vue-tribute>
      <button @click="getValue">获取文本</button>
    
    <!-- 异步组件使用 -->
      <div v-if="Show">
        <AsyncComponent />
      </div>
      
    </div>

    <!-- vuex/模块化体验 -->
    <hr>
    <div class="vuex">
      <!-- <Tap /> -->
      <Page />
    </div>
    <hr>
    <hr>
    <div style="marginTop:20px">11</div>
    <!-- 渲染函数练习 -->
    <div>
      <!-- 原始渲染函数的写法->麻烦,冗杂 -->
      <Vnode :columns="columns"/>
    </div>
    <div style="marginTop:20px"></div>
    <!-- 安装包使用jsx -->
    <div>
      <Jsx
        :data="searchConf"
        @submit="jsxSubmit"
        @reset="jsxReset"
      />
    </div>
    <div style="marginTop:20px"></div>
    <!-- 表格的简化写法 -->
    <button @click="$router.push({name:'selftabel'})">selfTabel</button> <span style="marginLeft:20px"></span>
    <button @click="$router.push({name:'select'})">select</button>
    <div style="marginTop:20px"></div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vnode from './vnode.vue'
import Jsx from './jsx.vue'
import Page from './comment/page.vue'
import VueTribute from 'vue-tribute'
import {columns} from './vnode.js'

// 异步组件使用
import ErrorComponent from '../../components/layout/ErrorComponent.vue'
import LoadingComponent from '../../components/layout/LoadingComponent.vue'
const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('./test.vue'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 500,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 4000
})

  export default {
    components: {
      VueTribute,
      AsyncComponent,//异步组件使用
      Page,
      Vnode,
      Jsx,
    },
    data() {
      return {
        searchConf:[
          {
            key:'name',
            label:"我是input",
            formEl:'input',
            placeholder:'请输入内容',
            className:"el-icon-warning",
            value:'',
            maxlength:'10',
            fn:()=>{},
            change: () => this.changeName(0),
            slot: (h) => {
              return (
                <el-button slot="append" onClick={this.selectAssessUnit}>
                  选 择
                </el-button>
              );
            },
          },
          {
            key:'type',
            label:"我是select",
            formEl:'select',
            placeholder:'请输入内容',
            filterable: true,
            remote: true,
            value:'',
            data:[],
            "remote-method": (query) => this.remoteMethod(query, 1),
            change: () => this.changeName(1),
          }
        ],
        columns:columns,
        style:{
          color: 'red',
          fontSize: '14px'
        },
        // border:{
        //   border:'1px solid #ccc'
        // },
        Show:false,
        aa:'',
        text:'',
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tributeOptions:{
          trigger: '@',
          list: [
            { key: "Phil Heartman", value: "pheartman" },
            { key: "Gordon Ramsey", value: "gramsey" },
            { key: "Gordon 11", value: "111" },
            { key: "Gordon 22", value: "222" },
            { key: "Gordon 33", value: "333" },
            { key: "Gordon 44", value: "444" },
            { key: "Gordon 55", value: "555" },
            { key: "Gordon 66", value: "666" },
            { key: "Gordon 77", value: "777" },
            { key: "Gordon 88", value: "888" },
            { key: "Gordon 99", value: "999" },
          ],
          values:function (text, cb) {
            this.remoteSearch(text, users => cb(users));
          },
          selectTemplate: function (item) {
            // return '@' + item.original.value;
            console.log(item,'---');
            return `<span style='color:#2F75BE'> @${item.original.value}</span>`;
          },
        }
      };
    },
    created () {
    },
    methods: {
      // jsx--------------------------------------------------------
      jsxReset(){
        console.log('重置....');
      },
      jsxSubmit(){
        console.log('提交了....',this.searchConf);

      },
      selectAssessUnit(){
        console.log('我是input中的按钮的点击事件');
      },
      changeName(type){
        console.log('这里是统一的change事件',type);
      },
      remoteMethod(query,type){
        console.log(query,'这里是select的远程搜索事件-----');
        setTimeout(() => {
          this.searchConf[type].data =  [{
                value: '选项1',
                label: '黄金糕'
              }, {
                value: '选项2',
                label: '双皮奶'
              }, {
                value: '选项3',
                label: '蚵仔煎'
              }, {
                value: '选项4',
                label: '龙须面'
              }, {
                value: '选项5',
                label: '北京烤鸭'
              }]
        }, 1000);
      },
       // jsx--------------------------------------------------------
      remoteSearch(){
        setTimeout(() => {
          if(this.list.length > 0){
            cb(this.list);
          }else{
            cb([]);
          }
        }, 500);
      },
      inputEvent(e){
        console.log(e,e.target.innerHTML);
        this.aa = e.target.innerHTML;
      },
      getValue(){
        this.text = this.aa;
        console.log(this.text);
        this.Show = true;
      }
    },
  };
</script>

<style lang="scss" scoped>
.border {
          border:'1px solid #ccc'
        }
.my {
  /deep/ .el-tree {
    padding:2px;
    box-sizing: border-box;
    .el-tree-node  {
      position: relative;
      padding-left: 16px;
      .el-tree-node__content {
        padding-left: 0px !important;
        &:hover {
          background-color: #d5e7f3;
        }
        .el-tree-node__expand-icon {
          padding: 0;
          &:not(.is-leaf ).el-icon-caret-right {
            background-color: #0075C4;
            margin-right: 5px;
            display: inline-block;
            width: 18px;
            height: 18px;
            color: #fff;
            text-align: center;
            &:before{
              font-size: 24px;
              content: "\002B" !important;
              line-height: 13px; // 注意...
            }
          }
          &.expanded {
            &.el-icon-caret-right:before {
              font-size: 12px;
              content: "\007C" !important;
              line-height: 18px; // 注意...
            }
          }
        }
      }
    }

    > .el-tree-node {
      // padding-left: 0;
    }

    .el-tree-node:after {
      // border-top: none;
    }

    .el-tree-node__children {
      padding-left: 16px;
      overflow: visible;
    }

    .el-tree-node :last-child:before {
      height: 17px;
    }

    .el-tree-node__children .el-tree-node:before {
      content: "";
      left: -8px;
      position: absolute;
      right: auto;
      border-width: 1px;
    }

    .el-tree-node__children .el-tree-node:after {
      content: "";
      left: -8px;
      position: absolute;
      right: auto;
      border-width: 1px;
    }

    .el-tree-node:before {
      border-left: 1px solid #000;
      bottom: 0px;
      height: 100%;
      top: -4px;
      width: 1px;
    }

    .el-tree-node:after {
      border-top: 1px solid #000;
      height: 20px;
      top: 12px;
      width: 24px;
    }
  }
  
}
</style>
<style lang="scss" >
.infoInput {
  border: 1px solid #ccc;
  height: 20px;
  line-height: 20px;
}
  .tribute-container {
    max-height: 100px;
    overflow-y: auto;
    border:1px solid #ccc ;
    background-color: #fff;
    padding: 5px;
    box-sizing: border-box;
  }
</style>


