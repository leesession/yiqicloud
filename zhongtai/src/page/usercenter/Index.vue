<template>
    <div id="index">
      <el-row class="nav">
        <el-col :span="6">
          <div class="nav-left">
            <i class="el-icon-menu"></i>
            益企云中台
          </div>
        </el-col>
        <el-col :span="10">
          <div class="nav-center">
            <!--四川中小微企业-->
          </div>
        </el-col>
        <el-col :span="8">
          <div class="nav-right">
            <el-dropdown>
              <el-badge :value="12" class="item">
                <span class="el-dropdown-link" style="position: relative">消息</span>
              </el-badge>
              <el-dropdown-menu slot="dropdown">
                <div>站内通知</div>
                <el-dropdown-item v-for="item in 5">
                  这是消息：{{item}}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>工单</span>
            <span>支持与服务</span>
            <el-dropdown trigger="click">
              <img :src="img" alt="" class="el-dropdown-link" width="50">
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>权限设置</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
      <div class="center">
        <div class="slide">
          <!--<div class="">总开关switch</div>-->

          <el-menu default-active="1-4-1" class="el-menu-vertical-demo "
                   @mouseenter.native="isCollapse=false;span=true;" @mouseleave.native="isCollapse=true;span=false;showBord=false"
                   @open="handleOpen" @close="handleClose" :collapse="isCollapse"
                   background-color="#252a2f"
                   text-color="#fff"
                   active-text-color="#ffd04b"
          >
            <allmenu v-show="showBord"></allmenu>
            <div class="menu-switch" @mouseenter='showBord=true'>
              <i class="el-icon-edit"></i>
              <span v-show="span">产品与服务</span>
            </div>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" >
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="6" >
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="7">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="main">
          <transition name="fade" mode="out-in">
            <keep-alive v-if="$route.meta.keepAlive">
              <router-view/>
            </keep-alive>
            <router-view v-else/>
          </transition>
        </div>
      </div>
    </div>
</template>

<script>
  import allmenu from '../../components/Allmenu'
  import '../../../static/css/index.less';
  import {mapState} from 'vuex'

    export default {
        name: "Index",
      computed:{
        ...mapState({
          img:'img'
        })
      },
      components:{
        allmenu
      },
      data(){
          return{
            showBord:false,
            span:false,
            isCollapse: true,
          }
      },
      methods:{
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
