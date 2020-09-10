<template>
    <el-container>
        <el-header>
            <!--头部-->
            <Header></Header>
        </el-header>
        <el-main >
            <el-tabs :tab-position="tabPosition='left'" style="height: 700px">
                <el-tab-pane style="padding-left:20px;">
                    <span slot="label"  style="font:18px large"><i class="el-icon-s-order"></i>我的订单</span>

                    <el-tabs v-model="activeName" @tab-click="handleClick"  style="height: 700px;width: 1000px">
                        <el-tab-pane label="进行中" name="first">进行中

                            <el-table :data="orderjxzList.slice((currentPage-1)*PageSize,currentPage*PageSize)" border style="width: 100%">
                                <el-table-column label="订单单号" prop="Order_num"></el-table-column>
                                <el-table-column label="订单状态" prop="state">
                                    <template slot-scope="scope">
                                        {{scope.row.state==0?'进行中':'已结束'}}
                                    </template>
                                </el-table-column>
                                <el-table-column label="订单金额" prop="order_price"></el-table-column>
                                <el-table-column label="民宿名称" prop="bnbname"></el-table-column>
                                <el-table-column label="操作">
                                    <template slot-scope="scope">
                                        <el-button @click="rzwc(scope.row)">入住完成</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-pagination
                                layout="total, sizes, prev, pager, next, jumper"
                                :current-page="currentPage"
                                :page-sizes="pageSizes"
                                :page-size="PageSize"
                                :total="total"
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange">
                            </el-pagination>

                        </el-tab-pane>
                        <el-tab-pane label="已结束" name="second">已结束
                            <el-table :data="orderjsList.slice((currentPage-1)*PageSize,currentPage*PageSize)" border style="width: 100%">
                                <el-table-column label="订单单号" prop="Order_num"></el-table-column>
                                <el-table-column label="订单状态" prop="state">
                                    <template slot-scope="scope">
                                        {{scope.row.state==0?'进行中':'已结束'}}
                                    </template>
                                </el-table-column>
                                <el-table-column label="民宿名称" prop="bnbname"></el-table-column>
                            </el-table>
                            <el-pagination
                                layout="total, sizes, prev, pager, next, jumper"
                                :current-page="currentPage"
                                :page-sizes="pageSizes"
                                :page-size="PageSize"
                                :total="total"
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange">
                            </el-pagination>
                        </el-tab-pane>
                    </el-tabs>

                </el-tab-pane>
                <el-tab-pane style="padding-left:40px;">
                    <span slot="label"  style="font:18px large"><i class="el-icon-user"></i>房源查看</span>
                    <div style="width: 980px;border: 0px solid red;overflow: auto">
                        <el-table :data="bnblist" border style="width: 100%">
                            <el-table-column label="房源编号" prop="bnbid"></el-table-column>
                            <el-table-column label="房源名称" prop="bnbname"></el-table-column>
                            <el-table-column label="房源价格" prop="price"></el-table-column>
                            <el-table-column label="用户昵称" prop="uname"></el-table-column>
                        </el-table>
                    </div>
                </el-tab-pane>
                <el-tab-pane style="padding-left:40px;">
                    <span slot="label"  style="font:18px large"><i class="el-icon-edit-outline"></i>支付宝设置</span>
                    <el-form :model="upzf" label-width="80px"  label-position="left">
                        <el-form-item label="支付宝账号" prop="acc">
                            <el-input   v-model="upzf.acc"></el-input>
                        </el-form-item>
                        <el-form-item label="身份证号" prop="idcard">
                            <el-input   v-model="upzf.idcard"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button style="width: 250px" type="primary" @click="updatezf()">设置</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <!--<el-tab-pane style="padding-left:40px;">-->
                <!--<span slot="label"><i class="el-icon-star-off"></i>我的收藏</span>-->
                <!--我的收藏-->
                <!--</el-tab-pane>-->
                <el-tab-pane style="padding-left:40px;">
                    <span slot="label"  style="font:18px large"><i class="el-icon-lock"></i>提现</span>
                    余额:{{userList1.money}}
                    <el-button @click="tx()">提现</el-button>
                    <el-dialog width="30%" title="提现" :visible.sync="dialogTx">
                            <span style="color: gray;margin-left: 20px;line-height: 20px">提现金额:
                        </span><el-input style="width: 240px" placeholder="提现金额" v-model="upmoney" auto-complete="off"></el-input>
                        <div style="margin-top: 30px;margin-left: 20px">
                            <el-button style="width: 100px;margin-left: 90px" type="primary" @click="updatemoney()">确定</el-button>
                            <el-button style="width: 100px" type="primary" @click="dialogTx=false">关闭</el-button>
                        </div>
                    </el-dialog>
                </el-tab-pane>
                <el-tab-pane style="padding-left:40px;" >
                    <span slot="label"  style="font:18px large"><i class="el-icon-setting"></i>提现记录</span>
                    <el-table :data="Txjl.slice((currentPage-1)*PageSize,currentPage*PageSize)" border style="width: 100%">
                        <el-table-column label="提现编号" prop="wid"></el-table-column>
                        <el-table-column label="提现用户" prop="uname"></el-table-column>
                        <el-table-column label="提现时间" prop="times">

                        </el-table-column>
                        <el-table-column label="提现金额" prop="total_price"></el-table-column>
                        <el-table-column label="提现账号" prop="acc"></el-table-column>
                    </el-table>
                    <el-pagination
                        layout="total, sizes, prev, pager, next, jumper"
                        :current-page="currentPage"
                        :page-sizes="pageSizes"
                        :page-size="PageSize"
                        :total="total"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange">
                    </el-pagination>
                </el-tab-pane>
            </el-tabs>
        </el-main>
        <el-footer>
            <div class='h_body'>
                <div class="foot_v2">
                    <ul class="foot_ul">
                        <li><a class="guide" href="https://www.xiaozhu.com/xzweb.php?op=Help_UserGuide&type=tenant" target="_blank">房客指南</a></li>
                        <li><a class="guide icon_fk" href="https://www.xiaozhu.com/xzweb.php?op=Help_UserGuide&type=landlord" target="_blank">房东指南</a></li>
                        <li>
                            <span class="guide_T">关于我们</span>
                            <a href="https://www.xiaozhu.com/aboutus" target="_blank">关于小猪</a>
                            <a href="https://app.mokahr.com/apply/xiaozhu/4514" target="_blank">加入我们</a>
                            <a href="https://www.xiaozhu.com/contactus" target="_blank">联系我们</a>
                            <a href="https://open.xiaozhu.com" target="_blank">开放平台</a>
                        </li>
                        <li>
                            <span class="guide_T">网站帮助</span>
                            <a href="https://www.xiaozhu.com/help/index" target="_blank" >帮助中心</a>
                            <a href="https://www.xiaozhu.com/sitemap.html" target="_blank">网站地图</a>
                        </li>
                        <li class="width_280">
                            <span class="guide_T">网站协议</span><br/>
                            <a href="https://www.xiaozhu.com/help/service" target="_blank">服务协议</a>
                            <a href="https://www.xiaozhu.com/help/landlordRule" target="_blank">房东规则</a>
                            <a href="https://www.xiaozhu.com/help/tenantRule" target="_blank">房客规则</a>
                            <a href="https://www.xiaozhu.com/help/auditRule" target="_blank">房源上线标准</a>
                            <a href="https://www.xiaozhu.com/help/privacy" target="_blank">隐私保护</a>
                            <a href="https://www.xiaozhu.com/help/copyright" target="_blank">版权声明</a>
                            <a href="https://www.xiaozhu.com/help/disclaimer" target="_blank">免责声明</a>
                            <a href="https://www.xiaozhu.com/help/intellectualProperty" target="_blank">知识产权声明</a>
                            <a href="https://www.xiaozhu.com/help/commentRule" target="_blank">点评发布规则</a>
                            <a href="https://www.xiaozhu.com/help/japanReservationRule" target="_blank">日本标准住宅宿泊仲介业约款</a>
                        </li>
                        <li class="bigFont online_kf">
                            <span class=""   onclick='window.open("https://yiconnect.wezhuiyi.com/chat?t=Cks3pxv2eMBfA3BZvdOhS6Pa1am5fygsIHyQRXc0D7U&uid=144260581897&customer=%7B%22cID%22%3A%22144260581897%22%7D","_blank");' ><i></i>在线客服</span>
                            <p>客服电话  400 - 010 - 7890</p>
                            <p>客服邮箱  service@xiaozhu.com</p>
                        </li>
                    </ul>
                    <dl class="link_dl">
                        <dt>城市导航</dt>
                        <dd>
                            <a target="_blank" href="//bj.xiaozhu.com/">北京短租房</a>
                            <a target="_blank" href="//sh.xiaozhu.com/">上海短租房</a>
                            <a target="_blank" href="//nj.xiaozhu.com/">南京短租房</a>
                            <a target="_blank" href="//cd.xiaozhu.com/">成都短租房</a>
                            <a target="_blank" href="//gz.xiaozhu.com/">广州短租房</a>
                            <a target="_blank" href="//cq.xiaozhu.com/">重庆短租房</a>
                            <a target="_blank" href="//wh.xiaozhu.com/">武汉短租房</a>
                            <a target="_blank" href="//dl.xiaozhu.com/">大连短租房</a>
                            <a target="_blank" href="//sanya.xiaozhu.com/">三亚短租房</a>
                            <a target="_blank" href="//lijiang.xiaozhu.com/">丽江短租房</a>
                            <a target="_blank" href="//tj.xiaozhu.com/">天津短租房</a>
                            <a target="_blank" href="//xianggang.xiaozhu.com/">香港短租房</a>
                        </dd>
                    </dl>
                    <dl class="link_dl">
                    </dl>
                    <div class="foot_btm">
                        <a class="record-jump" href="http://beian.miit.gov.cn" target="_blank"  rel="noopener norefferrer">京ICP备12035936号-1</a>
                        &nbsp;&nbsp;许可证号：京ICP证140510号 &nbsp;&nbsp;
                        <a href="//www.anquan.org/s/www.xiaozhu.com"  name="mt8SMvYyRDI92b06nuDs8dPFapllCJYidqhM1WlOoGRZ9DWpbo" rel="nofollow" target="_blank">安全联盟</a>
                        &nbsp;&nbsp; 北京快跑信息科技有限公司 &nbsp;&nbsp;
                        <a href="https://www.xiaozhu.com/images/yingye.jpg"  name="yingyezhizhao" rel="nofollow" target="_blank">营业执照号 103613118</a>
                        <span style="display:none">  &nbsp;&nbsp; 地址：北京市海淀区知春路56号   &nbsp;&nbsp;电话：010-62961978</span>
                    </div>
                    <div style="margin:0 auto;color:#bdc3c7;">
                        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020380" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
                            <p style="display:inline-block;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#bdc3c7;">京公网安备 11010802020380号</p>
                        </a>
                        &nbsp;&nbsp; 违法和不良信息举报电话：4000107890转6  &nbsp;&nbsp; 举报邮箱：jubao@xiaozhu.com
                    </div>
                    <div style="margin-top: 20px">
                        <a target="cyxyv" href="https://v.yunaq.com/certificate?domain=www.xiaozhu.com&from=label&code=90030" style="margin-right: 10px">
                            <img src="https://aqyzmedia.yunaq.com/labels/label_sm_90030.png" style="height: 48px">
                        </a>
                        <a id="_xinchacharenzheng_cert_vip_kexinweb" style="text-decoration:none;" target="_blank" href="https://xyt.xinchacha.com/pcinfo?sn=448825606222778368&certType=6">
                            <img src="https://xyt.xinchacha.com/img/icon/icon3.png" style="height: 48px" >
                        </a>
                    </div>
                </div>

                <input type="hidden" name="actionName" id="actionName" value="Pub_Index"/>
                <input type="hidden" name="xz_srf_token" id="xz_srf_token" value="c7d30e242ec2b969231c09400c9a65c4"/>
            </div>
        </el-footer>
    </el-container>
