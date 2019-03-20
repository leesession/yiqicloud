<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view/>
      </keep-alive>
      <router-view v-else/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /*body ul.el-dropdown-menu{*/
    /*margin-top: 0;*/
  /*}*/
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: "Microsoft YaHei";
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to  {
    opacity: 0;
  }

</style>
