<template>
  <div id="main">
    <div class="main-center">
      <div class="left">
        <!--顶部两个框-->
        <div class="message1">
          <div>Box1</div>
          <div>Box2</div>
        </div>
        <!--中部的框-->
        <div class="message2">
          Box3
          <el-button @click="$router.push({path:'/index/center'})" type="success">用户中心</el-button>
        </div>
      </div>
      <div class="right">
        <div>
          <el-tabs type="border-card" class="advantage1">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import '../../../static/css/main.less';
    export default {
        name: "Main"
    }
</script>

<style scoped>

</style>
