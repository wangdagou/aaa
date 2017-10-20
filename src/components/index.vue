<template>
  <div>
  <div class="swipter">
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="../assets/sw.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/swipe1.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/swipe3.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/swipe4.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/swipe5.jpg" alt=""></mt-swipe-item>
    </mt-swipe>

  </div>
  <div class="main">
    <h2>电台</h2>
    <ul>
      <li><router-link to><img src="../assets/main1.jpg" alt=""></router-link><span></span><p>一人一首招牌歌</p></li>
      <li><router-link to><img src="../assets/main2.jpg" alt=""></router-link><span></span><p>热歌</p></li>
    </ul>
  </div>
  <footer>
    <h3>热门歌单</h3>
    <a href="#">去客户端发现更多好音乐</a>
    <p class="p1">查看电脑版网页</p>
    <span></span>
    <p class="p2">Copyright © 1998 -  Tencent. All Rights Reserved.</p>
  </footer>
</div>
</template>
<script>
  export default {
    name: 'sectiona'
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
  .swipter{
    width: 100%;
    height: 135px;
  }

  .swipter img{
    width: 100%;
    height: 100%;
  }
  footer{
    width: 100%;
    height: 191px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  footer h3{
    text-align: left;
    font-size: 16px;
    color: #000;
    margin-bottom: 11px;
    font-weight: normal;
  }
  footer a{

    display: inline-block;
    padding: 0 10px;
    font-size: 14px;
    color: rgba(0,0,0,.6);
  }
  footer span{
    display: block;
    width: 82px;
    height: 24px;
    margin: 0 auto 10px;
    background: url("../assets/logo_footer.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  footer .p1{
    padding: 0 15px;
    font-size: 14px;

    line-height: 14px;
    color: #000;
    margin-bottom:30px ;
  }
  footer .p2{
    font-size: 10px;
    text-align: center;
    color: rgba(0,0,0,.5);
  }
</style>
