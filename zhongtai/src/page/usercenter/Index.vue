<template>
    <div id="index">
      <!--顶部-->
      <div class="nav">
        <!--顶部icon-->
        <div class="nav-left" @click="menuShow">
          <i class="icon-menu slide-icon"></i>
        </div>
        <!--顶部名字-->
        <div class="nav-center">
          管理控制台
        </div>
        <!--顶部右侧-->
        <div class="nav-right">
          <el-input
            placeholder="请输入搜索内容"
            prefix-icon="el-icon-search"
            v-model="search">
          </el-input>
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
          <span class="shoppingcart" @click="$router.push('/index/shoppingcart')">
            <i class="icon-shoppingcart"></i>
          </span>
          <el-dropdown>
            <span class="el-dropdown-link" style="position: relative;border-left: 1px solid #E6E8E9;">简体中文</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item >
                简体中文
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-dropdown  trigger="click">
            <img :src="img" alt="" class="el-dropdown-link" width="50">
            <el-dropdown-menu slot="dropdown">
              <div class="user-list">
                <div class="head">
                  <img :src="img" alt="">
                  <div class="user-detail">
                    <div>生活离奇</div>
                    <div>zhouchiqin@yiqicloud.com.cn</div>
                  </div>
                </div>
                <ul>
                  <li v-for="(item,index) in user_list" :key="index">
                    <i :class="'iconfont '+item.src"></i> <span>{{item.name}}</span>
                  </li>
                </ul>
                <div class="logout">
                  <el-button type="primary">退出登录</el-button>
                </div>
              </div>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <!--中间-->
      <div class="center">
        <!--左侧边栏-->
        <div class="slide">
          <!--:default-active="activeIndex"-->
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo "
                   @open="handleOpen" @close="handleClose" :collapse="isCollapse"
                   @mouseenter.native="isCollapse=false" @mouseleave.native="showBord?isCollapse:isCollapse=true"
                   text-color="#fff"
                   active-text-color="#fff"
          >
            <allmenu v-show="showBord"  :menuArray="menuArray" @menuChange="menuChange" ref="AllMenu" @close="close"></allmenu>
            <!--<div class="menu-switch" @mouseenter='showBord=true'>-->
              <!--<i class="el-icon-edit"></i>-->
              <!--<span v-show="span">产品与服务</span>-->
            <!--</div>-->
            <el-menu-item :index="index1+1+''" v-for="(item,index1) in slide_nav">
              <i :class="'iconfont '+item.src"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
          </el-menu>
        </div>
        <!--中心栏-->
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
  import {mapState , mapMutations} from 'vuex'

    export default {
        name: "Index",
      computed:{
        ...mapState({
          img:'img',
          activeIndex:'activeIndex',
        })
      },
      components:{
        allmenu
      },
      data(){
          return{

            user_list:[
              {src:'yiqi-iconicon-test',name:'余额'},{src:'yiqi-iconintegral',name:'积分'},
              {src:'yiqi-iconxiaofeijilu',name:'消费记录'},{src:'yiqi-iconxufeijigoumai',name:'续费'},
              {src:'yiqi-iconxiaoxi',name:'未读消息'},{src:'yiqi-icondingdan2',name:'订单'},
              {src:'yiqi-iconshezhi',name:'设置'}
            ],
            slide_nav:[
              {src:'yiqi-iconyun',name:'云'},{src:'yiqi-iconyigoutong',name:'沟通'},{src:'yiqi-iconcunchupitchon',name:'存储'},
            ],
            showBord:false,
            span:false,
            isCollapse: true,
            search:'',
            menuArray:[
              {
                title:'益制造',
                itemArray:[
                  {name:'政策检索',isSelected:true},{name:'数据分析',isSelected:false},{name:'信用曝光',isSelected:true}
                ]
              },
              {
                title:'益企云',
                itemArray:[
                 {name:'数据分析',isSelected:false},{name:'信用曝光',isSelected:false}
                ]
              },
              {
                title:'益市场',
                itemArray:[
                  {name:'政策检索',isSelected:false},{name:'数据分析',isSelected:false},{name:'信用曝光',isSelected:true},{name:'信用曝光',isSelected:true}
                ]
              }
            ]
          }
      },
      methods:{
          ...mapMutations({

          }),
          //主menu切换
        close(){
          this.showBord=false;
          this.isCollapse=true
        },
        menuShow(){
          this.isCollapse=! this.isCollapse ;
          this.showBord= !this.isCollapse;
          // this.$refs.AllMenu.check()
        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        menuChange(mainMenu,detailMenu){
          console.log(mainMenu,detailMenu)
        },
        changeActiveIndex(){
          this.$store.commit('changeActive','3')
        }
      },
      beforeRouteUpdate(to, from, next){
          console.log(to.path,this.activeIndex)
        this.changeActiveIndex()
        next(vm => {
          // if(to.path.indexOf('/index/')!==-1){
          //   vm.activeIndex='2'
          // }
        })
      }
    }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
