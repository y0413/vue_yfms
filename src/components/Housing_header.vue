<template>
    <div>
        <div class="head_bar" style="background-color: black">
            <div class="head_bar_con">
                <a href="https://www.xiaozhu.com" class="logo_index">小猪</a>
                <ul class="nav_R">
                    <li>
                        <div v-if="userList[0]==null">

                            <a class="show-register-box" @click="zc()">注册</a>
                        </div>
                    </li>
                    <li >
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
        <el-dialog width="50%"  :visible.sync="dialogVisible">
            <el-form :model="userSign" status-icon :rules="rules2" ref="userSign" label-width="80px" class="demo-ruleForm">
                <div class="w_698">
                    <div class="clearfix">
                        <div class="r_main_l">
                            <ul class="r_tab clearfix">
                                <p>用户登录</p>
                            </ul>
                            <div id="generalLogin">
                                <ul class="register_list">
                                    <li>
                                        <el-form-item label="账号" prop="uname">
                                            <input v-model="userSign.uname" class="r_input_1"   placeholder="手机号,邮箱">
                                        </el-form-item>
                                        <el-form-item label="密码" prop="upwd">
                                            <input type="password" class="r_input_1"  v-model="userSign.upwd" auto-complete="off" placeholder="密码">
                                        </el-form-item>
                                    </li>
                                </ul>
                                <el-button style="width: 350px" type="primary" class="r_input mt_10" id="orgBtn" @click="queryName()">提交</el-button>
                                <div class="r_login_space clearfix"><span class="fl cur "><input class="ipt-checkbox2" type="checkbox" id="setcookie" checked="checked" />自动登录</span>
                                    <span class="fr col_gray"><a href="https://www.xiaozhu.com/findpwdbyphone">忘记密码?</a></span></div>
                            </div>
                        </div>
                        <div class="r_main_r">
                            <h5>合作网站账户登录</h5>
                            <ul class="r_wedsitev1">
                                <li>
                                    <a class="hz_qqv1" href="https://www.xiaozhu.com/xzweb.php?op=GetOpenSnsAuthUrl&snsType=qqzone&state=login&next=https%3A%2F%2Fwww.xiaozhu.com%2F"><i></i>QQ登录</a>
                                </li>
                            </ul><p>还没有注册？<a  class="col_pink show-register-box" @click="zc()">注册账号&gt;&gt;</a></p>
                            <p style="width: 400px">短信快捷登录？<a  class="col_pink show-register-box" @click="dx()">短信快捷登录&gt;&gt;</a></p>
                        </div>
                    </div>
                </div>
            </el-form>
        </el-dialog>
        <el-dialog width="50%" title="短信快捷登录" :visible.sync="dialogVisibletade">
            <div class="w_698">
                <div class="clearfix">
                    <div class="r_main_l">
                        <el-form>
                            <el-form-item label="手机号" prop="phone">
                                <el-input style="width: 250px" v-model="phone" placeholder="手机号" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="验证码" prop="yzm">
                                <el-input style="width: 130px" placeholder="验证码" v-model="yzm1" auto-complete="off"></el-input>
                                <a @click="yzm()"  class="have-nb">重新发送</a>
                            </el-form-item>
                            <el-form-item>
                                <el-button style="width: 250px" type="primary" @click="usersphoto()">登录</el-button>
                            </el-form-item>
                        </el-form>
                        <span class="check_css3 agreeResBox">
                            <input type="checkbox"  class="input_check" id="check4">
                            <label for="check4"></label>
                                    我同意  <a href="https://www.xiaozhu.com/help/service" class="r-service-protocol" target="_blank">《服务协议》、</a><a href="https://www.xiaozhu.com/help/privacy" class="r-service-protocol" target="_blank">《隐私保护声明》</a>
                                 </span>
                    </div>
                    <div class="r_main_r">
                        <h5>合作网站账户登录</h5>
                        <ul class="r_wedsitev1">
                            <li>
                                <a class="hz_qqv1" href="https://www.xiaozhu.com/xzweb.php?op=GetOpenSnsAuthUrl&snsType=qqzone&state=login&next=https%3A%2F%2Fwww.xiaozhu.com%2F"><i></i>QQ登录</a>
                            </li>
                        </ul>
                        <p class="">已有账号？<a  class="col_pink logindialog" @click="dl()">登录&gt;&gt;</a></p>
                    </div>
                </div>
            </div>
        </el-dialog>
        <el-dialog width="50%" title="注册小猪账号" :visible.sync="dialogVisibleta">
            <div class="w_698 login_register_box "  id="registerDialog">
                <div class="clearfix">
                    <div class="r_main_l">
                        <el-form :model="userSign" status-icon :rules="rules2" ref="userSign" label-width="80px" class="demo-ruleForm">
                            <el-form-item label="手机号" prop="phone">
                                <el-input v-model="phone" placeholder="手机号" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="验证码" prop="yzm">
                                <el-input style="width: 130px" placeholder="用户名" v-model="yzm1" auto-complete="off"></el-input>
                                <a @click="yzm()" id="get-code-btn" class="have-nb">重新发送</a>
                            </el-form-item>
                            <el-form-item label="用户名" prop="uname">
                                <el-input  placeholder="用户名" v-model="userSign.uname" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="upwd">
                                <el-input  type="password" placeholder="密码" v-model="userSign.upwd" auto-complete="off"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button style="width: 250px" type="primary" @click="addusers()">注册</el-button>
                            </el-form-item>
                        </el-form>
                        <span class="check_css3 agreeResBox">
                            <input type="checkbox"  class="input_check" id="check3">
                            <label for="check3"></label>
                                    我同意  <a href="https://www.xiaozhu.com/help/service" class="r-service-protocol" target="_blank">《服务协议》、</a><a href="https://www.xiaozhu.com/help/privacy" class="r-service-protocol" target="_blank">《隐私保护声明》</a>
                                 </span> </div>
                    <div class="r_main_r">
                        <h5>合作网站账户登录</h5>
                        <ul class="r_wedsitev1">
                            <li>
                                <a class="hz_qqv1" href="https://www.xiaozhu.com/xzweb.php?op=GetOpenSnsAuthUrl&snsType=qqzone&state=login&next=https%3A%2F%2Fwww.xiaozhu.com%2F"><i></i>QQ登录</a>
                            </li>
                        </ul>
                        <p class="">已有账号？<a id="loginDialogBtn" class="col_pink logindialog" @click="dl()">登录&gt;&gt;</a></p>
                    </div>
                </div>

            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "Housing_header",
        inject:['reload'],
        data(){
            return{
                userSign:{},
                dialogVisible:false,
                dialogVisibleta:false,
                dialogVisibletad:false,
                dialogVisibletade:false,
                userList:{},
                phone:"",
                yzm1:"",

                imagesbox:[
                    {id:0,idView:require("../../static/images/timgBBHO7ZJF.jpg")},
                    {id:1,idView:require("../../static/images/timgSWMA57MC.jpg")},
                    {id:1,idView:require("../../static/images/fang.jpg")},
                    {id:1,idView:require("../../static/images/timgY7KADF2U.jpg")}
                ],
                listinfo:[]
            }
        },created:function (){
            if(localStorage.getItem('acc')!=null){
                // alert(1)
                // this.$axios.post("http://localhost:8081/UsersController/queryUid?uid="+1).then(res=>{
                //     this.userList=res.data;
                //
                //     // this.dialogVisibletade=false;
                // })
                var uid=JSON.parse(localStorage.getItem('acc'))
                this.$axios.post("http://localhost:8081/UsersController/queryUid?uid="+uid).then(res=>{
                    this.userList=res.data;
                    localStorage.setItem('acc',JSON.stringify(this.userList[0].uid));
                    this.dialogVisible=false;
                    // this.reload();
                })
                // this.userList.uname="nh";
                // this.userList=JSON.parse(localStorage.getItem('acc'));
            }
            this.selectAll();
            // this.reload();
        },methods:{
            fy(){
                this.$router.push("Housing_info");
            },
            selectAll(){
                this.$axios.post('http://localhost:8081/bnbinfo/query')
                    .then(response => {
                        this.listinfo = response.data
                    }).catch(error => {

                })
            },
            queryName:function () {
                this.$axios.post("http://localhost:8081/UsersController/queryName?uname="+
                    this.userSign.uname+"&upwd="+this.userSign.upwd).then(res=>{
                    if(res.data!=""){
                        var uid=res.data[0].uid;
                        this.$axios.post("http://localhost:8081/UsersController/queryUid?uid="+uid).then(res=>{
                            this.userList=res.data;
                            localStorage.setItem('acc',JSON.stringify(this.userList[0].uid));
                            this.dialogVisible=false;
                            this.reload();
                        })
                        // this.dialogVisible=false;
                        // localStorage.setItem('acc',JSON.stringify(res.data));
                        // this.reload();
                    }else {
                        alert("登录失败");
                    }
                }).catch(err=>{
                })
            },
            usersphoto:function(){
                this.$axios.post("http://localhost:8081/test/content?mobile="+this.yzm1).then(res=>{
                    if(res.data===1){
                        alert("登录成功");
                        this.$axios.post("http://localhost:8081/test/usersphoto?photo="+this.phone).then(res=>{
                            localStorage.setItem('acc',JSON.stringify(res.data));
                            this.userList=JSON.parse(localStorage.getItem('acc'));

                            // this.userList=JSON.parse(localStorage.getItem('acc'));

                            this.dialogVisibletade=false;
                        })
                    }else {
                        alert("验证码有误");
                    }
                });

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
                this.$axios.post("http://localhost:8081/test/show?phone="+this.phone).then(res=>{
                })
            },addusers:function () {
                this.$axios.post("http://localhost:8081/test/content?mobile="+this.yzm1).then(res=>{
                    if(res.data===1){
                        this.$axios.post("http://localhost:8081/test/addusers?uname="+this.userSign.uname+"&upwd="+this.userSign.upwd+"&photo="+this.phone).then(res=>{
                            if(res.data>0){
                                alert("注册成功");
                                this.dl();
                            }
                        })
                    }else {
                        alert("验证码有误");
                    }
                })
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
