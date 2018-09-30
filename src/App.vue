<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
*{
  padding: 0;
  margin: 0;
}
body{
  background-color: #f1f1f1;
}
.fll{
  float:left;
}
.flr{
  float: right;
}
.w1170{
  width: 1170px;
  margin: 0 auto;
}
.clearfix::after{
  content: '';
  display: block;
  clear: both;
  width: 0;
  height: 0;
}
.mb30{
  margin-bottom: 30px;
}
</style>
