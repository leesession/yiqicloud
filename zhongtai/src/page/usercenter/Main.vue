<template>
  <div id="main">
    <div class="main-center">
      <div class="left">
        <!--顶部两个框-->
        <div class="message1">
          <div class="my">
            <div class="title">
              <span>我的资料</span>
              <i class="el-icon-edit"></i>
            </div>
            <!--详情-->
            <div class="detail">
              <img :src="img" alt="" >
              <div class="intro">
                <div class="top">早安，生活离奇，祝你拥有美好的一天。</div>
                <div class="middle">交互设计师 | 蚂蚁金服 | 某某某事业群-某某平台部-某某技术部-UED</div>
                <div class="sign">
                  <div class="sign-left">标签：</div>
                  <div class="sign-right">
                    <span v-for="item in signArray">{{item}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="things">
            <div class="title">待办事项</div>
            <div class="process">
              <!--width="100"-->
              <el-progress type="circle" :percentage="item.percent" status="text" v-for="item in percents" width="118">
                <div>
                  <div class="percent">{{item.percent}}</div>
                  <div class="name">{{item.name}}</div>
                </div>
              </el-progress>
            </div>
          </div>
        </div>
        <!--中部的框1-->
        <div class="message2">
          <img src="../../../static/img/mid_img.jpg" alt="" width="100%" height="100%">
        </div>
        <!--中部的框2-->
        <div class="message3">
          <div class="title">最近打开的应用</div>
          <div class="last-views">
            <span class="menu-item" v-for="item in menuArray">
              <i :class="'slide-icon '+item.class"></i>
              <span>{{item.name}}</span>
            </span>
          </div>
        </div>
        <!--添加自定义栏-->
        <div class="define-module">
          <img src="../../../static/img/add.png" alt=""> <span>添加自定义栏位</span>
        </div>
      </div>
      <!--右侧定宽容器-->
      <div class="right">
        <el-tabs v-model="activeName" @tab-click="handleClick" >
            <el-tab-pane label="全部公告" name="first">
              <div class="tab-content">
                <!--通知-->
                <div class="notice">
                  <ul>
                    <li v-for="item in 3" class="notice-list">
                      【其他】3月21日音视频通信 RTC商业化通知
                    </li>
                  </ul>
                  <router-link to="/">更多</router-link>
                </div>
                <!--优惠咨询-->
                <div class="cheap-message">
                  <div class="cheap-name">
                    <span>优惠资讯</span>
                    <span>查看更多</span>
                  </div>
                  <img src="../../../static/img/advantage.png" alt="" class="cheap-img">
                  <!--特惠card-->
                  <te-hui v-for="item in 2"></te-hui>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="升级" name="second">升级</el-tab-pane>
            <el-tab-pane label="其他" name="third">其他</el-tab-pane>
          </el-tabs>
        <!--新产品快报-->
        <div class="quick-message">
          <div class="title">新产品快报</div>
          <div class="quick-contain">
            <ul>
              <li v-for="item in 4">
                [新功能] 号码隐私保护控制台新增号码批量释放功能
              </li>
            </ul>
            <router-link to="/">更多</router-link>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import '../../../static/css/main.less';
  import TeHui from '../../components/TeHui'
  import {mapState} from 'vuex'

    export default {
        name: "Main",
      computed:{
        ...mapState({
          img:'img'
        })
      },
      components:{
        'te-hui':TeHui
      },
      data(){
          return{
            activeName:'first',
            signArray:['UED设计','大型项目经验','Sketch','大型项目经验','Sketch',],
            menuArray:[
              {class:'icon-kucun',name:'设备上云'},{class:'icon-invite',name:'招投标公示'},{class:'icon-copy',name:'共享市场'},{class:'icon-copy',name:'信用曝光'}
            ],
            percents:[
              {percent:10,name:'工单1'},{percent:40,name:'工单2'},{percent:50,name:'工单3'}
            ]
          }
      },
      created(){},
      mounted(){

      },
      methods:{
        handleClick(){

        },
      }
    }
</script>

<style scoped>

</style>
