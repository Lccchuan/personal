<style  lang="less" scoped>
.titleRow {
  display: flex;
  justify-content: space-around;
  .titleRight {
    width: 500px;
    text-align: right;
    line-height: 40px;
  }
}
.add{
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top:0;
    display: flex;
    align-content: center;
    background: rgba(200,200,200,0.5);
    .box-card{
        height: 350px;
        width: 600px;
        margin: auto;   
        .btn{
            display: flex;
            justify-content: center;
            margin-top:30px; 
        }
    }
}
</style>

<template>
  <div>
    <div class="titleRow">
      <el-row>
        <el-button type="success" @click="add=true">新增收入</el-button>
        <el-button type="warning">新增支出</el-button>
      </el-row>
      <div class="titleRight">今日收入:{{addMoney}}元；今日支出:{{reduceMoney}}元</div>
    </div>
    <div class="add" v-if="add">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>收入</span>
        </div>
        <div class="block">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="选择日期">
                <el-date-picker v-model="form.date" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="活动名称">
                    <el-input v-model="form.name" clearable></el-input>
                </el-form-item>
                <el-form-item label="金额(元)"  >
                    <el-input  v-model="form.value"  clearable ></el-input>
                </el-form-item>
            </el-form>
            <div class="btn">
                <el-button @click="resetField()">取 消</el-button>                
                <el-button type="primary" @click="submitForm('form')">确 定</el-button>
            </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      addMoney: 0,
      reduceMoney: 0,
      add:false,
      form:{
      value:'',
      name:'',
      date:''
      },

    };
  },
  methods:{
      submitForm(data){
          console.info(this.form)
          let storage=[];
          if(this.form.name=''||this.form.value==''||this.form.date==''){
              alert("请输入完整的项哦!!!!")
          }
          else{
              let obj={
                  "name":this.form.name,
                  "value":this.form.value,
                  "date":this.form.date
              }
              if(!localStorage.getItem("addArr")){
                storage=JSON.parse(localStorage.getItem("addArr"));
                
              }
              else {
                  storage=obj;
              console.info(storage)

              }

              
          }
      },
      resetField(){
         this.form.value='';
         this.form.name='';
         this.form.date="";
         this.add=false;
      }
  }
};
</script>

