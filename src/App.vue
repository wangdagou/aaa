<template>
<div class="box">

  <header>
    <span>
      <img src="./assets/logo (1).png"/>
    </span>
    <router-link class="a2" to="/sign">登录</router-link>
    <router-link class="a3" to="/register">注册</router-link>
    <a class="a1" @click='handle'>下载APP</a>
  </header>
    <nav>
      <router-link to="/" active-class="current">推荐</router-link>
      <router-link to="/Ranking" active-class="current">排行榜</router-link>
      <router-link to="Search" active-class="current">搜索</router-link>
    </nav>
  <router-view/>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    name: 'app',
    methods:{
      handle(){
        alert('要钱的，给我转钱！！！');
      }
    }
  }
</script>

<style src="./assets/index.css">

</style>
<style>
  #app{
    overflow: hidden;
    overflow-y:auto;
  }
  nav{
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: space-between;
    background: #fff;
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
  nav a.current {
    color: #31c27c;
  }
  nav a.current:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #31c27c;
  }
</style>
