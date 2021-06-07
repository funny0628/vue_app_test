<template>
  <div class="my">
    <p>my</p>
    <el-tree
      :data="data"
      node-key="id"
      show-checkbox
      :props="defaultProps">
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>
            <!--   data.icon为data里的icon属性，用于识别icon图片 -->
                <i :class="data.XXX"></i>{{ node.label }}
            </span>              
        </span>
</el-tree>
  </div>
</template>

<script>
  export default {
    data() {
      return {
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
        }
      };
    }
  };
</script>

<style lang="scss" scoped>
@each $name in XXX{
  .#{$name}-icon {
    background-image: url("https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E5%85%B3%E9%97%AD%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=2594960388,3632675066&os=3532038233,1811075004&simid=4148401967,453277862&pn=2&rn=1&di=113850&ln=1080&fr=&fmq=1622085987153_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&hs=2&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fku.90sjimg.com%252Felement_origin_min_pic%252F01%252F51%252F89%252F805745d94f6f927.jpg%26refer%3Dhttp%253A%252F%252Fku.90sjimg.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1624677986%26t%3Db1296ea0d731c7ce0f62e1c44ccfc872&rpstart=0&rpnum=0&adpicid=0&force=undefined");
    background-repeat: no-repeat;
    display: inline-block;
    width: 22px;
    height: 22px;
    vertical-align: middle;
  
  }
}
.my {
  /deep/ .el-tree {
    padding:2px;
    .el-tree-node  {
      .el-tree-node__content {
        margin: 3px 0;
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
  }
}
</style>


