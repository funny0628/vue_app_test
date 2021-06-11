const evaluationItemList = this.templateTableHeads.reduce((result, item, index) => {
  return result.concat(item.reduce((res, head) => {
    if(Number(head.is_updateable) && Number(head.need_authority) < 2) {
      return res.concat(this.templateTables[index].reduce((rowVal, row) => {
        const cellValue = row[head.original_id].value.replace(/\s*/g,"")
        hasEmptyEvaluationItemList.push(!!cellValue)
        row[head.original_id] && rowVal.push(!!row[head.original_id].value)
        return rowVal
      }, []))
    }
    return res
  }, []))
}, [])