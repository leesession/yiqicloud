<template>
  <div id="center">
    <div class="title">
      <span>账号管理</span>
      <div class="label">
        <span><i></i>{{label}}</span>
      </div>
    </div>
    <el-tabs tab-position="left" @tab-click="handleClick" v-model="active">
      <el-tab-pane label="基本资料" name="1">
        <div class="user-detail">
          <el-form label-position="right" label-width="120px" :model="formLabelAlign"  ref="formLabelAlign" >
            <div class="title">基本信息</div>
            <el-form-item label="账号：">
              <el-input v-model="formLabelAlign.name" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="昵称：">
              <el-input v-model="formLabelAlign.region"  placeholder="请输入昵称"></el-input>
            </el-form-item>
            <el-form-item label="电话：">
              <el-input v-model="formLabelAlign.type"  placeholder="请输入电话"></el-input>
            </el-form-item>
            <div class="title">业务信息</div>
            <el-form-item label="主要行业应用：" class="application">
              <el-select v-model="formLabelAlign.region" placeholder="请选择行业应用" >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="主营业务：">
              <el-input v-model="formLabelAlign.region"  placeholder="请输入主营业务"></el-input>
            </el-form-item>
            <el-form-item label="网址：">
              <el-input v-model="formLabelAlign.type"  placeholder="请输入网址"></el-input>
            </el-form-item>
            <div class="title">联系方式</div>
            <el-form-item label="国家/地区：">
              <el-input v-model="formLabelAlign.country" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="所在地区：" class="selectAddress">
              <el-select v-model="formLabelAlign.province" multiple placeholder="请选择所在地区">
                <el-option
                  v-for="item in provinceArray"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>

              <el-select
                v-model="formLabelAlign.city"
                multiple
                collapse-tags
                style="margin-left: 6px;"
                placeholder="请选择">
                <el-option
                  v-for="item in cityArray"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="街道地址：">
              <el-input v-model="formLabelAlign.type" placeholder="请输入街道地址"></el-input>
            </el-form-item>
            <el-form-item label="联系电话：">
              <el-input v-model="formLabelAlign.type" placeholder="请输入联系电话"></el-input>
            </el-form-item>
            <el-form-item label="传真：">
              <el-input v-model="formLabelAlign.type" placeholder="请输入传真"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('formLabelAlign')" size="large">保存</el-button>
            </el-form-item>
          </el-form>
        </div>

      </el-tab-pane>
      <el-tab-pane label="安全设置" name="2">
        <div class="safety">
          <!--头部-->
          <div class="head-detail">
            <div class="head-left">
              <img :src="img" alt="">
              <div>修改头像</div>
            </div>
            <div class="head-right">
              <div>
                登录账号：shenghuoliqi@yiqicloud.com <span>(您还未完成实名认证)</span>
              </div>
              <div>
                账号ID：1010853131832187
              </div>
              <div>
                注册时间 ： 2019年3月21日 上午9:30:00
              </div>
            </div>
          </div>
          <!--列表-->
          <ul>
            <li class="safety-list">
              <div class="left">您当前的账号安全程度：</div>
              <div class="middle">
                <el-progress  :stroke-width="12" :percentage="60" color="#478CD3" :show-text="false" ></el-progress>
                <div>您当前的账号安全程度：
                  <!--这里也有状态-->
                  <span class="green">高</span>
                </div>
              </div>
              <div class="right">
                <!--这里看状态-->
                <i class="el-icon-success green" ></i> <span class="check-status green">已设置</span>
                <span class="to-shezhi">设置</span>
              </div>
            </li>
            <li v-for="(item,index) in statusArray" :key="index" class="safety-list">
              <div class="left">{{item.left}}</div>
              <div class="middle">{{item.middle}}</div>
              <div class="right">
                <!--这里看状态-->
                <i class="el-icon-success green" v-if="item.right"></i> <i class="el-icon-warning yellow" v-else></i>
                <span class="check-status green" v-if="item.right">已设置</span> <span class="check-status yellow" v-else>未设置</span>
                <span class="to-shezhi">设置</span>
              </div>
            </li>
            <li class="safety-list">
              <div class="left">注销账号：</div>
              <div class="middle">如果您不再使用此账号，可以将其注销。账号成功注销后，其下所有服务、数据及隐私信息将会被删除并将无法恢复。</div>
              <div class="right red">
                注销账号
              </div>
            </li>
          </ul>
          <!--注销-->
          <div></div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="实名认证" name="3">
        <div class="validate">
          <div class="title">请选择认证类型</div>
          <div class="nav-bar">
              <span class="" @click.stop="tabSelect">
                <i class="el-icon-goods"></i>
                个人认证
              </span>
              <span class="active" @click.stop="tabSelect">
                <i class="el-icon-tickets"></i>
                企业/政府（含企业、政府、事业单位、团体、组织）
              </span>
          </div>
          <div class="item">
            <div class="title">个人实名认证</div>
            <el-form ref="personForm" :model="peopleUpload" label-width="140px" class="item-bar">

              <el-form-item label="姓名：">
                <el-input v-model="companyUpload.companyName" placeholder="请输入姓名"></el-input>
              </el-form-item>
              <el-form-item label="身份证号：">
                <el-input v-model="companyUpload.companyName" placeholder="请输入身份证号"></el-input>
              </el-form-item>
              <el-form-item label="上传身份证照片：">
                <div class="contain1">
                  <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="peopleUpload.imgUrl1" :src="peopleUpload.imgUrl1" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                  <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="peopleUpload.imgUrl2" :src="peopleUpload.imgUrl2" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </div>
                <div class="contain1">
                  <span>正面（国徽）</span>
                  <span>反面（人脸）</span>
                </div>
              </el-form-item>
              <el-form-item label="">
                <el-button type="primary">确定</el-button>
              </el-form-item>

            </el-form>
          </div>
          <div class="item active">
            <div class="title">企业实名认证</div>
            <el-form ref="companyForm" :model="companyUpload" label-width="140px" class="item-bar">

              <el-form-item label="企业类型：">
                <el-radio-group v-model="companyUpload.type">
                  <el-radio label="法人企业"></el-radio>
                  <el-radio label="非法人企业"></el-radio>
                  <el-radio label="个体工商户"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="公司全称：">
                <el-input v-model="companyUpload.companyName" placeholder="请输入公司全称"></el-input>
              </el-form-item>
              <el-form-item label="上传营业执照片：">
                <div class="contain1">
                  <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="companyUpload.imgUrl1" :src="companyUpload.imgUrl1" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </div>
              </el-form-item>
              <el-form-item label="法人姓名：">
                <el-input v-model="companyUpload.username" placeholder="请输入法人姓名"></el-input>
              </el-form-item>
              <el-form-item label="上传法人身份证照片：">
                <div class="contain1">
                  <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="companyUpload.imgUrl2" :src="companyUpload.imgUrl2" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                  <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="companyUpload.imgUrl3" :src="companyUpload.imgUrl4" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </div>
                <div class="contain1">
                  <span>正面（国徽）</span>
                  <span>反面（人脸）</span>
                </div>
              </el-form-item>
              <el-form-item label="企业所在地区：">
                <el-select v-model="companyUpload.address.province">
                  <el-option label="四川省" value=""></el-option>
                </el-select>
                <el-select v-model="companyUpload.address.city">
                  <el-option label="成都市" value=""></el-option>
                </el-select>
                <el-select v-model="companyUpload.address.zone">
                  <el-option label="大邑县" value=""></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="企业详细地址：">
                <el-input v-model="companyUpload.detailAddress" placeholder="请输入企业详细地址"></el-input>
              </el-form-item>
              <el-form-item label="企业联系方式：">
                <el-input v-model="companyUpload.phone" placeholder="请输入企业联系方式"></el-input>
              </el-form-item>
              <el-form-item label="开户银行所在城市：">
                <el-select v-model="companyUpload.bankAddress.province">
                  <el-option label="四川省" value=""></el-option>
                </el-select>
                <el-select v-model="companyUpload.bankAddress.city">
                  <el-option label="成都市" value=""></el-option>
                </el-select>
                <el-select v-model="companyUpload.bankAddress.zone">
                  <el-option label="大邑县" value=""></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="开户银行支行名称：">
                <el-input v-model="companyUpload.bankName" placeholder="请输入开户银行支行名称"></el-input>
              </el-form-item>
              <el-form-item label="企业对公账户：">
                <el-input v-model="companyUpload.bankAccount" placeholder="请输入企业对公账户"></el-input>
              </el-form-item>
              <el-form-item label="">
                <el-button type="primary">确定</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import {mapState , mapMutations} from 'vuex'

  import '../../../static/css/center.less'
  export default {
    name: "Center",
    computed:{
      ...mapState(['img'])
    },
    data() {
      return {

        companyUpload:{
          type:'',
          companyName:'',
          imgUrl1:'',
          username:'',
          imgUrl2:'',
          imgUrl3:'',
          address:{//企业地址
            province:'',
            city:'',
            zone:''
          },
          detailAddress:'',//企业详细地址
          phone:'',
          bankAddress:{//开户银行所在地址
            province:'',
            city:'',
            zone:''
          },
          bankName:'',
          bankAccount:''
        },
        peopleUpload:{
          username:'',
          cardId:'',
          imgUrl1:'',
          imgUrl2:''
        },
        statusArray:[
          {
            left:'登录密码',
            middle:'安全性高的密码可以使帐号更安全。建议您定期更换密码，设置一个包含字母，符号或数字中至少两项且长度超过6位的密码。 ',
            right:true
          },
          {
            left:'手机绑定',
            middle:'您已绑定了手机183****7827【您的手机号可以直接用于、找回密码等】 ',
            right:true
          },
          {
            left:'登录密码',
            middle:'建议您设置三个容易记住，且不容易被他人获取的问题及答案，更有效保障您的密码安全。 ',
            right:false
          },
          {
            left:'登录密码',
            middle:'开启二次效验，您可以再登录时通它来进行二次效验 ',
            right:false
          },
          {
            left:'登录密码',
            middle:'在控制台关键操作（如：释放、修改密码等）时，通过设置保护强度和验证方式再次确定您的身份，进一步提高账号安全性，有效保护您安全使用云产品 ',
            right:true
          }

        ],
        active:'1',
        tabPosition: 'top',
        label:'基本资料',
        provinceArray:[],
        cityArray:[],
        formLabelAlign: {
          province:'',
          city:'',
          name: '',
          country:'中国',
          region: '',
          type: ''
        }
      };
    },
    mounted(){
      this.active = this.$route.query.index
    },
    methods: {
      tabSelect(){
        let spans = document.querySelectorAll('.validate .nav-bar span')
        let items = document.querySelectorAll('.validate .item')
        spans.forEach(item=>{
          item.className === 'active' ? item.className='': item.className = 'active'
        });
        items.forEach(item=>{
          item.className.indexOf('active') !== -1 ? item.className='item': item.className = 'item active'
        })
      },
      handleClick(tab, event) {
        this.label= event.target.innerHTML
      },
      submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleAvatarSuccess(res, file) {
        this.peopleUpload.imgUrl1 = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style scoped lang="less">
  .contain1{
    display: flex;
    >div+div{
      margin-left: 20px;
    }
    >span{
      display: inline-block;
      width: 102px;
      text-align: center;
      font-size: 12px;
    }
    >span+span{
      margin-left: 20px;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 100px;
      height: 100px;
      line-height: 100px;
      text-align: center;
    }
    .avatar {
      width: 100px;
      height: 100px;
      display: block;
    }
  }
</style>
