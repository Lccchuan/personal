<template>
<div class="main">
    <div id="app1">
<el-row class="leftNav">
  <el-col :span="3">
    <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#0078D7" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse">
    <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
</div>
<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
</div> 

</template>

<script>
// @ is an alias to /src


export default {
data () {
    return {
        isCollapse:false,
    }
},
mounted () {
    let cookie=document.cookie.split(";")[1].split("=");   
    if(!cookie){
        this.$router.push('/login')
    }
}
}
</script>
<style lang="less" scoped>
.main,#app1,.leftNav{
  height: 100%;
}

</style>

