<template>
  <div class="reg">
    <form>
      <div>
        电话&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input v-model="username" type="text" placeholder="请输入电话号"><br></div>
        <div>
          密码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input v-model="password" type="password" placeholder="请输入6-20位号码字符"><br></div>
        <div>确认密码<input type="password" placeholder="请输入6-20位号码字符"><br></div>
     <div> <button @click="reg()">注册</button></div>
    </form>
    <div id="bg">
    </div>
  </div>
</template>
<script>
  import axios from "axios"
  export default{
    name:"register",
    data:function(){
      return{
        username:"",
        password:""
      }
    },
    methods:{

      reg:function(){
        var that = this;
        axios.post("/api/register","username="+this.username+"&password="+this.password)
          .then(function(res){
            if(res.data){
                that.$router.push("/sign")
            }else {
              alert("用户名存在")
            }
          }).catch(function(error){
          console.log("xxx")
        })
      }
    }
  }
</script>
<style>

.reg{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 44px;
  z-index: 2;
  background:#31c27c;
  background: url("../assets/timg.jpg") center no-repeat;
  background-size: cover;
}
.reg form{
  margin-top: 40px;
}
.reg div{
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #fff;
}
.reg div input{
  border: none;
  margin-left: 10px;
  height: 30px;
  background:#31c27c;
  opacity: 0.7;

}
.reg div button{
  width: 100px;
  height: 30px;
  border: none;
  border: 1px solid #2b542c;
  background: #000000;
  color: #fff;
}
</style>
