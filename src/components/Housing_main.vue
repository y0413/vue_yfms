<template>
    <div>
        <div>
            <div class="head_bar" >
                <div class="head_bar_con">
                    <a  class="logo_index">小猪</a>
                    <ul class="nav_R">
                        <li>
                            <div v-if="userList[0]==null">
                                <a class="show-register-box" @click="zc()">注册</a>
                            </div>
                        </li>
                        <li>
                            <div v-if="userList[0]==null">
                                <a class="show-register-box" @click="dl()">登录</a>
                            </div>
                            <div v-else>
                                <a class="show-register-box" @click="dl()">{{userList[0].uname}}</a>
                                <div class="head_pop width_58"  id="csr" >
                                    <div class="pop_column">
                                        <div>
                                            <a class="fl" @click="personal()">房客中心</a>

                                            <a v-show="userList[0].state==0" class="fr" @click="fdpersonal()">房东中心</a>
                                            <a @click="dele()">退出</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <!--<li>           </li>-->
                        <li class="current">
                            <a href="#ongo" class="openTri_R marginR10">短租指南</a>
                            <div class="head_pop width_58" id="csre">
                                <div class="pop_column">
                                    <div>
                                        <a class="fl">房东指南</a>
                                        <a class="fr">房客指南</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li><a rel="nofollow" @click="fy()" class="btn_free show-register-box" id="Pub_Btn">免费发布房间</a></li>
                    </ul>
                </div>
            </div>
            <el-dialog width="50%" title="用户登录" :visible.sync="dialogVisible">
                <el-form :model="userSign" status-icon :rules="rules4" ref="userSign" label-width="80px" class="demo-ruleForm">
                    <div class="w_698">
                        <div class="clearfix">
                            <div class="r_main_l">
                                <div id="generalLogin">
                                    <ul class="register_list">
                                        <li>
                                            <el-form-item label="账号" prop="uname">
                                                <el-input style="width: 250px" v-model="userSign.uname" placeholder="手机号" auto-complete="off"></el-input>
                                            </el-form-item>
                                            <el-form-item label="密码" prop="upwd">
                                                <el-input style="width: 250px"  type="password"  v-model="userSign.upwd" auto-complete="off" placeholder="密码"></el-input>
                                            </el-form-item>
                                        </li>
                                    </ul>
                                    <p>还没有注册？<a  class="col_pink show-register-box" @click="zc()">注册账号&gt;&gt;</a></p>
                                    <p style="width: 400px">短信快捷登录？<a  class="col_pink show-register-box" @click="dx()">短信快捷登录&gt;&gt;</a></p>
                                    <el-button style="width: 350px" type="primary" class="r_input mt_10" id="orgBtn" @click="queryName('userSign')">提交</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-form>
            </el-dialog>
            <el-dialog width="50%" title="短信快捷登录" :visible.sync="dialogVisibletade">
                <div class="w_698">
                    <div class="clearfix">
                        <div class="r_main_l">
                            <el-form :model="ksdl" status-icon :rules="rules2" ref="ksdl" label-width="80px" class="demo-ruleForm">
                                <el-form-item label="手机号" prop="phone">
                                    <el-input style="width: 250px" v-model="ksdl.phone" placeholder="手机号" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="验证码" prop="yzm">
                                    <el-input  style="width: 130px" placeholder="验证码" v-model="ksdl.yzm">
                                    </el-input>
                                    <a v-show="show" @click="yzm2()"  class="have-nb">发送验证码</a>
                                    <el-button style="width: 120px;height: 40px" v-show="!show"  class="have-nb" :disabled="diasabledInput">发送成功{{count}}s</el-button>
                                </el-form-item>
                                <el-form-item>
                                    <el-button style="width: 250px" type="primary" @click="usersphoto('ksdl')">登录</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                </div>
            </el-dialog>
            <el-dialog width="50%" title="注册阳房账号" :visible.sync="dialogVisibleta">
                <div class="w_698 login_register_box "  id="registerDialog">
                    <div class="clearfix" >
                        <div class="r_main_l">
                            <el-form :model="userSi" status-icon :rules="rou" ref="userSi" label-width="80px" class="demo-ruleForm">
                                <el-form-item label="手机号" prop="phone">
                                    <el-input v-model="userSi.phone" placeholder="手机号" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="验证码" prop="yzm">
                                    <el-input style="width: 130px" placeholder="验证码" v-model="userSi.yzm" auto-complete="off"></el-input>
                                    <a @click="yzm()"  v-show="show" id="get-code-btn" class="have-nb">重新发送</a>
                                    <el-button style="width: 120px;height: 40px" v-show="!show"  class="have-nb" :disabled="diasabledInput">发送成功{{count}}s</el-button>
                                </el-form-item>
                                <el-form-item label="用户名" prop="uname">
                                    <el-input  placeholder="用户名" v-model="userSi.uname" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="密码" prop="upwd">
                                    <el-input  type="password" placeholder="密码" v-model="userSi.upwd" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button style="width: 250px" type="primary" @click="addusers('userSi')">注册</el-button>
                                </el-form-item>
                            </el-form>
                        </div>

                    </div>
                </div>
            </el-dialog>
        </div>
