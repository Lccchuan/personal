<template>
  <div>
    
<!-- Form -->
<el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

<el-dialog title="登录" :visible.sync="dialogFormVisible" width="30%" :close-on-press-escape="closeOnPressEscape" center custom-class="login" > 
  <el-form :model="ruleForm2"  status-icon :rules="rules2" ref="ruleForm2" hide-required-asterisk >
    <el-form-item label="活动名称" :label-width="formLabelWidth" prop="name">
      <el-input v-model="ruleForm2.name" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="密码" prop="pass" :label-width="formLabelWidth">
    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass" :label-width="formLabelWidth">
    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="resetField('ruleForm2')">取 消</el-button>
    <el-button type="primary" @click="submitForm('ruleForm2')">确 定</el-button>
  </div>
</el-dialog>
  </div>
</template>

<script>
import axios from 'axios';
   export default {
     name:"login",
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        dialogFormVisible: false,
        closeOnPressEscape:false,
        ruleForm2: {
           pass: '',
          checkPass: '',
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        rules2: {
          name:[
            {required:true,message: '请输入用户名',trigger:'blur'}
          ],
          pass: [
            { required:true,validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required:true,validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(data){
        this.$refs[data].validate((valid) => {
          
          if (valid) {
              axios.get("../../login.json")
          .then((res)=>{
            console.info(res.data);
            if(this.ruleForm2.name==res.data.name&&this.ruleForm2.pass==res.data.password){
                console.info('登陆成功')
                this.success()
                this.cookieChange(this.ruleForm2.name)
                this.resetField(data)
                this.$router.push("/");
            }
            
          })
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      },
      cookieChange(name){
          let date=new Date()
          date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
          let expires = "expires=" + date.toUTCString();
          document.cookie =`name=${name};${expires};path=/`;
      },
      success() {
        this.$message({
          showClose: true,
          message: '恭喜你，登陆成功',
          type: 'success'
        });
      },
      resetField(mess){
         this.$refs[mess].resetFields();
         this.dialogFormVisible = false;
      }
    }
  };
</script>

<style lang="less">
  .el-dialog__header{
    height: 100px;
    line-height: 100px;
    span{
      font-size: 30px;
    font-weight: bold;
    letter-spacing:4px;
    }
  }
  .el-dialog__body{
    height: 240px;
    .el-form{
      height: 240px;
      .el-form-item{
        height: 60px;
        .el-form-item__label{
          height: 40px;
          font-size: 20px;
          line-height: 40px;
        }
        .el-input{
          height: 50px;
          input{
            width: 87%
          }
        }
      }
    }
  }
</style>
