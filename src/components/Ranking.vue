<template>
  <div class="box">
    <header>
    <span>
      <img src="../assets/logo (1).png"/>
    </span>
      <a href="#">下载APP</a>
    </header>
    <nav>
      <router-link to="/App">推荐</router-link>
      <router-link to="/Ranking">排行榜</router-link>
      <router-link to="">搜索</router-link>
    </nav>
  </div>
</template>
<script>

</script>

<style src="../assets/index.css">

</style>
<style>
  nav{
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: space-between;
  }

  nav a{
    position: relative;
    display: block;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    text-align: center;
    font-size: 16px;
    width: 33%;
  }
</style>