<!--<Header></Header>-->

        <div class="banner_con" style="height: 720px">
            <el-carousel indicator-position="outside" height="720px">
                <el-carousel-item v-for="item in imagesbox" :key="item.id">
                    <img :src="item.idView"
                         name="indeximage" style="height: 720px;width: 1550px"  alt="小猪"/>
                </el-carousel-item>
            </el-carousel>

            <div class="search_index search_index_home" style="margin-left: -250px">
                <div class="search_column_l">
                    <span class="icon_place_box" id="suggest_icon"><i class="iconfont search-icon">&#xe7bf;</i></span>
                    <input class="ipt_search_l r_border" type="text" id="searchcity" name="searchcity" autocomplete="off" placeholder="城市或目的地" />
                    <div id="suggest" class="ac_results2 " style="display:none;"></div>
                    <div class="sug ">
                        <!-- 地址下拉框 -->
                    </div>

                    <div class="result_error_tip err_tip_style" style="display: none;" id="tip_searchcity">
                    </div>
                </div>

                <div class="index-search-box" >
                    <input class="btn_pink_search" type="button" value="搜索小猪" @click="cityquery(city)" />
                    <span class="icon_place_box"></span>
                </div>
            </div>
            <span class="pics_pre" onclick="pre_pic()" style="display:none;"></span>
            <span class="pics_next" onclick="next_pic()" style="display:none;"></span>
            <span class="bg_up"></span>
            <span class="bg_down"></span>
        </div>

        <div class="rooms_show" id="load_Ajax_IndexRecommend">
            <div class="index_T">
                <h1>别住酒店，住阳房</h1>
                <span>莫愁前路无知己，天下谁人不识君 </span>
            </div>
            <div class="content_v2" >
                <ul class="rooms_show_ul" style="width:1300px">
                    <li >         <img class="img_room city_big"  lazy_src="finish" width="820" height="326" src="https://www.xiaozhu.com/images/index_city/city_hz_big.jpg">
                        <div class="rooms_intro city_big">
                            <span class="room_name">最忆西湖  ·  杭州</span><br>
                            <!--<span class="index_price">10000+<em class="bigFont">套</em></span>-->
                        </div>
                        <a @click="cityquery('杭州市')" class="room_hover" target="_blank"></a>
                        <input type="text" value="26" class="cityId" style="display: none">
                    </li>
                    <li >         <img class="img_room"  lazy_src="finish" width="400" height="326" src="https://www.xiaozhu.com/images/index_city/city_sh.jpg">
                        <div class="rooms_intro city_top">
                            <!--<span class="index_price">20000+<em class="bigFont">套</em></span>-->
                            <span class="room_name">东方之珠  ·  上海</span>
                        </div>
                        <a @click="cityquery('上海市')" class="room_hover" target="_blank"></a>
                        <input type="text" value="13" class="cityId" style="display: none">
                    </li>
                        <span v-for="info in listinfo" >
                        <li>
                            <input type="text" value="6257935516" class="luId" style="display: none">
                            <img class="img_room" :src="'http://localhost:8081/'+info.bedroom" alt="小猪-西涌（西冲） 舒适宜居宽敞双床房近沙滩" width="400" height="326"/>
                            <span class="img_upCover"></span>
                            <div class="rooms_intro">
                                <img class="img_user_fd" lazy_src="https://image.xiaozhustatic1.com/22/s,5,rQ6K,414,414,2,44ece91c.jpg" />
                                <span class="room_name">{{info.bnbname}} - {{info.city}}</span>
                                <span class="index_price"><em class="bigFont">&#165;</em>{{info.price}}</span>
                            </div>
                            <a @click="details(info.bnbid)" target="_blank" class="room_hover" ></a>
                        </li>
                        </span>
                    <li>         <img class="img_room city_big"  lazy_src="finish" width="820" height="326" src="../../static/images/city_xa_big.jpg">
                        <div class="rooms_intro city_big">
                            <span class="room_name">千年古都  ·  西安</span><br>
                            <!--<span class="index_price">10000+<em class="bigFont">套</em></span>-->
                        </div>
                        <a @click="cityquery('西安市')" class="room_hover" target="_blank"></a>
                        <input type="text" value="176" class="cityId" style="display: none">
                    </li>
                </ul>
            </div>
        </div>
        <div class="index_T">
            <h1>让分享和信赖悄然发生</h1>
            <span>完善的安全机制和信用机制，帮助房东和房客</span>
        </div>
        <div class="content_v2 marginB30">
            <ul class="xz_ads">
                <li><span class="xzindexad1"></span><a href="#ongo" class="ads_hover indexdialogpic" name="authentication" ></a></li>
                <li><span class="xzindexad2"></span><a href="#ongo" class="ads_hover indexdialogpic" name="transaction" ></a></li>
                <li><span class="xzindexad3"></span><a href="#ongo" class="ads_hover indexdialogpic" name="protection" ></a></li>
                <li class="nobor"><span class="xzindexad4"></span><a href="#ongo" class="ads_hover indexdialogpic" name="comment"  ></a></li>
            </ul>
        </div>
        <div class="index_commnet">
            <div class="index_T">
                <h1 class="white">世间所有的相遇都是久别重逢</h1>
                <span class="white">房客和房东都在彼此感动着</span>
            </div>
            <div id="commentdiary">
            </div>
        </div>
        <!--底部-->
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
    </div>
