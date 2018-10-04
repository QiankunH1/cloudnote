<template>
    <div class="user-box flr ">
        <div class="login-box" v-if="!userInfo.username">
             <div class="input-wrap mb30"> 
                <input type="text" class="input" placeholder="邮箱" v-model="formData.email">
            </div>
            <div class="input-warp mb30">
                <input type="text" class="input" placeholder="密码" v-model="formData.password" @keyup.enter='handleLogin'>
            </div>
            <div class="btn-wrap mb30">
                <el-button type="primary" @click="handleLogin">
                    登录
                </el-button>
            </div>
            <div class="btn-wrap mb30">
                <el-button @click="toRegister">
                注册
                </el-button>
            </div>
        </div>
        <div class="user-msg-box" v-else>
            <div class="img-wrap">
                <img :src="userInfo.avatar" alt="">
            </div>
            <div class="username">
                用户:{{userInfo.username}}
               
            </div>
            <div class="user-email">
                邮箱：{{userInfo.email}}
              
            </div>
             <div class="logout btn-wrap mb30">
                <el-button type="primary" >
                    退出登录
                </el-button>
            </div>
        </div>
       
    </div>
</template>

<script>
 
    import {mapState}  from 'vuex'


    export default {
        data(){
            return{
                formData:{
                    email:'',
                    password:''
                }
            }
        },
        methods:{
            toRegister(){
                this.$router.push('/register')
            },
            handleLogin(){
                this.$axios.post('/login',this.formData).then(res=>{
                    console.log(res)
                    if(res.code==200){
                        this.$message.success(res.msg)
                    }
                this.$store.commit('CHANGE_userInfo',res.userData )   
                })  
            }
        },
        computed:{
            ...mapState(['userInfo'])
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
    .user-msg-box{
        font-size: 14px;
        font-weight: 500;
        color: #555;
      
        line-height: 28px;
    }
    .img-wrap{
        width: 70px;
        height: 70px;
        margin: 0 auto;
    }
    .img-wrap img{
        width: 100%;
        height: 100%;
    }
    .logout{
        margin-top: 50px;
    }
</style>