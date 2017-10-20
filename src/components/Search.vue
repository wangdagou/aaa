<template>
 <div>
    <div class="xxx">
      <div id='inputBox'>
        <input @keyup='handle($event)' @keydown.enter='search($event)'/>
        <div class='cover' v-if='!isDown'>搜索歌曲、歌手、专辑</div>
        <a href="#" v-if='isDown' @click='del($event)'>取消</a>
      </div>
      <div class="bottom">
        <h3>热门搜索</h3>
        <div class="music">
          <router-link class="one" to="">中国新歌声第二季</router-link>
          <router-link to="">DJ舞曲(华语)系列5 DJ </router-link>
          <router-link to="">WHAT ARE WORDS </router-link>
          <router-link to="">中国好声音 第六季 </router-link>
          <router-link to="">非酋 薛明媛/朱贺 </router-link>
          <router-link to="">一生所爱 卢冠廷 </router-link>
        </div>
      </div>
    </div>
 </div>
</template>
<script>
  export default{
    name:'',
    data(){
      return{
        isDown:false,
        ev:null
      }
    },
    methods:{
      handle(ev){
        this.isDown = true;
        this.ev = ev;
        if(ev.target.value === ''){
          this.isDown = false;
        }
      },
      search(ev){
        this.$router.push('/searchDetail/'+ev.target.value)
      },
      hotsearch(value){
        this.$router.push('/searchDetail/'+value)
      },
      del(ev){
        this.ev.target.value = '';
        this.isDown = false;
      }
    }
  }
</script>
<style>
  .xxx #inputBox input{
    height:30px;
    border:0;
    background:transparent;
    outline:0;
    position:absolute;
    top:0;
    left:0;
    width:80%;
    box-sizing:border-box;
    margin:0 10%;
    color:#333;
    z-index:1;
  }
  .xxx #inputBox {
    padding: 15px 10px;
    height: 30px;
    background: #fff;
    width: 100%;
    box-sizing: border-box;
    position: relative;
  }
  .xxx #inputBox a{
    position:absolute;
    top:0;
    right:20px;
    color:#333;
  }
  .xxx #inputBox .cover{
    font-size:14px;
    background:transparent;
    color:#c9c9c9;
    position:absolute;
    top:5px;
    left:35px;

  }
  .xxx .bottom{
    width: 100%;
    height:180px;
    background: #fff;
    padding-top: 20px;
  }
  .xxx .bottom h3{
    font-size: 15px;
    font-weight: normal;
    color: rgba(0,0,0,.6);
    margin-bottom: 8px;
    margin-left: 20px;
  }
  .xxx .bottom .music{
    width: 100%;
    height: 126px;
    margin-left: 20px;
  }
  .xxx .bottom .music a{
    display: inline-block;
    font-size: 14px;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    color: #000;
    border: 1px solid rgba(0,0,0,.6);
    border-radius: 99px;
    word-break: keep-all;
    margin-bottom: 10px;
    margin-right: 14px;
  }
  .xxx .bottom .music .one{
    color: #fc4524;
    border-color: #fc4524;
  }
</style>
<style src="../iconfont/iconfont.css">

</style>
