<template>

        <div>
            <div class="head_bar">
                <div class="head_bar_con">
                    <a href="https://www.xiaozhu.com" class="logo_index">小猪</a>
                    <ul class="nav_R">
                        <li>
                            <a rel="nofollow" title="" class="show-register-box" href="https://www.xiaozhu.com/register?next=https%3A%2F%2Fwww.xiaozhu.com%2F">
                                注册
                            </a>
                        </li>
                        <li>&middot;</li>
                        <li><a rel="nofollow" href="https://www.xiaozhu.com/login?next=https%3A%2F%2Fwww.xiaozhu.com%2F" class="logindialog">登录</a></li>
                        <li>&middot;</li>
                        <li class="current">
                            <a href="#ongo" class="openTri_R marginR10">短租指南</a>
                            <div class="head_pop width_58">
                                <div class="pop_column">
                                    <span><a class="fl" href="https://www.xiaozhu.com/xzweb.php?op=Help_UserGuide&type=tenant">房客指南</a><a class="fr" href="https://www.xiaozhu.com/xzweb.php?op=Help_UserGuide&type=landlord">房东指南</a></span>
                                </div>
                            </div>
                        </li>

                        <li><a rel="nofollow" data-href="https://www.xiaozhu.com/publish" class="btn_free show-register-box" id="Pub_Btn">免费发布房间</a></li>
                    </ul>
                </div>
            </div>

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
                        <input class="ipt_search_l r_border" type="text" id="searchcity" name="searchcity" autocomplete="off" value="城市或目的地" />
                        <div id="suggest" class="ac_results2 " style="display:none;"></div>
                        <div class="sug ">
                            <!-- 地址下拉框 -->
                        </div>

                        <div class="result_error_tip err_tip_style" style="display: none;" id="tip_searchcity">

                        </div>
                    </div>
                    <!--<div class="search_column_r">-->
            <!--<span class="icon_place_box" id="calendar_btn_s">-->
                <!--<i class="iconfont search-icon">&#xe748;</i>-->
            <!--</span>-->
                        <!--<input class="ipt_search_r" type="text" readonly="" id="startenddate" name="startenddate"   value="入住离开日期" />-->
                        <!--<input type="hidden" name="startdate" id="startdate" value=""/>-->
                        <!--<input type="hidden" name="enddate" id="enddate" value=""/>-->
                        <!--<div id="calendar-box" class="calendar-box-index" style="display:none"> </div>-->
                    <!--</div>-->
                    <!-- 首页搜索按钮 -->
                    <div class="index-search-box">
                        <input class="btn_pink_search" type="button" value="搜索小猪" onclick="javascript:searchCity('home');" />
                        <span class="icon_place_box">
                <i class="iconfont iconfont-arrow">&#xe7f3;</i>
            </span>
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
                <div class="content_v2" style="border: 2px darkgray solid;height: 500px;">
                    <ul class="rooms_show_ul">
                        <span v-for="info in listinfo" >
                        <li>
                            <input type="text" value="6257935516" class="luId" style="display: none">

                            <img class="img_room" :src="'http://localhost:8081/'+info.bedroom" alt="小猪-西涌（西冲） 舒适宜居宽敞双床房近沙滩" width="400" height="326"/>
                            <span class="img_upCover"></span>
                            <div class="rooms_intro">
                                <img class="img_user_fd" lazy_src="https://image.xiaozhustatic1.com/22/s,5,rQ6K,414,414,2,44ece91c.jpg" />
                                <span class="room_name">{{info.bnbname}} - {{info.city}}</span>
                                <span class="index_price"><em class="bigFont">&#165;</em>198</span>
                            </div>
                            <a href="//sz.xiaozhu.com/fangzi/6257935516.html" target="_blank" class="room_hover" luid="6257935516"></a>
                        </li>
                        </span>
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
    export default {
        name: "Housing_main",
        data(){
            return{
                imagesbox:[
                    {id:0,idView:require("../../static/images/timgBBHO7ZJF.jpg")},
                    {id:1,idView:require("../../static/images/timgSWMA57MC.jpg")},
                    {id:1,idView:require("../../static/images/fang.jpg")},
                    {id:1,idView:require("../../static/images/timgY7KADF2U.jpg")}
                ],
                listinfo:[]
            }
        },
        created:function(){
            this.selectAll();
        },
        methods:{
            selectAll(){
                this.$axios.post('http://localhost:8081/bnbinfo/query')
                    .then(response => {
                        this.listinfo = response.data
                    }).catch(error => {

                })
            }
        }
    }
</script>

<style scoped>
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
