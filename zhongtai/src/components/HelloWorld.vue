<template>
  <div class="hello">
    <div>
      test
      <p>haha</p>
    </div>
   {{msg}}
    <el-button type="primary" @click="$router.push({path:'/index',query:{name:123}})">primary button</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
div {
  font-size: 18px;
  p{
    font-size: 12px;
  }
}
</style>
