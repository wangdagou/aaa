<template>
  <div class="swipter">
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="../assets/sw.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/swipe1.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/swipe3.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/swipe4.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/swipe5.jpg" alt=""></mt-swipe-item>
    </mt-swipe>

  </div>
</template>

<script>

  export default {
    name: 'swipter'
  }
</script>
<style>
  .swipter{
    width: 100%;
    height: 135px;
  }

  .swipter img{
    width: 100%;
    height: 100%;
  }
</style>
