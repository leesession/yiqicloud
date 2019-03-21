<template>
    <div id="center">
      <div class="title">
        <span>个人中心</span>
        <span>{{label}}</span>
      </div>
      <el-tabs tab-position="left" @tab-click="handleClick">
        <el-tab-pane label="基本资料">基本资料</el-tab-pane>
        <el-tab-pane label="安全设置">安全设置</el-tab-pane>
        <el-tab-pane label="实名认证">实名认证</el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
  import '../../../static/css/center.less'
    export default {
        name: "Center",
      data() {
        return {
          tabPosition: 'top',
          label:'基本资料'
        };
      },
      methods: {
        handleClick(tab, event) {
          this.label= event.target.innerHTML
        }
      }
    }
</script>

<style scoped>

</style>
