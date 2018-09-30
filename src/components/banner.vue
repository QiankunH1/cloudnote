<template>
    <div class="banner fll">
        <div class="banner-title">
            十三亿人都会用的云笔记
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .banner{
        width: 750px;
        height: 340px;
        background:url('/static/imgs/banner.jpg') no-repeat;
        background-size: 100% 100%;
        position: relative;
        border-radius: 6px;
        overflow: hidden;
    }
    .banner .banner-title{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 14px 20px;
        font-size: 20px;
        color: #fff;
        background: rgba(0, 0,0,0.5)
    }
</style>