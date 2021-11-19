
<script>
export default {
  props: ['selectData'],
  data() {
    return {
    }
  },
  created () {
  },
  methods: {
    getEle(cof){
        switch (cof.formEle) {
          case 'el-input':
            return <el-input vModel={cof.value}  placeholder="请输入内容"></el-input>
            break;
          case 'el-select':
            return (
              <el-select vModel={cof.value} placeholder="请选择">
                {
                  cof.data.map(item=>{
                    return (
                      <el-option
                        {...{ attrs: item }}
                        >
                      </el-option>
                    )
                  })
                }
              </el-select>
            )
            break;
          case 'el-cascader':
            return (
              <el-cascader
                vModel={cof.value}
                {...{ attrs: cof }}
                {...{ on: cof }}
                >
              </el-cascader>
            )
            break;
          default:
            break;
        }
    },
  },
  render(h){
    return (
      <div class="search"> 
        {this.selectData.map(item=>{
          return (<div class="search-item">
            <span class="name">{item.label}</span>    
            <div>{this.getEle(item)}</div>
          </div>)
        })}
        <div>
          <el-button onClick={()=>this.$emit('submit')}>搜索</el-button>
          <el-button onClick={()=>this.$emit('cancel')}>清空</el-button>
        </div>
      </div>
    )
  }
}
</script>
<style lang="scss" scoped>
.search {
  width: 100%;
  padding: 10px 20px 0;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .search-item {
    margin: 10px;
    display: flex;
  }
}
</style>

