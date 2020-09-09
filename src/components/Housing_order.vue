<template xmlns="http://www.w3.org/1999/html">
    <div>
        <el-form style="text-align: left;margin: 0px 20px; "label-width="80px" :model="ord" class="form">
            <div class="border_top_cart">
                <div class="container">
                    <div class="checkout-box">
                        <div class="checkout-box-bd">
                            <div class="xm-box">
                                <div class="box-hd ">
                                    <h2 class="title">个人信息</h2>
                                </div>

                                <div class="box-bd">
                                    <div class="clearfix xm-address-list" id="checkoutAddrList">

                                        <dl class="item" style="height: 60px;">
                                            <dt>
                                                <strong class="itemConsignee">{{this.$route.params.list[0].truename}}</strong>
                                                {{ord.truename}}
                                                <span class="itemTag tag">基本信息</span>
                                            </dt>
                                            <dd>
                                                <p class="tel itemTel">{{this.$route.params.list[0].photo}}</p>
                                                {{ord.photo}}
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div></div>
                        <!-- 收货地址 END-->
                        <div id="checkoutPayment">
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

                        <div class="checkout-box-ft">
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
                                                            <img :src="'http://localhost:8081/'+ord[0].bedroom"
                                                                  width="200px" height="200px"/>
                                                        </div>
                                                        <div class="g-info">
                                                            <a href="#">
                                                                {{this.$route.params.list[0].bnbname}}
                                                                <!--{{ord.bnbname}}-->
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div class="col col-3" style="color: red;">
                                                        {{ord[0].order_price}}元
                                                    </div>
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <!--S 保障计划 产品选择弹框 -->
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
                ord:[],
                ordetails:{},
                // o:{}
                isSign: false,
                signSrc: '',
                clientHeight: ''
            }
        },
        created(){
            this.ord = this.$route.params.list
        },
        methods:{

            addOrd(){
                this.ordetails.order_num = Math.ceil(Math.random()*1000000000);
                // alert(this.ordetails.order_num)
                this.ordetails.bnbname =this.ord[0].bnbname;
                this.ordetails.uid = this.ord[0].uid;
                this.ordetails.order_price = this.ord[0].order_price;
                this.ordetails.starttime = this.ord[0].start;
                this.ordetails.sendtime = this.ord[0].end;

                this.$axios.post("http://localhost:8081/order/addOrder",this.ordetails)
                    .then(res => {
                        if (res.data === 1) {
                            this.$message.success("订单已提交")
                            var o = this.ordetails

                            this.$router.push({name:"Housing_pay",params:{o:o}})
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

