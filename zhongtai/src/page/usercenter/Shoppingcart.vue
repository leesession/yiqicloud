<template>
    <div id="shoppingcart">
      <div class="title">
        <i class="icon-shoppingcart"></i> <span>购物车</span>
      </div>
      <div class="contain">
        <el-table
          ref="multipleTable" :data="tableData3" tooltip-effect="dark"
          style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" min-width="3%"></el-table-column>

          <el-table-column prop="goods_name" label="商品名称" min-width="15%"></el-table-column>
          <el-table-column prop="leixing" label="付费类型" min-width="12%"></el-table-column>
          <!--show-overflow-tooltip-->
          <el-table-column prop="address" label="购买数量" min-width="15%">
            <template slot-scope="scope">
              <el-input-number v-model="scope.row.goods_number" @change="handleChange" :min="1"  label="购买数量"></el-input-number>
            </template>
          </el-table-column>
          <el-table-column label="购买时长" min-width="12%">
            <template slot-scope="scope">
              <el-select v-model="scope.row.value" placeholder="请选择">
                <el-option
                  v-for="item in scope.row.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="价格" min-width="15%">
            <template slot-scope="scope">{{ '￥'+scope.row.price }}</template>
          </el-table-column>
          <el-table-column label="操作" min-width="6%">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData3)"
                type="text"
                size="small">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="select-all">
          <div class="total">
            <span class="total-num">已选择 <span>{{sumAmount}}</span> 件商品</span>
            <span class="total-price">总价：<span>￥{{sumMoney.toFixed(2)}}</span></span>
            <el-button type="primary">立即付款</el-button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import '../../../static/css/shoppingcart.less';
    export default {
        name: "Shoppingcart",
      computed:{
        sumAmount(){
          return this.multipleSelection.map(row=>row.goods_number)
            .reduce((acc, cur) => (parseFloat(cur) + acc), 0)
        },
        sumMoney(){
          return this.multipleSelection.map(row=>row.goods_number*row.price)
            .reduce((acc, cur) => (parseFloat(cur) + acc), 0)
        }
      },
      data(){
          return{
            checked: false,
            tableData3: [{
              goods_name:'设备上云1',
              leixing:'包年包月',
              price:'2000.00',
              goods_number:1,
              value:'',
              options: [{
                value: '选项1',
                label: '3个月'
              }, {
                value: '选项2',
                label: '6个月'
              }]
            }, {
              goods_name:'设备上云2',
              leixing:'包年包月',
              price:'2000.00',
              goods_number:123,
              value:'',
              options: [{
                value: '选项1',
                label: '3个月'
              }, {
                value: '选项2',
                label: '6个月'
              }]
            }, {
              goods_name:'设备上云3',
              leixing:'包年包月',
              price:'2000.00',
              goods_number:10,
              value:'',
              options: [{
                value: '选项1',
                label: '3个月'
              }, {
                value: '选项2',
                label: '6个月'
              }]
            }],
            multipleSelection: []
          }
      },
      methods: {
        deleteRow(index, rows) {
          rows.splice(index, 1);
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
          // console.log(val)
        },
        handleChange(value) {
          // console.log(value);
        }
      }
    }
</script>

<style scoped>

</style>