</template>

<script>
    import header from "../components/Housing_header.vue"
    export default {
        name: "Housing_main",
        inject:['reload'],
        data(){
            var validateregphone= (rule, value, callback) => {
            var phone1 =/^[1][3,4,5,7,8][0-9]{9}$/.test(value);
            if (value === '') {
                callback(new Error('请输入手机号'));
            } else if (phone1) {
                callback();
            } else {
                callback(new Error('手机号格式不正确!'));
            }
        };
            return{
                rules4: {
                    uname: [
                        {required:true,message:'账号不能为空',trigger:'blur'}
                    ],
                    upwd: [
                        {required:true,message:'密码不能为空',trigger:'blur'}
                    ]

                },
                rou:{
                    phone:[
                        {required:true,message:'手机号不能为空',trigger:'blur'},
                        {validator: validateregphone, trigger: 'blur'}

                    ],
                    yzm :[
                        {required:true,message:'验证码不能为空',trigger:'blur'},
                        {min:4,max:8,message:'验证码要4-8位',trigger:['change','blur']}

                    ],
                    uname:[
                        {required:true,message:'用户名不能为空',trigger:'blur'},

                    ],
                    upwd:[
                        {required:true,message:'密码不能为空',trigger:'blur'},
                        {min:5,max:10,message:'密码5-10位',trigger:['change','blur']}

                    ]
                },
                rules2:{
                    phone:[
                        {required:true,message:'手机号不能为空',trigger:'blur'},
                        {validator: validateregphone, trigger: 'blur'}

                    ],
                    yzm:[
                        {required:true,message:'验证码不能为空',trigger:'blur'}
                    ]
                },
                che:true,
                ksdl:{},
                userSign:{},
                userSi:{},
                dialogVisible:false,
                dialogVisibleta:false,
                dialogVisibletad:false,
                dialogVisibletade:false,
                userList:{},
                diasabledInput:true,
                phone:"",
                yzm1:"",
                show: true,
                count: '',
                timer: null,
                city:"",
                imagesbox:[
                    {id:0,idView:require("../../static/images/timgBBHO7ZJF.jpg")},
                    {id:1,idView:require("../../static/images/timgSWMA57MC.jpg")},
                    {id:1,idView:require("../../static/images/fang.jpg")},
                    {id:1,idView:require("../../static/images/timgY7KADF2U.jpg")}
                ],
                listinfo:[]
            }
        },
        components:{
            Header:header
        },
        created:function (){
            if(localStorage.getItem('acc')!=null){

                var uid=JSON.parse(localStorage.getItem('acc'))
                this.$axios.post("http://localhost:8081/UsersController/queryUid?uid="+uid).then(res=>{
                    this.userList=res.data;
                    localStorage.setItem('acc',JSON.stringify(this.userList[0].uid));
                    this.dialogVisible=false;

                })

            }
            this.selectAll();

        },methods:{
            cityquery(city){
                this.$router.push({name:"Housing_search",params:{city}});
            },
            fy(){
                var uid=JSON.parse(localStorage.getItem('acc'))
                if(uid==null){
                    this.$message.error("请先登录")
                }else{
                    this.$router.push({name:"Housing_info"})
                }

            },
            selectAll(){
                this.$axios.post('http://localhost:8081/bnbinfo/query')
                    .then(response => {
                        this.listinfo = response.data
                    }).catch(error => {

                })
            }, queryName(userSign)
            {
                this.$refs[userSign].validate((valid) => {
                    if (valid) {
                        this.$axios.post("http://localhost:8081/UsersController/queryName?uname="+
                            this.userSign.uname+"&upwd="+this.userSign.upwd).then(res=>{
                            if(res.data!=""){
                                var uid=res.data[0].uid;
                                this.$axios.post("http://localhost:8081/UsersController/queryUid?uid="+uid).then(res=>{
                                    this.$message({
                                        message: '登录成功',
                                        type: 'success'
                                    });
                                    this.userList=res.data;
                                    localStorage.setItem('acc',JSON.stringify(this.userList[0].uid));
                                    this.dialogVisible=false;
                                    this.reload();
                                })

                            }else {
                                this.$message.error("登录失败")
                        }
                        })}else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            usersphoto (ksdl)
            {
                this.$refs[ksdl].validate((valid) => {
                    if (valid) {
                        this.$axios.post("http://localhost:8081/test/content?mobile="+this.ksdl.yzm).then(res=>{
                            if(res.data===1){
                                this.$message({
                                    message: '登录成功',
                                    type: 'success'
                                });
                                this.$axios.post("http://localhost:8081/test/usersphoto?photo="+this.ksdl.phone).then(res=>{
                                    localStorage.setItem('acc',JSON.stringify(res.data));
                                    this.userList=JSON.parse(localStorage.getItem('acc'));

                                    this.dialogVisibletade=false;
                                })
                            }else   {
                                this.$message.error("验证码有误")
                            }
                        })
                    }else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },getCode(){
                const TIME_COUNT = 20;
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.show = false;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--;
                            this.diasabledInput=true;
                        } else {
                            this.show = true;
                            clearInterval((this.timer));
                            this.timer = null;
                            this.diasabledInput=false;

                        }
                    }, 1000)
                }
            },
            dele(){
                localStorage.clear();
                this.reload();
            },
            zc:function () {
                this.dialogVisible=false;
                this.dialogVisibleta=true;
            },dl:function () {
                this.dialogVisible=true;
                this.dialogVisibleta=false;
            },xg:function () {
                this.dialogVisibletad=false;
                this.dialogVisibleta=true;
            },dx:function () {
                this.dialogVisible=false;
                this.dialogVisibletade=true;
            },zm:function () {
                this.dialogVisibletade=false;
                this.dialogVisible=true;
            },yzm:function () {
                this.$axios.post("http://localhost:8081/test/show?phone=" + this.userSi.phone).then(res => {
                    this.getCode();
                })
            }, yzm2:function () {
                this.$axios.post("http://localhost:8081/test/show?phone=" + this.ksdl.phone).then(res => {
                    this.getCode();
                })
            }, addusers(userSi){
                this.$refs[userSi].validate((valid) => {
                    if (valid) {
                        this.$axios.post("http://localhost:8081/test/content?mobile="+this.userSi.yzm).then(res=>{
                            if(res.data===1){
                                this.$axios.post("http://localhost:8081/test/addusers?uname="+this.userSi.uname+"&upwd="+this.userSi.upwd+"&photo="+this.userSi.phone).then(res=>{
                                    if(res.data>0){
                                        this.$message({
                                            message: '注册成功',
                                            type: 'success'
                                        });
                                        this.dl();
                                    }
                                })
                            }else {
                                this.$message.error("验证码有误")
                            }
                        })
                    }else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },personal:function () {
                this.$router.push({name: 'Housing_personal'})
            },
            fdpersonal:function () {
                this.$router.push({name: 'Housing_fdpersonal'})
            },
            details(bnbid){
                this.$router.push({name: 'Housing_details',params: {bnbid}})
            }
        }
    }
</script>

<style scoped>
    .el-dialog__body {
        padding: 30px 20px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
        padding: 0px;
    }
    .w_698, .w_698_1 {
        width: 638px;
        padding: 30px;
        padding: 0px;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    #csr{
        position: absolute;
        left: -35px;
        width: 78px;
    }
    #csre{
        position: absolute;
        left: -35px;
        width: 78px;
    }

</style>
