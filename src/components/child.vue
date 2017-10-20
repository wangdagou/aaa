<template>
  <div class="li">
    <div class="child">
      <p><img :src="list.pic_v12"></p>
    </div>
    <div class="wang">
      <p class="p1">{{list.ListName}}</p>
      <p class="p2">2017-10-17 更新</p>
      <span></span>
    </div>
    <div class="yinyue">
      <ul>
        <li v-for="(item,index) in aaa">
          <span class="num">{{index+1}}</span>
          <router-link to="">
          {{item.data.songname}}<br>
          <span v-for="item1 in item.data.singer">&nbsp;{{item1.name}}&nbsp;.&nbsp;</span><span>{{item.data.albumname}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    name: 'child',
    data () {
      return {
        list:[],
        aaa:[],

      }
    },mounted () {
      var that = this;
      axios.get(`/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=4&_=1508306581587`)
        .then(function(res){
          console.log(res);
          that.list = res.data.topinfo;
          that.aaa = res.data.songlist;


        })
    }
  }
</script>
<style>
  .child p{
    width: 100%;
    height: 347px;
  }
  .child p img{
    width: 100%;
    height: 100%;
  }
  .yinyue ul{
    border-top: 1px solid #621414;
  }

  .yinyue li{
    width: 100%;
    height: 60px;
    background: #550101;
    list-style: none;
  }
  .yinyue li .num{
    float: left;
    color: #fff;
    font-size: 18px;
    width: 24px;
    height: 60px;
    display: block;
    line-height: 44px;
    text-align: center;
    margin-right: 20px;
    margin-left: 5px;
  }
  .yinyue li a{
    border-bottom:1px solid #621414;
    color: #fff;
    font-size: 18px;
    display: block;
  }
.yinyue li a span{
  color: rgba(255,255,255,.6);
  font-size: 14px;
  
}
.li{
  position: relative;
}
  .wang{
    width: 100%;
    height: 200px;
    position: absolute;
    top: 120px;
    z-index: 2;
  }
  .wang .p1{
    font-size: 24px;
    color: #fff;
    line-height: 360px;
    height: 20px;
    margin-left: 20px;
  }
  .wang .p2{
    margin-left: 20px;
    line-height:382px;
    color: #fff;
  }
  .wang span{
    width: 48px;
    height: 48px;
    display: block;
    background: url("../assets/list_sprite.png") no-repeat;
    position: absolute;
    right:15px;
    top: 145px;
  }

</style>
