<template>
    <el-container>
        <el-header>
            <div class="header height56">
                <div class="top"></div>
                <div class="top_wraper">
                    <div class="top_con">
                        <link rel="stylesheet" type="text/css" href="//jci.xiaozhustatic1.com/e20200803/xzcss?css=houseHover,realNamePop,jquery-ui,nyroModal" />
                        <div class="o_mask" id='maskName'  style="display:none;"></div>
                        <a class="logo_v2 logo_black" href="https://www.xiaozhu.com">小猪</a>
                        <span style="color: #fff;font-size: 19px;float: left;margin: 13px 0 0 10px;"> 酒店之外，就住阳房</span>
                        <input type="hidden" value="tenant" id="userCurrentRole"/>
                        <input type="hidden" value="144260581897" id="loginUserId"/>
                        <ul class="nav">
                            <li class="active">
                                <a class="icon_zhinan"  href="https://www.xiaozhu.com/xzweb.php?op=FangDong_Index" rel="nofollow">用户名</a>
                                <div class="sel_box sel_fd">
                                    <p class="p1"><a href="https://www.xiaozhu.com/xzweb.php?op=FangDong_Index"><strong>房东中心</strong></a></p>
                                    <div class="twobox clearfix">
                                        <a href="https://www.xiaozhu.com/xz_web2/order/pages/landlord/orderList.html">订单管理</a>
                                        <a href="https://www.xiaozhu.com/xzweb.php?op=FangDong_SettlementInfo">结算统计</a>
                                        <a href="https://www.xiaozhu.com/xzweb.php?op=FangDong_ShowLetter">聊天记录</a>
                                        <a href="https://www.xiaozhu.com/xzweb.php?op=FangDong_Comment&filterType=waitComment&fkCmtFilter=all">我的点评</a>
                                        <a href="https://www.xiaozhu.com/xzweb.php?op=FangDong_MyRooms">房源信息</a>
                                        <a href="https://www.xiaozhu.com/xzweb.php?op=FangDong_MyRentCalendarList">价格房态</a>
                                        <a href="https://www.xiaozhu.com/xzweb.php?op=FD_DiaryList">短租日记</a>
                                        <a href="https://www.xiaozhu.com/xzweb.php?op=FangDong_UserInfo">个人资料</a>
                                    </div>
                                    <p class="p1"><a href="https://www.xiaozhu.com/xzweb.php?op=FangKe_Index"><strong>房客中心</strong></a></p>
                                    <div class="twobox clearfix">
                                        <a href="https://www.xiaozhu.com/xz_web2/order/pages/lodger/list.html">我的订单</a>
                                        <a href="https://www.xiaozhu.com/xzweb.php?op=FangKe_ShowLetter">聊天记录</a>
                                        <a href="https://www.xiaozhu.com/xzweb.php?op=FangKe_Comment">我的点评</a>
                                        <a href="https://www.xiaozhu.com/xzweb.php?op=FangKe_UserInfo">个人资料</a>
                                    </div>
                                    <p class="exit"><a href="https://www.xiaozhu.com/logout" id="IM-Logout">退出</a></p>
                                </div>
                            </li>
                            <li><span class="line_index"></span></li>
                            <li class="active">
                                <a class="icon_zhinan" href="#ongo">短租指南</a>
                                <div class="sel_box sel_zhinan">
                                    <a href="https://www.xiaozhu.com/xzweb.php?op=Help_UserGuide&type=tenant">房客指南</a>
                                    <a href="https://www.xiaozhu.com/xzweb.php?op=Help_UserGuide&type=landlord">房东指南</a>
                                </div>
                            </li>
                        </ul>
                        <!---->
                        <div class="overF_hidden height100">
                        </div>
                    </div>
                </div>
            </div>
        </el-header>
        <el-main >
            <el-tabs :tab-position="tabPosition='left'" style="height: 500px" type="border-card">
                <el-tab-pane class="el-icon-s-order" label="我的订单">我的订单·
                    <el-tabs v-model="activeName" @tab-click="handleClick"  style="height: 700px;width: 1000px">
                        <el-tab-pane label="进行中" name="first">进行中</el-tab-pane>
                        <el-tab-pane label="已结束" name="second">已结束</el-tab-pane>
                    </el-tabs>
                </el-tab-pane>
                <el-tab-pane class="el-icon-user" label="个人资料">
                    个人资料
                </el-tab-pane>
                <el-tab-pane class="el-icon-star-off" label="我的收藏">
                    我的收藏
                </el-tab-pane>
                <el-tab-pane class="el-icon-lock"  label="密码设置">
                    密码设置
                </el-tab-pane>
                <el-tab-pane class="el-icon-setting" label="注销账号">
                    注销账号
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
    export default {
        name: "df",
        return:{
            activeName: 'first'
        }
    }
</script>

<style scoped>

</style>
