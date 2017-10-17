<template>
  <div>
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
    name: 'footer_com'
  }
</script>
<style>
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
