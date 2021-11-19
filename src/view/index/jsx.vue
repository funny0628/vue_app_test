
<script>
import { transform, merge } from "lodash";

export default {
  props:{
    data:{
      type:Array,
    }
  },
  data() {
    return {
      vhtml: '<h5>111112222</h5>',
    };
  },
  created () {
  },
  methods: {
    renderSelectOptions(data) {
      return data.map((option) => {
        return <el-option {...{ attrs: option }}></el-option>;
      });
    },
    renderHtml(h,item){
      let events = {} 
      let attrs = {}
      const confData = transform(
        item,
        (result, value, key) => {
          if (!["label", "formEl", "value"].includes(key)) {
            if(typeof value === "function"){
              events[key] = value
            }else{
              
              }
              attrs[key] = value
          }
          result.events = events;
          result.attrs = attrs;
          return result;
        },
        {}
      );

      switch (item.formEl) {
        case 'input':
          return (
            <el-input 
            vModel_trim = { item.value }  
            { ... {  attrs : confData.attrs  } }
            { ... {  on : confData.events  } }
            clearable
            >
            {item.slot ? item.slot(h) : ""}
            </el-input>
          )
        case 'select':
          return (
            <el-select 
            vModel_trim = { item.value }  
            { ... {  attrs : confData.attrs  } }
            { ... {  on : confData.events  } }
            >
            {this.renderSelectOptions(item.data || [])}
            </el-select>
          )
      
        default:
          break;
      }


    },
  },
  render:function(h){
    let searchList = this.data;

    return (
      <div class="select">
      {searchList.map(item=>{
        return (
          <div class="outbox">
            <span class="title">{item.label}</span>
            {this.renderHtml(h,item)}
            <span class="icon"> <i class={item.className}></i> </span>
          </div>
        )
      })}
        {
          // 使用html
          // <div domPropsInnerHTML={this.vhtml}></div>
          <div>
          {searchList.length > 3 ? (
            <div>
              <el-button onClick={() => this.$emit("submit")} type="primary">更多</el-button>
              <el-button onClick={()=>{this.$emit('reset')}} type="primary">提交</el-button>
            </div>
          ) : (
             <div>
              <el-button onClick={() => this.$emit("submit")} type="primary">提交</el-button>
            </div>
          )}
            
          </div>
        }
      </div>
    )
  }

}
</script>
<style lang="scss" scoped>
.select {
  display: flex;
}
  .outbox {
    font-size: 12px;
    color: red;
    display: flex;
    align-items: center;
    padding: 0 5px;
    box-sizing: border-box;
    .icon {
      font-size: 16px;
    }
  }
  /deep/ .el-input {
    width: 160px;
    margin: 0 5px;
    .el-input__inner {
      font-size: 12px;
    }
    .el-button {
      font-size: 12px !important;
      padding: 12px 10px !important;
      box-sizing: border-box;
    }
  }
</style>