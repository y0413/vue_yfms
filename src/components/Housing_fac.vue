<template>
    <div>
        <!--<div class="top"></div>-->
        <div class="o_mask" id='maskName'  style="display:none;"></div>
        <Header></Header>
        <!--<div class="detail_wrapper">-->
            <!--<div class="detail_head clearfix">-->
                <!--<a href="https://www.xiaozhu.com" class="xz_logo_detail">小猪</a><span class="slogan_v2 slogan_black"></span>-->
                <!--<ul class="nav_R nav_commen">-->
                    <!--<input type="hidden" value="landlord" id="userCurrentRole"/>-->
                    <!--<input type="hidden" value="144260581897" id="loginUserId"/>-->
                    <!--<li class="current">-->
                        <!--<a href="" class="openTri_R" rel="nofollow">aaaa</a>-->
                        <!--<div class="head_pop top40">-->
                            <!--<div class="pop_column">-->
                                <!--<a class="pop_T" href="https://www.xiaozhu.com/xzweb.php?op=FangDong_Index">房东中心</a>-->
                                <!--<span>-->
                            <!--<a class="fl" href="https://www.xiaozhu.com/xz_web2/order/pages/landlord/orderList.html">订单管理</a>-->
                            <!--<a class="fr" href="https://www.xiaozhu.com/xzweb.php?op=FangDong_SettlementInfo">结算统计</a>-->
                        <!--</span>-->
                                <!--<span>-->
                            <!--<a class="fr" href="https://www.xiaozhu.com/xzweb.php?op=FangDong_Comment&filterType=waitComment&fkCmtFilter=all">我的点评</a>-->
                        <!--</span>-->
                                <!--<span>-->
                            <!--<a class="fr" href="https://www.xiaozhu.com/xzweb.php?op=FangDong_UserInfo">个人资料</a>-->
                        <!--</span>-->
                            <!--</div>-->
                            <!--<div class="pop_column">-->
                                <!--<a class="pop_T pop_bor" href="https://www.xiaozhu.com/xzweb.php?op=FangKe_Index">房客中心</a>-->
                                <!--<span>-->
                            <!--<a class="fl" href="https://www.xiaozhu.com/xz_web2/order/pages/lodger/list.html">我的订单</a>-->
                        <!--</span>-->
                                <!--<span>-->
                            <!--<a class="fl" href="https://www.xiaozhu.com/xzweb.php?op=FangKe_Comment">我的点评</a>-->
                            <!--<a class="fr" href="https://www.xiaozhu.com/xzweb.php?op=FangKe_UserInfo">个人资料</a>-->
                        <!--</span>-->
                                <!--<span class="textCt"><a href="https://www.xiaozhu.com/logout" id="IM-Logout">退出</a></span>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</li>-->

                    <!--<li class="current">-->
                        <!--<a href="" class="openTri_R">短租指南</a>-->
                        <!--<div class="head_pop width_58 top40">-->
                            <!--<div class="pop_column">-->
                                <!--<span><a class="fl" href="https://www.xiaozhu.com/xzweb.php?op=Help_UserGuide&type=tenant">房客指南</a><a class="fr" href="https://www.xiaozhu.com/xzweb.php?op=Help_UserGuide&type=landlord">房东指南</a></span>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</li>-->

                    <!--<li>-->
                        <!--<a rel="nofollow" data-href="https://www.xiaozhu.com/publish" class="btn_free" id = "Pub_Btn">免费发布房源-->
                        <!--</a>-->
                    <!--</li>-->
                <!--</ul>-->
            <!--</div>-->

            <div id="regSuccessDialog" class="reg_success_box login_register_box" style="display:none;">
                <div class="">
                    <div class="r_colsed_1" id="closeRegSuccDialogBtn"><span></span></div>
                    <div id="regSuccInfo">
                    </div>
                </div>
            </div><div></div>

            <div class='h_top_box'>
                <div class="h_step_box" style="height: auto;background-color: rgba(252,246,255,0);width: 1000px">
                    <el-steps :active="2" finish-status="success">
                        <el-step title="已完成"></el-step>
                        <el-step title="已完成"></el-step>
                        <el-step title="进行中"></el-step>
                    </el-steps>
                </div>
            </div>

            <div class="h_wrap pb10 mt20" style="margin-top: 100px">
                <h4 class="h_tit">配套设施</h4>
                <el-form :model="list">
                <el-checkbox-group v-model="checklist" >
                <div class="sb_box clearfix">
                    <h4>卫浴：</h4>
                    <ul class="sb_list clearfix">
                        <li>
                            <el-checkbox label="shower">
                                <p style="margin-left: -20px;" class="linyu_ico" >热水淋浴</p>
                            </el-checkbox>
                        </li>
                        <li>
                            <el-checkbox label="guard" prop="guard">
                                <p style="margin-left: -20px" class="shouzhi_ico" >独卫</p>
                            </el-checkbox>
                        </li>
                    </ul>
                </div>
                <div class="sb_box clearfix">
                    <h4>电器：</h4>
                    <ul class="sb_list clearfix">
                        <li>
                            <el-checkbox label="Television" prop="Television">
                                <p style="margin-left: -20px" class="dianshi_ico" >电视</p>
                            </el-checkbox>
                        </li>
                        <li>
                            <el-checkbox label="air" prop="air">
                                <p style="margin-left: -20px;" class="kongtiao_ico" >空调</p>
                            </el-checkbox>
                        </li>

                    </ul>
                </div>
                <div class="sb_box clearfix">
                    <h4>设施：</h4>
                    <ul class="sb_list clearfix">
                        <li>
                            <el-checkbox label="network" prop="network">
                                <p style="margin-left: -20px;" class="wuxian_ico" >无线网络</p>
                            </el-checkbox>
                        </li>

                        <li>
                            <el-checkbox label="Heating" prop="Heating">
                                <p style="margin-left: -20px;" class="nuanqi_ico" >暖气</p>
                            </el-checkbox>
                        </li>
                    </ul>
                </div>
                </el-checkbox-group>
                </el-form>
                <div class="h_wrap">
                    <div style="display: block;" id="pictureTypeModules">
                        <div class="h_pic_list clearfix filesInputNew" id="group_bedroom" type="bedroom">
                            <span style="font-weight: bold">卧室：</span>
                            <p id="bedroomDesc" style="color: #757575;">
                                根据你填写的户型和床铺信息,上传
                                <span style="color: #ff4081">1间卧室和2张床铺</span>的照片。请确保
                                <span style="color: #ff4081">床单、枕头展示齐全</span>。
                                <span class="showDemo cursorPointer" data-desc="请确保床单、枕头展示齐全"></span>
                            </p>
                            <div class='dp_con '>
                                <el-upload
                                    action="http://localhost:8081/bnbinfo/ws"
                                    list-type="picture-card"
                                    :auto-upload="false"
                                    ref="upload1"
                                    :file-list="file"
                                    :on-preview="handlePictureCardPreview"
                                    :on-remove="handleRemove">

                                    <i slot="default" class="el-icon-plus"></i>
                                </el-upload>

                                <el-dialog :visible.sync="dialogVisible">
                                    <img width="100%" :src="dialogImageUrl" alt="">
                                </el-dialog>
                            </div>
                        </div>
                        <div class="h_pic_list clearfix filesInputNew" id="group_livingroom" type="livingroom">
                            <span style="font-weight: bold">客厅：</span>
                            <p style="color: #757575;">建议上传。站在厅角拍摄，视野会更广。
                                <span class="showDemo cursorPointer" data-value="livingroom"
                                      data-desc="站在厅角拍摄，视野会更广"></span></p>
                            <div class='dp_con '>
                                <el-upload
                                    action="http://localhost:8081/bnbinfo/kt"
                                    list-type="picture-card"
                                    :auto-upload="false"
                                    ref="upload2"
                                    :file-list="file"
                                    :on-preview="handlePictureCardPreview"
                                    :on-remove="handleRemove">
                                    <i slot="default" class="el-icon-plus"></i>
                                </el-upload>

                                <el-dialog :visible.sync="dialogVisible">
                                    <img width="100%" :src="dialogImageUrl" alt="">
                                </el-dialog>
                            </div>
                        </div>


                        <div class="h_pic_list clearfix filesInputNew" id="group_bathroom" type="bathroom">
                            <span style="font-weight: bold">卫生间：</span>
                            <p  style="color: #757575;">必须上传卫生间照片。请确保<span style="color: #ff4081;">马桶卫浴、地面细节完整</span>。
                                <span class="showDemo cursorPointer" data-value="bathroom"
                                      data-desc="请确保马桶卫浴、地面细节完整"></span>
                            </p>
                            <div class='dp_con '>
                                <el-upload
                                    action="http://localhost:8081/bnbinfo/wsj"
                                    list-type="picture-card"
                                    :auto-upload="false"
                                    ref="upload3"
                                    :file-list="file"
                                    :on-preview="handlePictureCardPreview"
                                    :on-remove="handleRemove">
                                    <i slot="default" class="el-icon-plus"></i>
                                </el-upload>

                                <el-dialog :visible.sync="dialogVisible">
                                    <img width="100%" :src="dialogImageUrl" alt="">
                                </el-dialog>
                            </div>
                        </div>


                        <div class="h_pic_list clearfix filesInputNew" id="group_kitchen" type="kitchen">
                            <span style="font-weight: bold">厨房：</span>
                            <p id="kitchenDesc"  style="color: #757575;">
                                建议上传。<span class="showDemo" data-value="kitchen"
                                           data-desc="请确保灶具、台面完整"></span>
                                <input type="hidden" id="isNeedKitchenPicture" value="no">
                            </p>
                            <div class='dp_con '>
                                <el-upload
                                    action="http://localhost:8081/bnbinfo/cf"
                                    list-type="picture-card"
                                    :auto-upload="false"
                                    :file-list="file"
                                    ref="upload4"
                                    :on-preview="handlePictureCardPreview"
                                    :on-remove="handleRemove">
                                    <i slot="default" class="el-icon-plus"></i>
                                </el-upload>

                                <el-dialog :visible.sync="dialogVisible">
                                    <img width="100%" :src="dialogImageUrl" alt="">
                                </el-dialog>
                            </div>
                        </div>
                    </div>

                    <div class="h_pic_list clearfix filesInputNew" id="group_others" type="others">
                        <span style="font-weight: bold">其他：</span>
                        <p  style="color: #757575;">建议上传。可以是其他室内空间、物件、小区周边环境等。更多的照片往往能吸引更多的房客。
                            <span class="showDemo cursorPointer" data-value="others"
                                  data-desc="可以是其他室内空间、物件、小区周边环境等"></span>
                        </p>
                        <div class='dp_con '>
                            <el-upload
                                action="http://localhost:8081/bnbinfo/qt"
                                list-type="picture-card"
                                :auto-upload="false"
                                ref="upload5"
                                :on-preview="handlePictureCardPreview"
                                :file-list="file"
                                :on-remove="handleRemove">

                                <i slot="default" class="el-icon-plus"></i>
                            </el-upload>

                            <el-dialog :visible.sync="dialogVisible">
                                <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>
                        </div>
                    </div>
                </div>

                <input type="hidden" value="" id="room_type">
                <div class="w_960 pb20 clearfix">
                    <el-button @click="upsub()">保存并继续</el-button>
                    <!--<a href="###" class="keep_btn" id="facilitySave">保存并继续</a>-->
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
    <!--</div>-->
</template>

<script>
    import header from "../components/Housing_header.vue"
    export default {
        name: "Housing_fac",
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false,
                file: [],
                checklist:[],
                list:{}
            };
        },
        components:{
            Header:header
        },
        methods: {
            upsub(){
                this.$axios.post('http://localhost:8081/bnbinfo/ptss',this.checklist)
                    .then(res => {
                        this.$refs.upload1.submit();
                        this.$refs.upload2.submit();
                        this.$refs.upload3.submit();
                        this.$refs.upload4.submit();
                        this.$refs.upload5.submit();

                        this.$message.success("发布成功");
                        this.$router.push({name:"Housing_main"});
                    });

            },
            //删除图片
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            //查看图片
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>

<style scoped>

</style>
