<template>
    <div class="register">
       <div class="register-title">
           新用户注册
       </div>
       <div>
           <div class="input-wrap mt30">
               <input type="text" class="input" placeholder="用户名">
           </div>
           <div class="input-wrap mt30">
               <input type="text" class="input" placeholder="邮箱">
           </div>
           <div class="input-wrap mt30">
               <input type="text" class="input" placeholder="密码">
           </div>
           <div class="input-wrap mt30">
               <el-button type='primary'>
                   注册
               </el-button>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
       
    }
</script>

<style scoped>
    .register{
        width: 700px;
        margin: 0 auto;
        padding: 30px 150px 60px;
        box-sizing: border-box;
        height: 500px;
         font-size: 0;
         text-align: center;
         background-color: #fff;
        -webkit-text-size-adjust:none;
    }
    .register-title{
        font-size: 20px;
    }
    .input-wrap{
        width: 100%;
    }
    .input-wrap .input{
        width: 100%;
        padding: 13px 18px;
        box-sizing: border-box;
        color:#333;
        font-size: 14px;
        outline: none;
        border:1px solid #f1f1f1;
        border-radius: 4px
    }
    .mt30{
        margin-top: 30px;
    }
    .el-button{
        width: 100%;
    }
</style>