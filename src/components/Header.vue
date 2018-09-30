<template>
    <div class="header">
        <div class="header-content w1170 clearfix">
            <div class="header-title fll">
                <router-link to="/">
                    云笔记
                </router-link>
            </div>
            <div class="btn-wrap flr">
                <el-button @click="handleWrite">
                    写笔记
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
      methods:{
          handleWrite(){
                    this.$router.push('writenote') 
          } 
      }  
    }
</script>

<style scoped> 
    .header{
        height: 50px;
        background: #409eff;
        margin:0;
        padding:0;
       
    }
  
    .header-title a{
        font-size: 30px;
        color: #fff;
        height: 50px;
        line-height: 50px;
        text-decoration: none;
    }
    .btn-wrap{
        margin-top: 5px;
    }
    
</style>