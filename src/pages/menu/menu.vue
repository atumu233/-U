<template>
<div>
    <!-- <v-slot>
        <slot >我是父组件的slot</slot>
        <slot slot-scope="data">我是父组件从子组件slot拿来的数据{{data}}</slot>
    </v-slot> -->
    <!-- <v-slot></v-slot> -->
    <el-button type="primary" @click="willAdd">添加</el-button>
    <v-list @edit='edit($event)'></v-list>
    <v-add :info="info" ref="one"></v-add>
</div>
</template>

<script>
import vAdd from "./components/add"
import vList from "./components/list"
import vSlot from "./components/slot"
export default {
    components:{
        vAdd,
        vList,
        vSlot
    },
    data(){
        return {
            dataL:123,
            info:{
                isShow:false,
                isAdd:true  //显示添加按钮
            }
        }
    },
    methods:{
        //点击添加出弹框
        willAdd(){
            this.info.isShow = !this.info.isShow
            this.info.isAdd = true
        },
        //编辑
        edit(e){
            console.log(e);
            this.info.isShow = true
            this.info.isAdd = false
            this.$refs.one.look(e)
        }
    }
}
</script>

<style>

</style>