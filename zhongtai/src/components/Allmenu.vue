<template>
      <div :class="menu_bord" id="allMenu">
        <i class="el-icon-close" @click="closeBord"></i>
        <el-input
          placeholder="请输入关键词"
          prefix-icon="el-icon-search"
          v-model="search">
        </el-input>
        <div class="contain">
          <!--类别-->
          <div class="leibie" v-for="(items,indexs) in menuArray">
            <div class="title">{{items.title}}</div>
            <div class="sign" v-for="(item,index) in items.itemArray" @click="changeSelect(indexs,index)">
              {{item.name}}
              <img src="../../static/img/check.png" alt="" v-if="item.isSelected">
              <img src="../../static/img/checked.png" alt="" v-else>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
    export default {
        name: "Allmenu",
      props:['menuArray'],
      data(){
          return{
            search:'',
            menu_bord:'bord'
          }
      },
      mounted(){
          // console.log(this.menuArray)
      },
      methods:{
        closeBord(){
          this.$emit('close')
        },
        check(){

        },
        changeSelect(mainMenu,detailMenu){
          //改变选择
          this.menuArray[mainMenu].itemArray[detailMenu].isSelected=!this.menuArray[mainMenu].itemArray[detailMenu].isSelected
          this.$emit('menuChange',mainMenu,detailMenu)
          }
      }
    }
</script>

<style scoped lang="less">
    .bord{
      font-size: 14px;
      position: absolute;
      top: 0;
      left: 200px;
      background-color: #FFFFFF;
      width: 500px;
      height: 100%;
      z-index: 1000;
      transition: left .3s linear;
      padding: 40px 30px 15px;
      box-sizing: border-box;
      i{
        position: absolute;
        top: 17px;
        right: 17px;
        font-size: 16px;
        color: #999;
        cursor: pointer;
      }
      .contain{
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        .leibie{
          width: 50%;
          margin-bottom: 30px;
          padding-right: 20px;
          box-sizing: border-box;
          .title{
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
            padding: 0 8px;
          }
          .sign{
            font-size: 12px;
            color: #666;
            width: 190px;
            height: 30px;
            line-height: 30px;
            padding: 0 8px;
            cursor: pointer;
            transition: all .3s linear;
            position: relative;
            img{
              position: absolute;
              width: 11px;
              top: 50%;
              right: 15px;
              transform: translateY(-50%);
            }
          }
          .sign:hover{
            background-color: #DFE9F3;
            color: #333;
          }

        }
      }
    }


</style>
