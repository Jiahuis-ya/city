<template>
    <div class="city-header">
      <span class="iconfont iconxiangzuo"></span>
      <span class="test">城市选择</span>
    </div>
  <!-- <div class="header">
    <span class="iconfont iconxiangzuo"></span>
    城市选择
  </div> -->
</template>

<script>
export default {
  name: 'List'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '../../../assets/styles/variables.styl';

  .city-header{
    position: relative;
    width: 100%;
    height: $headerHeight;
    background-color: red;
    line-height: $headerHeight;
    font-size: .32rem;
    color: #fff;
  }

  .city-header .iconfont{
    position: absolute;
    left: .2rem;
  }

  .city-header .test{
    position absolute;
    left: 45%;
    text-align: center;
  }

</style>
