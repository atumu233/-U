import Vue from "vue"
let vm = new Vue();

//成功弹框
export const alertSuccess =(msg)=>{
    vm.$message({
    message: msg,
    type: 'success'
  });
}
//失败弹框
export const alertWarning =(msg)=>{
    vm.$message({
    message: "已取消删除",
    type: 'info'
  });
}

