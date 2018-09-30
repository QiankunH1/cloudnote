<template>
    <div class="index w1170">
        <div class="banner-warp w1170 clearfix">
            <banner></banner>
            <userbox></userbox>
        </div>
        <router-link to="register" class="link">
        <div class="article-wrap">
          <div class="article-item">
              <div class="article-msg clearfix">
                  <div class="avatar fll">
                      <img src="http://pbl.yaojunrong.com/avatar1.jpg" alt="">
                  </div>
                  <div class="author-msg fll">
                      <div class="row1">
                            <span class="author-name">
                                莫言
                            </span>
                            <span class="divide">
                                |
                            </span>
                            <span class="article-title">
                                丰乳肥臀
                            </span>
                      </div>

                     <div class="row2">
                         <span class="strong">
                             浏览：998
                         </span>
                         <span class="strong">
                             回复：2
                         </span>
                         <span class="strong">
                             分类：知性文章
                         </span>
                     </div>
                  </div>  
              </div>
              
              <div class="article-content">
                讲述母亲的书籍
              </div>
          </div>
      </div>
      </router-link>
    </div>
</template>

<script>
    import banner from '@/components/banner'
    import userbox from '@/components/userbox'
    export default {
        components:{
            banner,
            userbox,
        }
    }
</script>

<style scoped>
    .index{
        margin-top: 50px;
    }
    .link{
         text-decoration: none;
        display: block;
        color: #333;
    }
    .article-wrap{
        margin-top: 30px;
        width: 750px;
        background-color: #fff;
        border-radius: 6px;
        overflow: hidden;
    }
    .article-item{
        padding: 24px;
        background-color: #fff;
    }
    .article-item .avatar{
         width: 70px;
         height: 70px;   
    }
    .article-item .avatar img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .author-msg{
        margin-left: 16px;
    }
    .row1{
        line-height: 24px;
    }
    .row2{
        background-color: #bbb;
        color: #555;
        padding: 6px;
        border-radius: 4px;
        width: 604px;



    }
    .author-msg .author-name{
        color: #409eff;
        font-size: 18px;
        font-weight: 700;
    }
</style>