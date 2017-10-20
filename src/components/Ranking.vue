<template>
  <div class="box">
    <ul>
      <li v-for="item in list.slice(0,11)">
        <div class="ccc">
       <router-link class="kkk" to="/child"> <img :src="item.picUrl"></router-link>
        </div>
        <div class="aaa">
        <h3>{{item.topTitle}}</h3>
        <p v-for="tt in item.songList">
          <span>{{tt.songname}}</span>
          -{{tt.singername}}
        </p>
        </div>
      </li>
    </ul>
  </div>

</template>
<script>
  import axios from 'axios';
  export default {
    name: 'Ranking',
    data () {
      return {
        list:[],
        xzq:[],
        xzq1:[],
        xzq2:[],

      }
    },mounted () {
      var that = this;
      axios.get(`/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1508198796120`)
        .then(function(res){
          console.log(res);
          that.list = res.data.data.topList;
          that.xzq = res.data.data.topList;
          that.xzq1 = res.data.data.topList[0].songList;

        })
    }
  }
</script>

<style src="../assets/index.css">

</style>
<style>
 .box li .kkk{
   width: 100px;
   height: 100px;
   display: block;
 }
 .box li .kkk img{
   width: 100%;
   height: 100%;
 }
 .box li {
   width: 100%;
   height: 100px;
   background: #fff;
   margin: 10px 0;
 }
 .box .ccc{
   float: left;
   width: 30%;
   height: 100px;
 }
 .box .aaa{
   float: left;
   width: 70%;
   height: 100px;
 }
 .box .aaa p{
   width: 70%;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
 }
 .box .aaa p{
   font-size: 14px;
   color: rgba(0,0,0,.5);
 }
 .box .aaa p span{
   color: #000;
   margin-left: 8px;
   margin-right: 5px;
 }
 .box li .aaa h3{
   font-size: 16px;
   color: #000;
   font-weight: normal;
   margin-bottom: 5px;
 }

</style>
