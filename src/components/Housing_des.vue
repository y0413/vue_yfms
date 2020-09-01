<template>
    <div>
        <div class="top"></div>
        <div class="o_mask" id='maskName'  style="display:none;"></div>
        <div class="detail_wrapper">
            <div class="detail_head clearfix">
                <a href="https://www.xiaozhu.com" class="xz_logo_detail">阳房</a><span class="slogan_v2 slogan_black"></span>
                <ul class="nav_R nav_commen">
                    <input type="hidden" value="landlord" id="userCurrentRole"/>
                    <input type="hidden" value="144260581897" id="loginUserId"/>
                    <li class="current">
                        <a href="" class="openTri_R" rel="nofollow">用户名称</a>
                        <div class="head_pop top40">
                            <div class="pop_column">
                                <a class="pop_T" href="">房东中心</a>
                                <span>
                                    <a class="fl" href="">订单管理</a>
                                    <a class="fr" href="">结算统计</a>
                                </span>
                                <span>
                                    <a class="fl" href="">我的点评</a>
                                    <a class="fr" href="">个人资料</a>
                                </span>
                            </div>
                            <div class="pop_column">
                                <a class="pop_T pop_bor" href="">房客中心</a>
                                <span>
                                    <a class="fl" href="">我的订单</a>
                                    <a class="fr" href="">我的点评</a>
                                    <a class="fl" href="">个人资料</a>
                                    <a class="fr" href="">退出</a>
                                </span>
                            </div>
                        </div>
                    </li>

                    <li class="current">
                        <a href="" class="openTri_R">短租指南</a>
                        <div class="head_pop width_58 top40">
                            <div class="pop_column">
                                <span><a class="fl" href="">房客指南</a><a class="fr" href="https://www.xiaozhu.com/xzweb.php?op=Help_UserGuide&type=landlord">房东指南</a></span>
                            </div>
                        </div>
                    </li>

                    <li>
                        <a rel="nofollow" data-href="" class="btn_free" id = "Pub_Btn">免费发布房源</a>
                    </li>
                </ul>
            </div>

            <div class='h_top_box'>
                <div style="margin-left: 12%;margin-right: 10%;margin-top: 2%">
                    <el-steps :active="0" finish-status="success">
                        <el-step title="房源信息"></el-step>
                        <el-step title="房源描述"></el-step>
                        <el-step title="设施照片"></el-step>
                    </el-steps>
                </div>
            </div>

            <div class="h_wrap pb20 mt20">
                <el-form style="text-align: left;margin: 0px 20px; "label-width="80px" :model="des">
                         <!--class="form" :rules="rules" ref="fm">-->
                <h4 class="h_tit">房源描述</h4>
                <div class="h_room_box">
                    <div class="h_room_ms clearfix" style="position: relative;">
                        <label style="width: 100%;">房源标题：<span style="margin-left: 15px;">
                            精炼的介绍特点和优势，让房客在第一时间对你的房源感兴趣</span></label>
                        <div class="h_room_msg1 " style="margin-left:90px;">
                            <el-tooltip class="item" effect="dark" placement="right-start">
                                <div slot="content">
                                    建议格式：地标＋出租类型＋房源形容词<br>
                                    例如：国贸双井10号线地铁阳光充沛的大床房整租<br>
                                    请不要使用旅馆、旅店、招待所、浴池、计时休息、英租、法租、租界等词汇<br>
                                </div>

                                <input type="text" placeholder="请填写" class="room_input input_detail" id="roomtitle"
                                        name="roomtitle" value="" onkeyup='changeFlag = true;' v-model="des.title"/>
                            </el-tooltip>
                        </div>
                    </div>

                    <div class="h_room_ms clearfix" style="position: relative;">
                        <label style="width: 100%;">个性描述：<span style="margin-left: 15px;">
                            向房客介绍一下自己的兴趣爱好，告诉房客能体验到的不一样的特色或服务有哪些</span><br />（选填）</label>
                        <div class="h_room_msg1 h_room_msg12" style="margin-left:90px;">
                            <el-tooltip class="item" effect="dark" placement="right-start">
                                <div slot="content">
                                    例如：你将结识一个热情、爱分享、喜欢音乐的IT男生<br/>
                                    希望与你一同感受胡同里的悠闲与自在。<br/>
                                    请不要使用旅馆、旅店、招待所、浴池、计时休息、英租、法租、租界等词汇<br/>
                                </div>
                                <textarea rows="6" autoHeight="true" placeholder="请填写" class="room_msg textarea_detail"
                                          id = "roomServiceIntro" name="roomServiceIntro" v-model="des.desbes"></textarea>
                            </el-tooltip>
                        </div>
                    </div>

                    <div class="h_room_ms clearfix" style="position: relative;">
                        <label style="width: 100%;">内部情况：<span style="margin-left: 15px;">
                            房屋内装修和装饰的风格，以及主要配套设施的介绍</span></label>
                        <div class="h_room_msg1 " style="margin-left:90px;">
                            <div class="msg_tip" style='display:none'>
                                <div class="msg_tip_arrow"></div>
                                例如：欧式田园小清新风格的装修，配备舒适的大床和床垫，相信您一定会舒舒服服的睡个好觉！
                                除此之外卧室还有空调、衣柜、挂墙液晶电视、免费百兆wifi、以及独立的卫生间哦（24小时热水是妥妥的）！如果您想做饭，
                                厨房免费提供给您，厨具调料齐备，快来大展厨艺吧！<br/>
                                请不要使用旅馆、旅店、招待所、浴池、计时休息、英租、法租、租界等词汇<br/>
                            </div>
                            <el-tooltip class="item" effect="dark" placement="right-start">
                                <div slot="content">
                                    例如：欧式田园小清新风格的装修,配备舒适的大床和床垫,舒舒服服的睡个好觉！<br/>
                                    除此之外卧室还有空调、挂墙液晶电视、免费百兆wifi、以及独立的卫生间哦<br/>
                                    （24小时热水是妥妥的）！<br/>
                                    请不要使用旅馆、旅店、招待所、浴池、计时休息、英租、法租、租界等词汇<br/>
                                </div>
                                <textarea rows="6" autoHeight="true" placeholder="请填写" class="room_msg textarea_detail"
                                          id= "roomRoominnerIntro"  name="roomRoominnerIntro" v-model="des.internal"></textarea>
                            </el-tooltip>
                        </div>
                    </div>

                    <div class="h_room_ms clearfix" style="position: relative;">
                        <label style="width: 100%;">交通情况：<span style="margin-left: 15px;">
                            房源所处位置，以及周边交通情况的描述</span><br />（选填）</label>
                        <div class="h_room_msg1 h_room_msg12" style="margin-left:90px;">
                            <el-tooltip class="item" effect="dark" placement="right-start">
                                <div slot="content">
                                    例如：位于安定门外大街，从安定门地铁站A口5分钟即到<br/>
                                    楼下还有27路、119路等多条公交线路，十分方便。<br/>
                                    请不要使用旅馆、旅店、招待所、浴池、计时休息、英租、法租、租界等词汇<br/>
                                </div>
                                <textarea rows="6" autoHeight="true" placeholder="请填写" class="room_msg textarea_detail"
                                          id= "roomLocationIntro" name="roomLocationIntro" v-model="des.traffic"></textarea>
                            </el-tooltip>
                        </div>
                    </div>

                    <div class="h_room_ms clearfix" style="position: relative;">
                        <label style="width: 100%;">周边情况：<span style="margin-left: 15px;">
                            房源所在楼宇和小区的基本情况，以及周边商超、景点、银行、医院等配套设施等情况</span><br />（选填）</label>
                        <div class="h_room_msg1 h_room_msg12" style="margin-left:90px;">
                            <el-tooltip class="item" effect="dark" placement="right-start">
                                <div slot="content">
                                    例如：楼宇内安装有进口大品牌电梯，楼道干净整洁。<br/>
                                    同时小区内绿树环抱、清新怡人，安静的只有风吹树叶声。<br/>
                                    物业管理安全有序，24小时保安巡视，让您住的安全放心。<br/>
                                    小区周边设施齐全，餐饮设施有肯德基、永和大王、老上海城隍庙小吃等，<br/>
                                    金融机构有建设银行、中国银行等，医疗服务有解放军总医院。<br/>
                                    请不要使用旅馆、旅店、招待所、浴池、计时休息、英租、法租、租界等词汇<br/>
                                </div>
                                <textarea rows="6" autoHeight="true" placeholder="请填写" class="room_msg textarea_detail"
                                          id= "roomAroundIntro" name="roomAroundIntro" v-model="des.spots"></textarea>
                            </el-tooltip>
                        </div>
                    </div>
                    <div class="h_room_ms clearfix" style="position: relative;">
                        <label style="width: 100%;">房客要求：<span style="margin-left: 15px;">
                            对房客的一些要求</span><br />（选填）</label>
                        <div class="h_room_msg1 h_room_msg12" style="margin-left:90px;">
                            <el-tooltip class="item" effect="dark" placement="right-start">
                                <div slot="content">
                                    例如：请房客不要在室内抽烟<br/>
                                </div>
                                <textarea rows="6" autoHeight="true" placeholder="请填写" class="room_msg textarea_detail"
                                          id= "roomLocationIntro" name="roomLocationIntro" v-model="des.requirement"></textarea>
                            </el-tooltip>
                        </div>
                    </div>
                </div>
                </el-form>
            </div>

            <div class="w_960 pb20 clearfix">
                <!--<a class="keep_btn" href="javascript:;" id="roomDetailSave">保存并继续</a>-->
                <el-button round @click="addDes(),next()">保存并继续</el-button>
            </div>

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
    </div>
</template>

<script>
    export default {
        name: "Housing_des",
        data(){
            return {
                //添加描述集合
                des:{},
                rules:{
                    title:[
                        { required: true, message: '请输入房源标题', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    internal:[
                        { required: true, message: '请输入内部情况', trigger: 'blur' },
                        { min: 10, max: 50, message: '长度在 10 到 50 个字符', trigger: 'blur' }
                    ]
                 }
            }
        },methods:{
            addDes(){  //添加房源描述
                this.$axios.post('http://localhost:8081/bnbinfo/addDes',this.des)
                    .then(res => {
                        if (res.data === 1){
                            this.$message.success({message:'添加成功'})
                            this.$router.push({name:"Housing_fac"});
                        } else {
                            this.$message.error('添加失败');
                        }
                    });
            }, next() {  //步骤条
                if (this.active++ > 2) this.active = 0;
            }
        }
    }
</script>

<style scoped>

</style>
