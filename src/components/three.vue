<template>
  <div class="main">
    <h2>电台</h2>
    <ul>
      <li><router-link to><img src="../assets/main1.jpg" alt=""></router-link><span></span><p>一人一首招牌歌</p></li>
      <li><router-link to><img src="../assets/main2.jpg" alt=""></router-link><span></span><p>热歌</p></li>
    </ul>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    name: 'three'
  }
</script>
<style>
  .main{
    display: flex;
    flex-direction: column;
    flex: 1;

  }
  .main h2{
    font-size: 16px;
    color: #000;
    margin-top: 11px;
    margin-bottom: 11px;
    font-weight: normal;
  }
  .main ul{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .main li{
    width: 50%;
  }
  .main li img{
    width: 100%;
  }
  .main:nth-of-type(1){
    margin-left: 8px;
  }
  .main li  {
    position: relative;
    margin-right: 8px;
    margin-bottom: 10px;
  }
  .main li span{
    display: block;
    width: 24px;
    height: 24px;
    background:url("../assets/list_sprite.png") no-repeat 0px 0px;
    background-size: cover;
    position: absolute;
    right: 2px;
    bottom: 46px;
  }
  .main li p{
    width: 100%;
    height:41px;
    background: #fff;
    padding: 0 7px 5px;
    color: #000;
    font-size: 14px;
  }
</style>
