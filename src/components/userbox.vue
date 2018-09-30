<template>
    <div class="user-box flr ">
        <div class="input-wrap mb30"> 
             <input type="text" class="input" placeholder="邮箱" v-model="formData.username">
        </div>
        <div class="input-warp mb30">
             <input type="text" class="input" placeholder="密码" v-model="formData.password">
        </div>
        <div class="btn-wrap mb30">
            <el-button type="primary">
                登录
            </el-button>
        </div>
        <div class="btn-wrap mb30">
            <el-button @click="toRegister">
               注册
            </el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                formData:{
                    username:'',
                    password:''
                }
            }
        },
        methods:{
            toRegister(){
                this.$router.push('/register')
            }
        }
    }
</script>

<style scoped>
    .user-box{
        width: 360px;
        height: 340px;
        padding:50px 35px 20px 35px;
        box-sizing: border-box;
        background-color: #fff;
        /* border: 1px solid #000;  */
        font-size: 0;
        -webkit-text-size-adjust:none;
    }
    
      .btn-wrap .el-button{
              width: 100%;
        }
      
    
    .input{
        width: 100%;
        padding: 13px 18px;
        box-sizing: border-box;
        color:#333;
        font-size: 14px;
        outline: none;
        border:1px solid #f1f1f1;
        border-radius: 4px
    }
</style>