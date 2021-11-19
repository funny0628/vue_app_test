export let columns = [
  {
    prop: "jobcode_descr_info",
    label: "当前职级",
    showOverflowTooltip: true,
    minWidth: 200,
    formatter: (row, col, status) => {
      return new Vue().$createElement(
        "span",
        {
          style: {
          },
        },
        row.jobcode_descr_info ? row.jobcode_descr_info : "-"
      );
    },
  },
  {
    prop: "up_type",
    label: "部门定级类型",
    showOverflowTooltip: true,
    // width: "120px",
    minWidth: 110,
    formatter: (row, col, status) => {
      return new Vue().$createElement(
        "span",
        {
          style: {
            // color: target ? target.color : "",
          },
        },
        getbgCofirmType(row)
      );
    },
  },
  {
    label: "部门定级",
    showOverflowTooltip: true,
    minWidth: 200,
    formatter: (row, col, status) => {
      return new Vue().$createElement(
        "span",
        {
          style: {

          },
        },
        formatDescrInfo(row, row.bg_cofirm_info ? "bg_cofirm_info" : "up_jobcode_descr_info")
      );
    },
  },
  {
    prop: "people_flow",
    label: "部门定级资格",
    showOverflowTooltip: true,
    minWidth: 110,
    formatter: (row, col, status) => {
      return new Vue().$createElement(
        "span",
        // {
        //     style: {},
        // },
        showColText(row, "people_flow")
      );
    },
  },
  {
    prop: "status",
    label: "状态",
    minWidth: 140,
    showOverflowTooltip: true,
    formatter: (row, col, status) => {
      return new Vue().$createElement(
        "div",
        {
          style: {},
        },
        getStatusText(row)
      );
    },
  },
  {
    prop: "report_lines",
    label: "审批链路",
    minWidth: 350,
    showOverflowTooltip: true,
    formatter: (row, col, status) => {
      return new Vue().$createElement(
        "div",
        {
          style: {},
        },
        getReportLines(row) || '-'
      );
    },
  },
  {
    prop: "c_org_fullname",
    label: "所属组织单元",
    showOverflowTooltip: true,
    width: 200,
    minWidth: 200,
    formatter: (row, col, status) => {
      return new Vue().$createElement(
        "span",
        {
          style: {
          },
        },
        formatSplitText(row.c_org_fullname)
      );
    },
  },
]