</template>

<script>
    import moment from 'moment'
    import header from "../components/Housing_header.vue"
    export default {
        name: "Housing_fdpersonal",
        inject:['reload'],
        data(){
            return {
                bnblist:[],
                upzf:{},
                upwdList:{},
                userList1:{},
                userList:{},
                jequ:"",
                jequ1:"",
                upwd:"",
                photo:"",
                yzm1:"",
                uname:"",
                te:true,
                tex:false,
                diasabledInput:true,
                dialogName:false,
                dialogUpdate:false,
                dialogPtel:false,
                dialogImageUrl: '',
                dialogVisible: false,
                file: [],
                dialogTx:false,
                // 个数选择器
                pageSizes: [1, 2, 3, 4],
                // 每页显示的条数
                PageSize: 2,
                // 默认显示第几页
                currentPage: 1,
                // 总条数
                total: 1,
                orderjxzList:[],
                orderjsList:[],
                commentsList:[],
                upmoney:"",//提现金额
                Txjl:[],
            }
        },components:{
             Header:header
        }
        ,created:function(){

            //提现记录
            this.queryTx();
            //支付宝
            this.queryacc();
            //房源
            this.querybnb();
            //进行中订单
            this.queryOrdersjxz();
            //结束订单
            this.queryOrdersjs();
            this.queryComments();
            this.jazai();
            this.jequ=this.userList[0].photo.replace(this.userList[0].photo.substr(4,4),"****");

        },methods:{
            rzwc(row){
                var money=row.order_price-(row.order_price*0.1);
                var uid=JSON.parse(localStorage.getItem('acc'));
                this.$axios.post("http://localhost:8081/plat/upFmoney?money="+money).then(res => {
                    if(res.data>0){
                        this.$axios.post("http://localhost:8081/plat/addWaterqx?wmoney="+money+"&uid="+uid+"&wstate=2").then(res => {
                            if(res.data>0){
                                this.$axios.post("http://localhost:8081/plat/upUmoney?money="+money+"&uid="+uid).then(res => {
                                    this.jazai();
                                })
                            }
                        })
                    }
                })
            },
            fdzx(){
                this.$router.push({name:"Housing_fdpersonal"})
            },
            fkzx(){
                this.$router.push({name:"Housing_personal"})
            },
            tc(){
                localStorage.clear();
                this.$router.push({name:"Housing_main"})
            },
            //查看提现记录
            queryTx(){
                var uid=JSON.parse(localStorage.getItem('acc'));
                this.$axios.post("http://localhost:8081/UsersController/queryTx?uid="+uid).then(resp => {
                    let jl = resp.data;
                    this.total = jl.length;
                    this.Txjl=jl;
                    this.start();
                });
            },
            //修改金额 添加提现记录
            updatemoney(){
                var uid=JSON.parse(localStorage.getItem('acc'));
                if(this.upmoney>this.userList1.money){
                    this.$message.error("余额不足");
                }else {
                    this.$axios.post("http://localhost:8081/UsersController/upMoney?upmoney="+this.upmoney+"&uid="+uid).then(res => {
                        if(res.data>0){
                            this.$message.success("提现成功");
                            this.$axios.post("http://localhost:8081/UsersController/addTx?uid="+uid+"&total_price="+this.upmoney+"&aid="+this.upzf.aid).then(resp => {
                                this.dialogTx=false;
                                this.jazai();
                                this.upmoney="";
                                this.queryTx();
                            });

                        }
                    })
                }

            },
            //查询是否有支付宝
            tx(){
                var uid=JSON.parse(localStorage.getItem('acc'));
                this.$axios.post("http://localhost:8081/UsersController/queryAcc?uid="+uid).then(res => {
                    if(res.data==0){
                        this.$message.error("请设置支付宝");
                    }else {
                        this.dialogTx=true;
                    }

                })
            },
            //修改支付宝
            updatezf(){
                var uid=JSON.parse(localStorage.getItem('acc'));
                this.$axios.post("http://localhost:8081/UsersController/updateAcc?acc="+this.upzf.acc+"&idcard="+this.upzf.idcard+"&uid="+uid).then(res => {
                    if(res.data>0){
                        alert("修改成功")
                    }
                })
            },
            queryacc(){
                var uid=JSON.parse(localStorage.getItem('acc'));
                this.$axios.post("http://localhost:8081/UsersController/queryAcc?uid="+uid).then(res => {
                    this.upzf = res.data;
                    console.log(this.upzf)
                })
            },
            querybnb(){
                var uid=JSON.parse(localStorage.getItem('acc'));
                this.$axios.post("http://localhost:8081/UsersController/queryBnb?uid="+uid).then(res => {
                    // let b = res.data;
                    // this.total = bnb.length;
                    this.bnblist = res.data
                })
            },
            queryComments(){
                var uid=JSON.parse(localStorage.getItem('acc'));
                this.$axios.post("http://localhost:8081/orders/queryComments?uid="+uid).then(res => {
                    let comment = res.data;
                    // this.total = comment.length;
                    this.commentsList = comment
                })
            },
            queryOrdersjxz(){
                var uid=JSON.parse(localStorage.getItem('acc'))
                this.$axios.post("http://localhost:8081/order/queryOrders?uid="+uid+"&state="+0).then(res => {
                    let order = res.data;
                    this.total = order.length
                    this.orderjxzList = order
                    console.log(this.orderjxzList+"1231231")
                })
            },
            queryOrdersjs(){
                var uid=JSON.parse(localStorage.getItem('acc'))
                this.$axios.post("http://localhost:8081/order/queryOrders?uid="+uid+"&state="+1).then(res => {
                    let order = res.data;
                    // this.total = order.length
                    this.orderjsList = order
                })
            },
            jazai:function () {
                if (localStorage.getItem("acc") != null ) {
                    var uid=JSON.parse(localStorage.getItem('acc'))
                    this.$axios.post("http://localhost:8081/UsersController/queryUid?uid="+uid).then(res=>{
                        this.userList=res.data;
                        this.userList1=this.userList[0];
                        // localStorage.setItem('acc',JSON.stringify(this.userList[0].uid));
                        // this.dialogVisible=false;
                        // this.reload();
                    })

                    // this.userList=JSON.parse(localStorage.getItem('acc'));
                    // this.userList1=this.userList[0];
                }else{
                    alert('key 不存在')
                }
            },yzm:function () {
                this.$axios.post("http://localhost:8081/test/show?phone=" + this.photo).then(res => {
                })
            },
            start () {
                this.Txjl.times = moment(this.Txjl.times).format('YYYY-MM-DD HH:mm:ss')
            },
            // 每页显示的条数
            handleSizeChange (val) {
                // 改变每页显示的条数
                this.PageSize = val;
                // 注意：在改变每页显示的条数时，要将页码显示到第一页
                this.currentPage = 1
            },
            // 显示第几页
            handleCurrentChange (val) {
                // 改变默认的页数
                this.currentPage = val
            }
        }
    }
</script>

<style scoped>
</style>
