<template xmlns="http://www.w3.org/1999/html">
<div>
<!--开始-->
<el-form style="text-align: left;margin: 0px 20px; "label-width="80px" :model="xx" class="form">
<div class="border_top_cart" style="border: 1px red solid">
    <div class="container">
        <div class="checkout-box">
                <div class="checkout-box-bd">
                    <div class="xm-box">
                        <!--民宿订单单号-->
                        <el-input v-model="xx.uid" hidden></el-input>
                        <!--民宿金额-->
                        <el-input v-model="xx.order_price" hidden></el-input>
                        <!--民宿名称-->
                        <el-input v-model="xx.bnbname" hidden></el-input>
            <div class="box-hd ">
                <h2 class="title">个人信息</h2>
            </div>

<div class="box-bd" style="border: 1px blue solid">
    <div class="clearfix xm-address-list" id="checkoutAddrList">

          <dl class="item" style="height: 60px;">
            <dt>
                <strong class="itemConsignee">{{this.$route.params.list.name}}</strong>
                <span class="itemTag tag">基本信息</span>
            </dt>
            <dd>
                <p class="tel itemTel">{{this.$route.params.list.phone}}</p>
            </dd>
        </dl>
    </div>
</div>
</div></div>
                <!-- 收货地址 END-->
                <div id="checkoutPayment" style="border: 1px rosybrown solid">
                    <!-- 支付方式 -->
                                <div class="xm-box">
                <div class="box-hd ">
                    <h2 class="title">支付方式</h2>
                </div>
                <div class="box-bd">
                    <ul id="checkoutPaymentList" class="checkout-option-list clearfix J_optionList">
                        <li class="item selected"  style="width: 50px ">
                            <p style="width: 30px">
                                在线支付 <span></span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            </div>

            <div class="checkout-box-ft" style="border: 1px rebeccapurple solid">
                 <!-- 商品清单 -->
                <div id="checkoutGoodsList" class="checkout-goods-box">
                                    <div class="xm-box">
                    <div class="box-hd">
                        <h2 class="title">确认订单信息</h2>
                    </div>
                    <div class="box-bd">
                        <dl class="checkout-goods-list">
                            <dt class="clearfix">
                                <span class="col col-1">民宿名称</span>
                                <span class="col col-4">总价（元）</span>
                            </dt>

                            <dd class="item clearfix">
                                <div class="item-row">
                                    <div class="col col-1">
                                        <div class="g-pic">
                                            <img src="http://i1.mifile.cn/a1/T11lLgB5YT1RXrhCrK!40x40.jpg"
                                                 srcset="http://i1.mifile.cn/a1/T11lLgB5YT1RXrhCrK!80x80.jpg 2x" width="200" height="200" />
                                        </div>
                                        <div class="g-info">
                                            <a href="#">
                                                {{this.$route.params.list.bnbname}}
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col col-3" style="color: red;">
                                        {{this.$route.params.list.order_price}}元
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>

                </div>

                <div class="checkout-confirm">
                    <el-button round @click="addOrd()">立即下单</el-button>
                </div>
            </div>
        </div>
        </div>
         </div>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Housing_order",
        data() {
            return {
                xx:{},
            }
        },
        created(){
            this.xx = this.$route.params.list
        },
        methods:{
            addOrd(){
                this.$axios.post("http://localhost:8081/order/addOrder", this.xx)
                    .then(res => {
                        if (res.data === 1) {
                            this.$message.success("订单已提交")
                            var x = this.xx
                            this.$router.push({name:"Housing_pay",params:{x:x}})
                        } else {
                            this.$message.error("订单提交失败");
                        }
                    })
            }
        }
    }
</script>

<style scoped>

</style>
