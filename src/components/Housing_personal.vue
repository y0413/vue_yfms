<template>
    <el-container>
<el-header>
            <Header></Header>
        </el-header>
        <el-main>
            {{this.userList1}}
            <el-tabs :tab-position="tabPosition='left'" style="height: 700px">
                <el-tab-pane style="padding-left:20px">
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
                                        <el-button @click="qxdd(scope.row)">取消订单</el-button>
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
                    <span slot="label"  style="font:18px large"><i class="el-icon-user"></i>个人资料</span>
                    <div style="width: 980px;border: 0px solid red;overflow: auto">
                        <b style="color: aqua;line-height: 40px;font-size: 20px;padding-left: 20px">基本信息</b>
                        <hr style="color: honeydew"/>
                        <div style="padding-left: 40px;line-height: 80px; font-size: 20px;float: left">
                        <span><span style="color: gray">用户名:
                        </span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{userList[0].uname}}</span>&nbsp&nbsp&nbsp&nbsp
                            <a style="color: hotpink" @click="dialogdk()">修改</a><br>
                        <span><span style="color: gray">手机号:
                        </span>:&nbsp&nbsp&nbsp&nbsp+86&nbsp&nbsp{{userList[0].photo}}&nbsp&nbsp&nbsp&nbsp
                            <i class="el-icon-circle-check" style="background-color: aqua">
                            </i>&nbsp&nbsp&nbsp<i style="color: aqua">已验证</i>
                            &nbsp&nbsp&nbsp&nbsp<a style="color: hotpink"@click="dialogUdk()">修改</a></span>
                        </div>
                        <div style="width: 150px; height: 200px;float: right;margin-right: 200px" >
                            <img :src="'http://localhost:8081/'+userList[0].ptel" style="width: 150px;height: 150px;"/>
                            <el-button @click="dialogPtel=true">编辑头像</el-button>
                            <el-dialog width="40%" height="400px" title="编辑头像" :visible.sync="dialogPtel">
                            <span style="color: gray;margin-left: 20px">头像:
                            </span>
                                <el-upload
                                   action="http://localhost:8081/UsersController/singlefile"
                                    list-type="picture-card"
                                    :auto-upload="false"
                                    ref="upload"
                                    :on-preview="handlePictureCardPreview"
                                    :file-list="file"
                                    :on-remove="handleRemove">
                                    <i slot="default" class="el-icon-plus"></i>
                                </el-upload>
                                <div style="margin-top: 30px;margin-left: 20px">
                                    <el-button style="width: 100px" type="primary" @click="updatePtel()">保存</el-button>
                                    <el-button style="width: 100px" type="primary" @click="dialogptel()">关闭</el-button>
                                </div>
                            </el-dialog>
                            <!--<a style="position: absolute;bottom: 190px;left:715px;font-size: 15px; color: white;float: right;"><b>编辑头像</b></a>-->
                            </div>
                    </div>
                    <el-dialog width="20%" title="修改名字" :visible.sync="dialogName">
                        <el-form :model="uphoneList" :rules="rules3" ref="uphoneList" label-width="80px"  label-position="left">
                            <el-form-item label="用户名" prop="aname">
                                <el-input style="width: 180px" placeholder="用户名" v-model="uphoneList.aname"></el-input>
                            </el-form-item>
                            <div style="margin-top: 30px;margin-left: 20px">
                                <el-button style="width: 100px" type="primary" @click="updatename('uphoneList')">保存</el-button>
                                <el-button style="width: 100px" type="primary" @click="dialoggb()">关闭</el-button>
                            </div>
                        </el-form>
                    </el-dialog>
                    <el-dialog width="30%" title="修改手机号" :visible.sync="dialogUpdate">
                        <el-form :model="uphoneList" :rules="rules3" ref="uphoneList" label-width="80px"  label-position="left">
                            <el-form-item label="手机号" prop="phone">
                                <el-input style="width: 260px" placeholder="手机号" v-model="uphoneList.phone"></el-input>
                            </el-form-item>
                            <el-form-item label="验证码" prop="yzm">
                                <el-input style="width: 130px" placeholder="验证码" v-model="uphoneList.yzm"></el-input>
                                <a @click="yzm()" id="get-code-bt" class="have-nb">重新发送</a>
                            </el-form-item>
                            <div style="margin-top: 30px;margin-left: 20px">
                                <el-button style="width: 100px;margin-left: 90px" type="primary" @click="updatesphoto('uphoneList')">保存</el-button>
                                <el-button style="width: 100px" type="primary" @click="dialogUgb()">关闭</el-button>
                            </div>
                        </el-form>
                    </el-dialog>
                    <div style="border: 0px solid red;width:980px;">
                        <b style="color: aqua;font-size: 20px;padding-left: 20px">身份信息</b>
                        <b style="color: gray;line-height: 50px;font-size: 18px;padding-left: 20px">仅用于必要的安全环节，其他情况下将为您严格保密</b>
                        <a style="color: gray;line-height: 50px;font-size: 18px;padding-left: 400px;"   @click="handleSubmit()" v-show="diasabledInput==true">编辑</a>
                        <a style="color: gray;line-height: 50px;font-size: 18px;padding-left: 400px;"  @click="submitForm('userList1')" v-show="diasabledInput==false">保存</a>

                        <hr style="color: white"/>
                        <el-form :model="userList1" status-icon :rules="rules2" ref="userList1" label-width="80px" class="demo-ruleForm">
                            <el-form-item label="真实姓名:" prop="truename">
                                <el-input v-model="userList1.truename" style="width: 290px" value="123" v-bind:disabled="diasabledInput"></el-input>
                            </el-form-item>
                            <el-form-item label="身份证号:" prop="idcard">
                                <el-input v-model="userList1.idcard" style="width: 290px" v-bind:disabled="diasabledInput"></el-input>
                            </el-form-item>
                            <el-form-item label="性别:" prop="usex">
                                <el-radio v-model="userList1.usex" label="0" checked v-bind:disabled="diasabledInput">男</el-radio>
                                <el-radio v-model="userList1.usex" label="1" v-bind:disabled="diasabledInput">女</el-radio>
                            </el-form-item>
                            <el-form-item label="邮箱:" prop="email">
                                <el-input v-model="userList1.email" style="width: 290px" v-bind:disabled="diasabledInput"></el-input>
                            </el-form-item>
                                <el-form-item label="地址:" prop="address">
                                    <div v-show="dj">
                                        <el-cascader
                                            :options="options"
                                            v-model="userList1.address"
                                            @change="handleChange"
                                            v-bind:disabled="diasabledInput"
                                            >
                                        </el-cascader>
                                    </div>
                                    <el-input v-model="userList1.address" v-show="db" style="width: 290px" v-bind:disabled="diasabledInput"></el-input>

                                </el-form-item>

                        </el-form>
                    </div>

                </el-tab-pane>
                <el-tab-pane style="padding-left:40px;">
                    <span slot="label"  style="font:18px large"><i class="el-icon-edit-outline"></i>我的点评</span>
                    <el-table :data="commentsList.slice((currentPage-1)*PageSize,currentPage*PageSize)" border style="width: 100%">
                        <el-table-column label="评论编号" prop="cid"></el-table-column>
                        <el-table-column label="评论内容" prop="context"></el-table-column>
                        <el-table-column label="评论用户" prop="uname"></el-table-column>
                        <el-table-column label="房源" prop="bnbname"></el-table-column>
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
                <!--<el-tab-pane style="padding-left:40px;">-->
                    <!--<span slot="label"><i class="el-icon-star-off"></i>我的收藏</span>-->
                    <!--我的收藏-->
                <!--</el-tab-pane>-->
                <el-tab-pane style="padding-left:40px;">
                    <span slot="label"  style="font:18px large"><i class="el-icon-lock"></i>密码设置</span>
                    <span style="font-size: 18px " >密码修改</span>
                    <el-form :model="upwdList" :rules="rules3" ref="upwdList" label-width="80px"  label-position="left">
                          <b style="font-family: 华文宋体;font-size: 24px">手机号:+86 {{this.jequ}}</b>
                        <el-form-item label="验证码" prop="yzm1">
                            <el-input style="width: 130px" placeholder="验证码" v-model="upwdList.yzm1"></el-input>
                            <a @click="yzm1()" id="get-code-btn" class="have-nb">{{btntxt}}</a>
                        </el-form-item>

                        <el-form-item label="密码" prop="upwd">
                            <el-input style="width: 240px;" type="password" v-model="upwdList.upwd"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button style="width: 250px" type="primary" @click="updateupwd('upwdList')">修改</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane style="padding-left:40px;" >
                    <span slot="label"  style="font:18px large"><i class="el-icon-setting"></i>注销账号</span>
                    <b style="font-size: 26px">申请注销小猪账号</b>
                    <p style="line-height: 50px;font-size: 16px">在你提交了注销申请之后，系统将进行以下验证，以确保你的账号、财产安全。</p>
                    <hr>
                    <b style="font-size: 16px" class="mt_12">1、订单状态为可注销的状态</b>
                    <p style="line-height: 40px; font-size: 16px " >（1）您的订单状态应为“已取消”或“入住完成”；</p>
                    <p style="line-height: 40px; font-size: 16px"> （2）先住后付的订单结算状态为扣除成功；</p>
                    <p style="line-height: 40px; font-size: 16px">（3）在线收取的押金保证全退或已扣除，押金担保的状态为无需索赔/索赔成功；</p>
                    <p style="line-height: 40px; font-size: 16px"> （4）有特殊财务处理的订单处于完成状态；</p>
                    <p style="line-height: 40px; font-size: 16px">（5）需打款的订单皆为完成状态；</p>
                    <b style="line-height: 50px; font-size: 16px">2、您的所有房源为下线状态</b><br>
                    <b style="line-height: 50px; font-size: 16px">3、您的保洁订单为服务完成状态</b><br>
                    <b style="line-height: 50px; font-size: 16px">4、订单涉及到的智能门锁已停用</b><br>
                    <b style="line-height: 50px; font-size: 16px">5、所有订单交易为完成状态</b><br>
                    <el-button style="line-height: 20px; width: 220px; background-color: deeppink;color: white" >申请注销</el-button>
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
    import header from "../components/Housing_header.vue"

    import { regionData, CodeToText } from 'element-china-area-data'// 省市级连
    export default {
        name: "df",
        inject:['reload'],
        data(){
            var validateidcard = (rule, value, callback) => {
                let isMobile =  /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value);
                if (isMobile) {
                    callback();
                } else {
                    callback(new Error('身份证格式不正确!'));
                }
            };

            var validateregEmail= (rule, value, callback) => {
                var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
                if (regEmail) {
                    callback();
                }else {
                    callback(new Error('邮箱格式不正确'));
                }
            };
            var validateregtrueName= (rule, value, callback) => {
               var truename1 =/^[\u2E80-\u9FFF]+$/.test(value);
                if (truename1) {
                    callback();
                }else {
                    callback(new Error('姓名只能输入中文'));
                }
            };
            var validateregphone= (rule, value, callback) => {
                var phone1 =/^[1][3,4,5,7,8][0-9]{9}$/.test(value);
                if (phone1) {
                    callback();
                } else {
                    callback(new Error('手机号格式不正确!'));
                }
            };
            return {
                rules2: {
                    truename: [
                        {validator: validateregtrueName, trigger: 'blur'}

                    ],
                    idcard: [
                        {validator: validateidcard, trigger: 'blur'}
                    ],
                    email: [
                        {validator: validateregEmail, trigger: 'blur'}
                    ]
                },
                rules3: {
                    phone: [
                        {required:true,message:'手机号不能为空',trigger:'blur'},

                        {validator: validateregphone, trigger: 'blur'}
                    ],
                    yzm: [

                        {required:true,message:'验证码不能为空',trigger:'blur'}
                    ],
                    aname:[
                        {required:true,message:'用户名不能为空',trigger:'blur'}

                    ],upwd:[
                        {required:true,message:'密码不能为空',trigger:'blur'},
                        {min:5,max:10,message:'密码的要5-10位',trigger:['change','blur']}


                    ],yzm1:[
                        {required:true,message:'验证码不能为空',trigger:'blur'}

                    ]
            },
                dj:false,
                db:true,
                options: regionData,
                selectedOptions: [], // 省市级连信息
                btntxt:"获取验证码",
                upwdList:{},
                userList1:{},
                uphoneList:{},
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
                ssw:"",

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
                commentsList:[]
            }
        },components:{
            Header:header
        }
       ,created:function(){
            this.queryOrdersjxz();
            this.queryOrdersjs();
            this.queryComments();
            this.jazai();
        },methods:{
            handleChange (value) {
                // for (var i = 0; i < this.selectedOptions.length; i++) {
                //     ssq += CodeToText[this.selectedOptions[i]]
                // }
                this.bnb.province=CodeToText[this.selectedOptions[0]];
                this.bnb.city=CodeToText[this.selectedOptions[1]];
                this.bnb.town=CodeToText[this.selectedOptions[2]];
                var map = new BMap.Map('allmap')
                var local = new BMap.LocalSearch(map, {
                    renderOptions: { map: map }
                })
                local.search(CodeToText[this.selectedOptions[2]])
                map.disableDragging()
                // local.setMarkersSetCallback(function(pois){
                //     var p = pois[0].marker.getPosition();
                //     // alert("marker的位置是" + p.lng + "," + p.lat)
                // })
            },qxdd(row){
                var uid=JSON.parse(localStorage.getItem('acc'));
                this.$axios.post("http://localhost:8081/plat/upFmoney?money="+row.order_price).then(res => {
                    if(res.data>0){
                        this.$axios.post("http://localhost:8081/plat/addWaterqx?wmoney="+row.order_price+"&uid="+uid+"&wstate=1").then(res => {

                        })
                    }
                })
            },
            handleSubmit:function () {
                if(this.diasabledInput){
                    this.diasabledInput=false;
                }else{
                    this.diasabledInput=true;
                }
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
            queryComments(){
                var uid=JSON.parse(localStorage.getItem('acc'));
                this.$axios.post("http://localhost:8081/order/queryComments?uid="+uid).then(res => {
                    let comment = res.data;
                    this.total = comment.length;
                    this.commentsList = comment
                })
            },
            queryOrdersjxz(){
                var uid=JSON.parse(localStorage.getItem('acc'))
                this.$axios.post("http://localhost:8081/order/queryOrders?uid="+uid+"&state="+0).then(res => {
                    let order = res.data;
                    this.total = order.length
                    this.orderjxzList = order
                })
            },
            queryOrdersjs(){
                var uid=JSON.parse(localStorage.getItem('acc'))
                this.$axios.post("http://localhost:8081/order/queryOrders?uid="+uid+"&state="+1).then(res => {
                    let order = res.data;
                    this.total = order.length
                    this.orderjsList = order
                })
            }, updateupwd(upwdList)
                {
                    this.$refs[upwdList].validate((valid) => {
                        if (valid) {
                this.$axios.post("http://localhost:8081/test/content?mobile="+this.upwdList.yzm1).then(res=>{
                    if(res.data===1){
                        this.$axios.post("http://localhost:8081/UsersController/updateUpwd?upwd="+this.upwdList.upwd+"&photo="+this.userList1.photo).then(res=>{
                            if(res.data>0){
                                this.$message({
                                    showClose: false,
                                    message: '修改成功',
                                    type: 'success'
                                });
                                this.upwdList.yzm1="";
                                this.upwdList.upwd="";

                                this.$router.push({name : 'Housing_main'});
                                    this.delc();
                            }else {
                                this.$message({
                                    showClose: false,
                                    message: '修改失败',
                                    type: 'success'
                                })
                            }
                        })
                    }else {
                        this.$message({
                            showClose: true,
                            message: '验证码有误',
                            type: 'success'
                        })
                    }
                })
                        }else {
                            console.log('error submit!!');
                            return false;
                        }
                    });
                },yzm1:function () {
                this.$axios.post("http://localhost:8081/test/show?phone="+this.userList1.phone).then(res => {
                })
            },delc:function(){
                this.$router.push({name : 'Housing_main'});
                localStorage.clear();
                this.reload();
    },submitForm(userList1)
            {
                this.$refs[userList1].validate((valid) => {
                    if (valid) {
                            this.ssw = CodeToText[this.userList1.address[0]]+"/"+CodeToText[this.userList1.address[1]]+"/"+CodeToText[this.userList1.address[2]]
                this.$axios.post("http://localhost:8081/UsersController/updates?usex="+this.userList1.usex+"&truename="+this.userList1.truename+"&idcard="+this.userList1.idcard+"&email="+this.userList1.email+"&address="+this.ssw +"&uid="+this.userList[0].uid)
                    .then(res=>{
                        if(res.data>0){
                            this.diasabledInput=true;
                            this.userList[0].usex=this.userList1.usex;
                            this.userList[0].truename=this.userList1.truename;
                            this.userList[0].idcard=this.userList1.idcard;
                            this.userList[0].address=this.ssw;
                            this.ssw="";
                        }
                    })
                    }else {
                            console.log('error submit!!');
                            return false;
                        }
                    });
            },dialogdk:function () {
                this.dialogName=true;
            },dialoggb:function () {
                this.dialogName=false;
            },dialogUdk:function () {
                this.dialogUpdate=true;
            },dialogUgb:function () {
                this.dialogUpdate=false;
            },dialogptel(){
                this.dialogPtel=false;
            },
            // queryUname(){
            //     this.$axios.post("http://localhost:8081/UsersController/queryUid?uid="+this.userList[0].uid)
            //         .then(res=>{
            //             if(res.data>0){
            //                 alert(123)
            //                 localStorage.clear();
            //                 this.reload();
            //                 localStorage.setItem('acc',JSON.stringify(res.data));
            //
            //                 this.userList[0]=JSON.parse(localStorage.getItem('acc'));
            //                 console.log(this.userList[0]);
            //             }
            //         })
            // },
            updatename(uphoneList)
            {
                this.$refs[uphoneList].validate((valid) => {
                    if (valid) {
                this.$axios.post("http://localhost:8081/UsersController/updateUname?uname="+this.uphoneList.aname+"&uid="+this.userList[0].uid)
                    .then(res=>{
                        if(res.data>0){
                            this.dialogName=false;
                            this.userList[0].uname=this.uphoneList.aname;
                            this.uphoneList.aname='';
                        }
                })
            }else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },jazai:function () {
                if (localStorage.getItem("acc") != null ) {
                    var uid=JSON.parse(localStorage.getItem('acc'))
                    this.$axios.post("http://localhost:8081/UsersController/queryUid?uid="+uid).then(res=>{
                        this.userList=res.data;
                        this.userList1=this.userList[0];
                        this.jequ=this.userList1.photo.replace(this.userList1.photo.substr(4,4),"****");
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
                this.$axios.post("http://localhost:8081/test/show?phone=" + this.uphoneList.phone).then(res => {
                })
            },
            updatePtel(){
                this.$axios.post("http://localhost:8081/UsersController/Uid?uid="+this.userList[0].uid).then(res => {
                    // if(res.data=="1"){
                        this.$refs.upload.submit();
                    // }
                })

            },
            //删除图片
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            //查看图片
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            // 每页显示的条数
            handleSizeChange (val) {
                // 改变每页显示的条数
                this.PageSize = val
                // 注意：在改变每页显示的条数时，要将页码显示到第一页
                this.currentPage = 1
            },
            // 显示第几页
            handleCurrentChange (val) {
                // 改变默认的页数
                this.currentPage = val
            },updatesphoto(uphoneList)
                {
                    this.$refs[uphoneList].validate((valid) => {
                        if (valid) {
                            this.$axios.post("http://localhost:8081/test/content?mobile=" + this.uphoneList.yzm).then(res => {
                                if (res.data === 1) {
                                    this.$axios.post("http://localhost:8081/UsersController/updatephoto?photo=" + this.uphoneList.phone + "&uid=" + this.userList[0].uid).then(res => {
                                        if (res.data > 0) {
                                            this.dialogUpdate = false;
                                            this.userList[0].photo = this.uphoneList.phone;
                                            this.uphoneList.phone='';
                                            this.uphoneList.yzm='';
                                        }
                                    })
                                } else {
                                    alert("验证码有误");
                                }
                            });

                        }else {
                                console.log('error submit!!');
                                return false;
                            }
                        });
                }
        }
    }
</script>

<style scoped>
</style>
