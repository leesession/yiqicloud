<template>
    <div id="allMenu">
      <div :class="bordClass" >
        面板
        <span>13</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Allmenu",
      data(){
          return{
            bordClass:'bord'
          }
      },
      methods:{

      }
    }
</script>

<style scoped lang="less">
  .bord{
    position: absolute;
    top: 0;
    left: 200px;
    background-color: #ddd;
    width: 600px;
    height: 100%;
    z-index: 1000;
    transition: left .3s linear;
    span{
      color: red;
    }
  }
  .active{
    left:200px
  }
</style>
