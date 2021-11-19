<template>
  <div>
    <div style="marginBottom:20px">
      <testSelect :selectData="selectData" @submit="selecSsubmit" @cancel="selecCancel"/>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      @select="select"
      @select-all="selectAll"
    >
      <el-table-column 
        v-for="(item,index) in columns" 
        :key="index"  
        :prop="item.prop" 
        :label="item.label" 
        v-bind="item"
      >
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="submit">提交</el-button>
      <el-button @click="$router.go(-1)">返回上一页</el-button>
    </div>
  </div>
</template>

<script>
import testSelect from './component/test-select'
import searchData from './s.js'
export default {
  components: {
    testSelect
  },
  data() {
    return {
      selectData:[
        {
          formEle:'el-input',
          label:'姓名:',
          key:'name',
          value:'',
          placeholder:'请输入input内容',
          data:[],
        },
        {
          formEle:'el-select',
          label:'食物:',
          key:'food',
          value:'',
          placeholder:'请输入select内容',
          data:searchData.selectOptions,
        },
        {
          formEle:'el-cascader',
          label:'组件:',
          key:'components',
          placeholder:'请输入cascader内容',
          props:{ expandTrigger: 'hover' },
          value:'',
          options:searchData.cascaderOptions,
          change:()=>{
            console.log('2222');
          }
        },
      ],
      
      columns:[
        {
          type:'selection',
          width:"50",
        },
        {
          prop:'check',
          label:'状态',
          width:"100",
          formatter:(row, column, cellValue, index)=>{
            return (
              <el-switch
                vModel={row.check}
                active-color="#13ce66"
                inactive-color="#ff4949"
              >
              </el-switch>
            )
          }
        },
        {
          prop:'date',
          label:'日期',
          width:"120"
        },
        {
          prop:'name',
          label:'姓名',
          width:"120"
        },
        {
          prop:'address',
          label:'地址',
          showOverflowTooltip: true,
          width:"120"
        },
        {
          prop:'operate',
          label: '操作',
          ////原生渲染函数的写法
          formatter:(row, column, cellValue, index)=>{
            return this.$createElement(
              "div",
              {
                style: {
                },
              },
              [
                '',
                this.$createElement(
                  "el-button",
                  {
                    style: {
                    },
                    attrs: {
                      type:"primary"
                    },
                    on: {
                      click: this.toggleSelection.bind(this,[this.tableData[1],this.tableData[2]])
                    },
                  },
                  '选中'
                ),
                this.$createElement(
                  "el-button",
                  {
                    style: {
                    },
                    attrs: {
                      type:"info"
                    },
                    on: {
                      click: this.toggleSelection.bind(this,[])
                    },
                  },
                  '取消'
                )
              ]
              
            );

          }
        },
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          check:true,
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          check:true,
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          check:false,
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          check:true,
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          check:false,
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      multipleSelection: [],
    };
  },
  methods: {
    selecSsubmit(){
      console.log('3333',this.selectData);
      let aa = this.selectData.reduce((result,item)=>{
        result[item.key] = item.value
        return result;
      },{})
      console.log(aa,'---aa---');

    },
    selecCancel(){
      this.selectData.map(item=>{
        item.value = ''
      })

    },
    submit(){
      console.log(this.multipleSelection,'被选中的数据---')
    },
    toggleSelection(rows) {
      if (rows && rows.length > 0) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(selection) {
      console.log(selection,'handleSelectionChange---');
      this.multipleSelection = selection;
    },
    select(selection, row){
      console.log(selection, row,'select');
    },
    selectAll(selection,){
      console.log(selection,'selectAll');
    },
  },
};
</script>

<style>
</style>