<template>
  <div class="main">
    <div id="app1">
      <el-row class="leftNav">
        <el-col :span="24">
          <el-menu
            router
            class="el-menu-vertical-demo"
            background-color="#034f8d"
            text-color="#fff"
            active-text-color="#ffd04b"
            :collapse="isCollapse"
          >
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">新增账单</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">每月汇总</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">年度汇总</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">还没想好</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="views">
      <router-view></router-view>
    </div>
    <div class="title">
      <span>理财管家</span>
      <div class="navRight">
        <div>{{time}}</div>
        
        <div class="log">
          <div><img src="../assets/zaixianyonghu.png" alt=""></div>
          <div><span>{{name}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      isCollapse: false,
      time:'',
      name:'请先登录'
    };
  },
  mounted() {
    console.info(document.cookie)
    this.getTime()
    if (!document.cookie) {
      this.$router.push("/login");
    }
    else{
      let cookie = document.cookie.split(";")[0].split("=");
      this.name=`您好，${cookie[1]}`
      console.info(cookie,this.name)
    }
  },
  methods:{
    getTime(){
      let date = new Date();
      let seperator1 = "-", year = date.getFullYear();
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
     if (month >= 1 && month <= 9) {
             month = "0" + month;
         }
      if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
       this.time= year + seperator1 + month + seperator1 + strDate;
    }
  }
};
</script>
<style lang="less" scoped>
.main,
#app1,
.leftNav {
  height: 100%;
}
.leftNav{
  padding-top: 50px;
}
.main {
  display: flex;
  justify-content: space-between;
}
#app1 {
   width: 15%;
  // background: #0078d7;
  // border: 1px solid white;
}
.views {
  width: 80%;
  margin: 60px auto;
}
.title {
  width: 100%;
  height: 50px;
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left:0;
  background: #034f8d;
  display: flex;
  z-index: 1;
  >span{
    color:rgb(240, 184, 2);
    font-size: 30px;
    font-weight: 400;
    margin-left: 5%;
    height: 100%;
    line-height: 50px;
  }
  .navRight{
    height: 100%;
    width: 300px;
    position: relative;
    left: 60%;
    top:0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    line-height: 50px;
    color:white;
    .log{
      display: flex;
      align-content: center;
    }
  }
  img{
    height: 20px;
    width: 20px;
  }
}
</style>

