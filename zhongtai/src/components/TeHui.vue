<template>
    <div id="tehui">
      <div class="tehui-name">高性能云服务器限时特惠</div>
      <div class="tehui-intro">企业级超高性能，支持高达450万PPS</div>
      <div class="tehui-link">
        <el-button icon="el-icon-view">立即查看</el-button>
        <span>低至￥56/月</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TeHui"
    }
</script>

<style scoped lang="less">
#tehui{
  width: 328px;
  height: 131px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 2px 0px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
  padding: 17px;
  box-sizing: border-box;
  .tehui-name{
    font-size: 15px;
    color: #333;
  }
  .tehui-intro{
    font-size: 12px;
    color: #7B7B7B;
    margin-top: 10px;
    margin-bottom: 25px;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
  }
  .tehui-link{
    button{
      width:84px;
      height:28px;
      padding: 0;
      background:rgba(255,255,255,1);
      border:1px solid rgba(71,140,211,1);
      font-size: 12px;
      color: #478CD3;
      margin-right: 10px;
    }
    button:hover{
      background-color: #478CD3;
      color: #fff;
      transition: all .2s linear;
    }
    span{
      font-size: 12px;
      color: #ED4C5F;
    }
  }
}
</style>
