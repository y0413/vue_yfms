<template>

    <!-- 首页搜索的两个情况 -->
    <div>



        <div class="head_bar">
            <div class="head_bar_con">
                <div class="guide_tob"><i class="top_trigle"></i><a href="https://data-sink.xiaozhu.com/t/U" target="_blank" class="">出差报销太麻烦？抢先了解<b>小猪企业版</b><i class="top_right"></i></a><i class="top_cancle"></i></div>
                <a href="https://www.xiaozhu.com" class="logo_index">小猪</a>
                <ul class="nav_R">
                    <li><a rel="nofollow" title="" class="show-register-box" href="https://www.xiaozhu.com/register?next=https%3A%2F%2Fwww.xiaozhu.com%2F">
                        注册            </a></li>
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
                    <li>
                        <a href="#ongo"  class="icon_iphone">手机小猪</a>
                        <div class="head_pop w_120 top40">
                            <div><a href="https://www.xiaozhu.com/appdownload/fk" target="_blank"><img src="/images/code_pic.png" alt="小猪" title="小猪"/></a></div>
                            <a href="https://www.xiaozhu.com/appdownload/fk" target="_blank">了解更多</a>
                        </div>
                    </li>
                    <li class="current header_current_last">
                        <a href="#ongo" class="openTri_R marginR10">去小程序领950元礼券</a>
                        <div class="head_pop top40 head_applet">
                            <p>微信扫码去领券</p>
                            <div><img class="qrcode" src="/images/applet-qrcode/pcheader.jpg" alt="小猪" title="小猪"/></div>
                        </div>
                    </li>
                    <li><a rel="nofollow" data-href="https://www.xiaozhu.com/publish" class="btn_free show-register-box" id="Pub_Btn">免费发布房间</a></li>
                </ul>
            </div>
        </div>
        <div class="o_mask" id='maskName'  style="display:none;"></div>
        <div id="userlogindialog" class="login_register_box" style="display:none;">
            <div class="w_698">
                <div class="r_colsed" id="closeUserLoginDialog"><span></span></div>
                <div class="clearfix">
                    <div class="r_main_l">
                        <ul class="r_tab clearfix">
                            <li class="percent_50 tc cur underL1" id="generalLi">普通登录</li>
                            <li class="percent_50 tc cur" id="mobileLi">短信快捷登录</li>
                        </ul>
                        <div id="generalLogin">
                            <ul class="register_list">
                                <li>
                                    <div class="h_30">&nbsp;</div>
                                    <div class="pr">
                                        <div class="r_tel_ico"></div>
                                        <input type="text" class="r_input_small" id="input-username" autocomplete="off" placeholder="手机号、邮箱" disabled="true">
                                    </div>
                                </li>
                                <li>
                                    <div class="h_30"><div class="r_error_tip" id="input-username-tip"><span class="icon-wrong" id=""></span>手机号未注册</div></div>
                                    <div class="pr">
                                        <div class="r_password_ico"></div>
                                        <input type="password" class="r_input_1" id="password" autocomplete="off"  placeholder="密码" disabled="true">
                                        <div class="h_30">
                                            <div class="r_error_tip" id="password-tip"><span class="ipt-text-pass"></span></div>
                                        </div>
                                    </div>
                                </li>
                                <span  style="display:none"  id="verify-show">
                        <li>
                        </li>
                        </span>
                                <li>
                                    <div id="safeCheck2"></div>
                                    <p id="input-slidecode-tip2" class="r_error_tip input-slidecode-tip" style="margin-bottom: 10px">请进行验证</p>
                                </li>
                            </ul>
                            <a href="###" class="r_input mt_10" id="orgBtn">登录</a>
                            <div class="r_login_space clearfix"><span class="fl cur "><input class="ipt-checkbox2" type="checkbox" id="setcookie" checked="checked" />自动登录</span>
                                <span class="fr col_gray"><a href="https://www.xiaozhu.com/findpwdbyphone">忘记密码?</a></span></div>
                        </div>
                        <div id="mobileLogin" style="display:none">
                            <ul class="register_list">
                                <li>
                                    <div class="h_30">&nbsp;</div>
                                    <div class="pr">
                                        <div class="r_telepho_ico"></div>
                                        <input type="text" class="r_input_1" id="quick-input-mobile" autocomplete="off" placeholder="手机号" disabled="true" >
                                    </div>
                                </li>
                                <li>
                                    <div class="h_30">
                                        <div class="r_error_tip" id="quick-input-mobile-tip"><span class="icon-ok"></span></div>
                                    </div>
                                </li>
                                <li>
                                    <div id="safeCheck3"></div>
                                    <p id="input-slidecode-tip3" class="r_error_tip input-slidecode-tip" style="margin-bottom: 10px">请进行验证</p>
                                </li>
                                <li>
                                    <div class="pr">
                                        <div class="r_vali_ico"></div>
                                        <input type="text" class="r_input_small" id="quick-activate-code" autocomplete="off" placeholder="动态验证码" disabled="true" >
                                        <span class="btn have-nb"  id="quick-get-code-btn">获取动态验证码</span>
                                        <div class="h_30">
                                            <div class="r_error_tip"  id="quick-activate-code-tip"><span class="icon-ok"></span></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <a href="###" class="r_input mt_10" id="orgBtnMobile">登录</a>
                            <p class="mt_10 mt_20">＊验证即登录，未注册将自动创建小猪账号</p>
                        </div>
                    </div>
                    <div class="r_main_r">
                        <h5>合作网站账户登录</h5>
                        <ul class="r_wedsitev1">
                            <li>
                                <a class="hz_qqv1" href="https://www.xiaozhu.com/xzweb.php?op=GetOpenSnsAuthUrl&snsType=qqzone&state=login&next=https%3A%2F%2Fwww.xiaozhu.com%2F"><i></i>QQ登录</a>
                            </li>
                            <li>
                                <a class="hz_weibov1" href="https://www.xiaozhu.com/xzweb.php?op=GetOpenSnsAuthUrl&snsType=sinaweibo&state=login&next=https%3A%2F%2Fwww.xiaozhu.com%2F"><i></i>微博登录</a>
                            </li>
                            <li>
                                <a class="hz_weixinv1" href="https://www.xiaozhu.com/xzweb.php?op=GetOpenSnsAuthUrl&snsType=weixinopen&state=login&next=https%3A%2F%2Fwww.xiaozhu.com%2F"><i></i>微信登录</a>
                            </li>
                        </ul>                <p>还没有注册？<a href="#" class="col_pink show-register-box" >注册账号&gt;&gt;</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div id="mobilePerfeactInfoDialog" style="display:none;">
            <div class="w_400">
                <div class="perfeact-info-content" style="display:none;">
                    <div class="r_colsed" id="mobilePerfeactInfoBtn"><span></span></div>
                    <div class="r_top_logo">
                        <p>首次登录，请完善资料后，开启小猪住宿之旅！</p>
                    </div>
                    <ul class="register_list">
                        <li>
                            <div class="h_30">
                                <p class="r_error_tip" style="display:none;"></p>&nbsp;
                            </div>
                            <div class="pr">
                                <div class="r_tel_ico"></div>
                                <input id="quick-input-username" type="text" placeholder="用户名" autocomplete="off" class="r_input_1">
                            </div>
                        </li>
                        <li>
                            <div class="h_30">
                                <p class="r_error_tip" id="quick-input-username-tip">请输入用户名</p>&nbsp;
                            </div>
                            <div class="pr">
                                <div class="r_password_ico"></div>
                                <input type="password" id="quick-regpassword" autocomplete="off" placeholder="密码" class="r_input_1">
                            </div>
                        </li>
                        <li>
                            <div class="h_30">
                                <p class="r_error_tip" id="quick-regpassword-tip">请输入密码</p>&nbsp;
                            </div>
                            <div class="pr">
                                <div class="r_num_ico"></div>
                                <input id="quick-invitecode" type="text" autocomplete="off" placeholder="邀请码(选填)" class="r_input_1">
                            </div>
                            <div class="h_30" style="display:none;">
                                <p id="quick-invitecode-tip" class="r_error_tip">邀请码输入有误</p>&nbsp;
                            </div>
                            <p class="col_fgray r_tip_text">使用朋友给您的邀请码注册后，均可获得300元</p>
                        </li>
                    </ul>
                    <a class="r_input" id="mobileInfoPerfeactBtn" href="#">确定</a>
                    <p class="tc mt_20">
            <span class="check_css3 agreeResBox">
                <!--<input type="checkbox"  class="input_check" id="check3">-->
                <label for="check3"></label>
            </span> 我同意  <a href="https://www.xiaozhu.com/help/service" class="r-service-protocol" target="_blank">《服务协议》、</a><a href="https://www.xiaozhu.com/help/privacy" class="r-service-protocol" target="_blank">《隐私保护声明》</a></p>
                </div>
            </div>
        </div>
        <div class="w_698 login_register_box "  style="display:none;" id="registerDialog">
            <div class="r_colsed" id="closeRegiserDialog"><span></span></div>
            <div class="clearfix">
                <div class="r_main_l">
                    <ul class="r_tab1 clearfix">
                        <li class="fl cur">注册小猪账号</li>
                    </ul>
                    <ul class="register_list">
                        <li>
                            <div class="h_30">&nbsp;</div>

                            <div class="pr" id="reg">
                                <div class=" r_telepho_ico"></div>
                                <input type="text" id="input-mobile" autocomplete="off" placeholder="手机号" class="r_input_small col_input" value="">
                            </div>
                        </li>
                        <li>
                            <div class="h_30">
                                <p class="r_error_tip" id="input-mobile-tip">请输入手机号</p>&nbsp;
                            </div>
                            <!--<div class="pr">-->
                            <!--<div class="r_pho_ico"></div>-->
                            <!--<input type="text" placeholder="图片验证码" id="reg-image-code" autocomplete="off" class="r_input_small">-->
                            <!--<span class="r_code"><img class="change-verify-image" id="img_imagecode" title="点击更换验证码" width="101" height="33" /></span>-->
                            <!--</div>-->
                        </li>
                        <li>
                            <!--<div class="h_30">-->
                            <!--<p class="r_error_tip" id="reg-image-code-tip">请输入图片验证码</p>&nbsp;-->
                            <!--</div>-->
                            <div class="pr">
                                <div class="r_num_ico"></div>
                                <input id="invitecode" type="text"  autocomplete="off" placeholder="邀请码(选填)"  class="r_input_1">
                            </div>
                            <div class="h_30" style="display:none;">
                                <p id="input-invitecode-tip" class="r_error_tip">邀请码输入有误</p>&nbsp;
                            </div>
                            <p class="col_fgray r_tip_text">使用朋友给您的邀请码注册后，你们均可获得300元</p>
                        </li>
                        <li>
                            <div id="safeCheck"></div>
                            <p id="input-slidecode-tip" class="r_error_tip input-slidecode-tip" style="margin-bottom: 10px">请进行验证</p>
                        </li>
                    </ul>

                    <a href="#" id="reg-btn" class="r_input">立即注册</a>
                    <p class="mt_20">
                <span class="check_css3 agreeResBox">
                    <input type="checkbox"  class="input_check" id="check3">
                    <label for="check3"></label>
                </span>
                        我同意  <a href="https://www.xiaozhu.com/help/service" class="r-service-protocol" target="_blank">《服务协议》、</a><a href="https://www.xiaozhu.com/help/privacy" class="r-service-protocol" target="_blank">《隐私保护声明》</a></p>
                </div>
                <div class="r_main_r">
                    <h5>合作网站账户登录</h5>
                    <ul class="r_wedsitev1">
                        <li>
                            <a class="hz_qqv1" href="https://www.xiaozhu.com/xzweb.php?op=GetOpenSnsAuthUrl&snsType=qqzone&state=login&next=https%3A%2F%2Fwww.xiaozhu.com%2F"><i></i>QQ登录</a>
                        </li>
                        <li>
                            <a class="hz_weibov1" href="https://www.xiaozhu.com/xzweb.php?op=GetOpenSnsAuthUrl&snsType=sinaweibo&state=login&next=https%3A%2F%2Fwww.xiaozhu.com%2F"><i></i>微博登录</a>
                        </li>
                        <li>
                            <a class="hz_weixinv1" href="https://www.xiaozhu.com/xzweb.php?op=GetOpenSnsAuthUrl&snsType=weixinopen&state=login&next=https%3A%2F%2Fwww.xiaozhu.com%2F"><i></i>微信登录</a>
                        </li>
                    </ul>            <p class="">已有账号？<a href="https://www.xiaozhu.com/login?next=https%3A%2F%2Fwww.xiaozhu.com%2F" id="loginDialogBtn" class="col_pink logindialog">登录&gt;&gt;</a></p>
                </div>
            </div>
        </div>
        <div class="w_400 login_register_box" id='mobileRegisterInfoDialog' style="display:none;">
            <div class="r_colsed" id="closeMobileRegisterInfoDialog"><span></span></div>
            <div class="r_top_tit">
                <h6>验证短信已发送至手机号码</h6>
                <p><span id="codeRecivePhone"></span><span class="col_pink"><a href="#" id="modifyRegisterBtn">(修改)</a></span></p>
            </div>
            <ul class="register_list">
                <li>
                    <div class="h_30">&nbsp;</div>
                    <div class="pr">
                        <div class="r_pho_ico"></div>
                        <input type="text" id="activate-code" placeholder="手机验证码" autocomplete="off" class="r_input_small">
                        <a href="#ongo" id="get-code-btn" class="have-nb">重新发送</a>
                    </div>
                </li>
                <li>
                    <div class="h_30">
                        <p id="activate-code-tip" class="r_error_tip">请输入手机验证码</p>&nbsp;
                    </div>
                    <div class="pr">
                        <div class=" r_tel_ico"></div>
                        <input id="reginput-username" type="text" placeholder="用户名" autocomplete="off" class="r_input_1">
                    </div>
                </li>
                <li>
                    <div class="h_30">
                        <p class="r_error_tip" id="reginput-username-tip">请输入用户名</p>&nbsp;
                    </div>
                    <div class="pr">
                        <div class="r_password_ico"></div>
                        <input type="password" id="regpassword" placeholder="密码" autocomplete="off" class="r_input_1">
                    </div>
                    <div class="h_30">
                        <p class="r_error_tip" id="regpassword-tip">请输入密码</p>&nbsp;
                    </div>
                </li>
            </ul>
            <a href="#" id="regConfirmBtn" class="r_input mt_10">确认</a>
        </div>
        <div id="regSuccessDialog" class="reg_success_box login_register_box" style="display:none;">
            <div class="">
                <div class="r_colsed_1" id="closeRegSuccDialogBtn"><span></span></div>
                <div id="regSuccInfo">
                </div>
            </div>
        </div><div class="banner_con">
        <div class="banner" style="height:833px;">
            <ul class="banner_ul">
                <li class="banner_img" style="display:block">
                    <a href="http://leshan.xiaozhu.com/fangzi/98621486303.html" target="_blank" >
                        <img src="https://image.xiaozhustatic1.com/00,1600,700/s,3,7Vw2,1600,700,2,ebfd9b64.jpg"  name="indeximage"  alt="小猪"/>

                    </a>
                </li>
                <li style="display:none">
                    <a href="http://cq.xiaozhu.com/fangzi/125196645801.html" target="_blank" >
                        <img src="https://image.xiaozhustatic1.com/00,1600,700/s,3,7Vwj,1600,700,2,de0f565b.jpg"  name="indeximage"  alt="小猪"/>

                    </a>
                </li>
            </ul>
        </div>
        <div class="search_index search_index_home">
            <div class="search_column_l">
                <span class="icon_place_box" id="suggest_icon"><i class="iconfont search-icon">&#xe7bf;</i></span>
                <input class="ipt_search_l r_border" type="text" id="searchcity" name="searchcity" autocomplete="off" value="城市或目的地" />
                <div id="suggest" class="ac_results2 " style="display:none;"></div>
                <div class="sug  ">
                    <div class="international" id="international_radios">
                        <form class="international-form" id="radio_form">
                            <lable class="radio-box lable-checked" id="radio_lable_l" >
                                <span class="radio-style radio-inland-style" id="radio_l" value="inland"></span>
                                <input class="el-radio radio-inland" type="radio" name="overseas-inland" checked id="radio_inland_real" value="inland">
                                <span class="text-span" id="text-inland" value="inland">国内</span>
                            </lable>
                            <lable class="radio-box" id="radio_lable_r" >
                                <span class="radio-style radio-overseas-style" id="radio_r" value="abrd"></span>
                                <input class="el-radio radio-overseas" type="radio" name="overseas-inland" id="radio_oversaes_real" value="abrd" >
                                <span class="text-span" id="text-overseas" value="abrd">海外</span>
                            </lable>
                        </form>
                    </div>
                    <div class="sug-tit">
                        <div class="sug-tit-box">
                            <span id="hotcity" value="hotcity" class="sug-hover">热门</span>
                            <span id="a_d" value="a_b_c_d">ABCD</span>
                            <span id="e_j" value="e_f_g_h_j">EFGHJ</span>
                            <span id="k_n" value="k_l_m_n">KLMN</span>
                            <span id="p_w" class="width64" value="p_q_r_s_t_w">PQRSTW</span>
                            <span id="x_z" class="width43" value="x_y_z">XYZ</span>
                            <!-- <span id="abrd" class="width43" value="abrd">海外</span> -->
                        </div>
                    </div>
                    <div id="con_one_1" class="sug-city">
                    </div>
                </div>            <input type="hidden" name="citydomain" id="citydomain" value=""/>
                <input type="hidden" name="suggestion_citydomain" id="suggestion_citydomain" value=""/>
                <input type="hidden" name="searchkey" id="searchkey" value=""/>
                <input type="hidden" name="landmarkid" id="landmarkid" value=""/>
                <input type="hidden" name="landmarktype" id="landmarktype" value=""/>
                <input type="hidden" name="defaulturl" id="defaulturl" value=""/>
                <input type="hidden" name="abroad" id="abroad" value="0"/>
                <input type="hidden" name="timezone" id="timeZone" value=""/>
                <input type="hidden" name="cityid" id="cityid" value=""/>
                <input type="hidden" name="selectcitypinyin" id="selectcitypinyin" value=""/>
                <div class="result_error_tip err_tip_style" style="display: none;" id="tip_searchcity"></div>
            </div>
            <div class="search_column_r">
            <span class="icon_place_box" id="calendar_btn_s">
                <i class="iconfont search-icon">&#xe748;</i>
            </span>
                <input class="ipt_search_r" type="text" readonly="" id="startenddate" name="startenddate"   value="入住离开日期" />
                <input type="hidden" name="startdate" id="startdate" value=""/>
                <input type="hidden" name="enddate" id="enddate" value=""/>
                <div id="calendar-box" class="calendar-box-index" style="display:none"> </div>
            </div>
            <!-- 首页搜索按钮 -->
            <div class="index-search-box">
                <input class="btn_pink_search" type="button" value="搜索小猪" onclick="javascript:searchCity('home');" />
                <!--<span class="icon_place_box" id="calendar_btn_s">-->
                <i class="iconfont iconfont-arrow">&#xe7f3;</i>
            <!--</span>-->
            </div>
        </div>
        <span class="pics_pre" onclick="pre_pic()" style="display:none;"></span>
        <span class="pics_next" onclick="next_pic()" style="display:none;"></span>
        <span class="bg_up"></span>
        <span class="bg_down"></span>
    </div>
        <div class="mask" id="pop_springFestivalMask">
            <div class="pop_img_box">
                <img src="//jci.xiaozhustatic3.com/e19041501/images/pop_springFestival.png" width="100%" id="pop_springFestivalImg"/>
                <span class="close"></span>
            </div>
        </div>
        <div class="mask" id="pop_allVeryWellMask">
            <div class="allVeryWellWrap">
                <img src="//jci.xiaozhustatic3.com/e19041501/images/yunying/AllVeryWell.jpg" id="pop_allVeryWellImg"/>
                <span class="close" id="pop_allVeryWellImg_close"></span>
            </div>
        </div>

        <div class="index_ad1"  style="background-color:#2fb8c1;" >
            <a id="indexAdPic"  href="http://www.xiaozhu.com/appdownload/fk?ca_source=xzshouye&utm_source=syrk&utm_medium=syrkgg&pk_campaign=APP-xzsyrk-marketing" target="_blank">
                <img src="https://image.xiaozhustatic2.com/00,960,120/s,3,x0fy,960,120,1,eb80e924.png" />         </a>
        </div>


        <div class="rooms_show" id="load_Ajax_IndexRecommend">
            <div class="index_T">
                <h1>别住酒店，住我家</h1>
                <span>莫愁前路无知己，天下谁人不识君 </span>
            </div>
            <div class="content_v2">
                <ul class="rooms_show_ul">
                    <li>     <input type="text" value="6257935516" class="luId" style="display: none">
                        <img class="img_room"  lazy_src="https://image.xiaozhustatic3.com/00,400,326,2/2,9,0,3,5096,1800,1200,25afc714.jpg" alt="小猪-西涌（西冲） 舒适宜居宽敞双床房近沙滩" width="400" height="326" src="../images/lazy_loadimage_gray.png" />
                        <span class="img_upCover"></span>
                        <div class="rooms_intro">
                            <img class="img_user_fd" lazy_src="https://image.xiaozhustatic1.com/22/s,5,rQ6K,414,414,2,44ece91c.jpg" />
                            <span class="room_name">西涌蝴蝶家民宿的家 - 深圳</span>
                            <span class="index_price"><em class="bigFont">&#165;</em>198</span>
                        </div>
                        <a href="//sz.xiaozhu.com/fangzi/6257935516.html" target="_blank" class="room_hover" luid="6257935516"></a>
                    </li>                                 <li>     <input type="text" value="95236691101" class="luId" style="display: none">
                    <img class="img_room"  lazy_src="https://image.xiaozhustatic2.com/00,400,326,2/2,51,0,59,48397,1800,1201,28c427c6.jpg" alt="小猪-【墨宿 more homie】LOFT 轻奢" width="400" height="326" src="../images/lazy_loadimage_gray.png" />
                    <span class="img_upCover"></span>
                    <div class="rooms_intro">
                        <img class="img_user_fd" lazy_src="https://image.xiaozhustatic2.com/22/s,5,nhXl,375,375,2,79f0ea8b.jpg" />
                        <span class="room_name">Macky_forever的家 - 成都</span>
                        <span class="index_price"><em class="bigFont">&#165;</em>318</span>
                    </div>
                    <a href="//cd.xiaozhu.com/fangzi/95236691101.html" target="_blank" class="room_hover" luid="95236691101"></a>
                </li>                                                                                         <li class="nomargin">         <img class="img_room" lazy_src="/images/index_city/city_cd.jpg"  width="400" height="326" src="../images/lazy_loadimage_gray.png"/>
                    <div class="rooms_intro city_top">
                        <span class="index_price">20000+<em class="bigFont">套</em></span>
                        <span class="room_name">悠然自得  ·  成都</span>
                    </div>
                    <a href="https://cd.xiaozhu.com/" class="room_hover" target="_blank"></a>
                    <input type="text" value="45" class="cityId" style="display: none">
                </li>         <li>         <img class="img_room city_big" lazy_src="images/index_city/city_sz_big.jpg" width="820" height="326" src="../images/lazy_loadimage_gray.png"/>
                    <div class="rooms_intro city_big">
                        <span class="room_name">朝气蓬勃  ·  深圳</span><br/>
                        <span class="index_price">10000+<em class="bigFont">套</em></span>
                    </div>
                    <a href="https://sz.xiaozhu.com/" class="room_hover" target="_blank"></a>
                    <input type="text" value="17" class="cityId" style="display: none">
                </li>

                    <li class="nomargin">     <input type="text" value="95519858703" class="luId" style="display: none">
                        <img class="img_room"  lazy_src="https://image.xiaozhustatic1.com/00,400,326,2/2,51,0,84,57933,1800,1200,78142291.jpg" alt="小猪-深圳东站布吉地铁站万象汇沃尔玛温馨小清新民宿" width="400" height="326" src="../images/lazy_loadimage_gray.png" />
                        <span class="img_upCover"></span>
                        <div class="rooms_intro">
                            <img class="img_user_fd" lazy_src="https://image.xiaozhustatic3.com/22/5,15,0,83,22326,260,260,626e66b8.jpg" />
                            <span class="room_name">飄揚的家 - 深圳</span>
                            <span class="index_price"><em class="bigFont">&#165;</em>288</span>
                        </div>
                        <a href="//sz.xiaozhu.com/fangzi/95519858703.html" target="_blank" class="room_hover" luid="95519858703"></a>
                    </li>                                                 <li>     <input type="text" value="95542081703" class="luId" style="display: none">
                    <img class="img_room"  lazy_src="https://image.xiaozhustatic3.com/00,400,326,2/1,51,0,6,73313,2666,2000,89f69369.jpg" alt="小猪-【栖山】浪漫泡池房/ 品茗.萌宠动物" width="400" height="326" src="../images/lazy_loadimage_gray.png" />
                    <span class="img_upCover"></span>
                    <div class="rooms_intro">
                        <img class="img_user_fd" lazy_src="https://image.xiaozhustatic1.com/22/5,21,0,42,6645,415,414,c421c2d3.jpg" />
                        <span class="room_name">栖山民宿的家 - 成都</span>
                        <span class="index_price"><em class="bigFont">&#165;</em>480</span>
                    </div>
                    <a href="//cd.xiaozhu.com/fangzi/95542081703.html" target="_blank" class="room_hover" luid="95542081703"></a>
                </li>                                                 <li>     <input type="text" value="26239254803" class="luId" style="display: none">
                    <img class="img_room"  lazy_src="https://image.xiaozhustatic2.com/00,400,326,2/2,12,0,77,28605,1800,1201,66ea84b4.jpg" alt="小猪-旺仔家夫子庙南站老门东绿野仙踪复式套房" width="400" height="326" src="../images/lazy_loadimage_gray.png" />
                    <span class="img_upCover"></span>
                    <div class="rooms_intro">
                        <img class="img_user_fd" lazy_src="https://image.xiaozhustatic2.com/22/5,13,0,8,28755,320,320,55f85e29.jpg" />
                        <span class="room_name">旺仔家的家 - 南京</span>
                        <span class="index_price"><em class="bigFont">&#165;</em>438</span>
                    </div>
                    <a href="//nj.xiaozhu.com/fangzi/26239254803.html" target="_blank" class="room_hover" luid="26239254803"></a>
                </li>                                                 <li class="nomargin">         <img class="img_room" lazy_src="/images/index_city/city_xm.jpg"  width="400" height="326" src="../images/lazy_loadimage_gray.png"/>
                    <div class="rooms_intro city_top">
                        <span class="index_price">8000+<em class="bigFont">套</em></span>
                        <span class="room_name">美丽鹭岛  ·  厦门</span>
                    </div>
                    <a href="https://xm.xiaozhu.com/" class="room_hover" target="_blank"></a>
                    <input type="text" value="76" class="cityId" style="display: none">
                </li>                                                                                                         <li>     <input type="text" value="29758389301" class="luId" style="display: none">
                    <img class="img_room"  lazy_src="https://image.xiaozhustatic1.com/00,400,326,2/2,13,0,64,27472,1800,1200,e3a9d458.jpg" alt="小猪-三亚大东海 热带雨林风情房  低楼层" width="400" height="326" src="../images/lazy_loadimage_gray.png" />
                    <span class="img_upCover"></span>
                    <div class="rooms_intro">
                        <img class="img_user_fd" lazy_src="https://image.xiaozhustatic3.com/22/5,11,0,30,11236,329,329,5dbb42a7.jpg" />
                        <span class="room_name">梦享we家的家 - 三亚</span>
                        <span class="index_price"><em class="bigFont">&#165;</em>558</span>
                    </div>
                    <a href="//sanya.xiaozhu.com/fangzi/29758389301.html" target="_blank" class="room_hover" luid="29758389301"></a>
                </li>                         <li class="nomargin">         <img class="img_room city_big" lazy_src="images/index_city/city_qd_big.jpg" width="820" height="326" src="../images/lazy_loadimage_gray.png"/>
                    <div class="rooms_intro city_big">
                        <span class="room_name">风情帆都  ·  青岛</span><br/>
                        <span class="index_price">10000+<em class="bigFont">套</em></span>
                    </div>
                    <a href="https://qd.xiaozhu.com/" class="room_hover" target="_blank"></a>
                    <input type="text" value="114" class="cityId" style="display: none">
                </li>    </ul>
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
        <div class="foot_v2">
            <span class="foot_T">关注我们</span>
            <ul class="see_ul">
                <li><a href="#ongo" class="icon_wx indexdialogpic" name="focusus"></a></li>
                <li><a href="https://weibo.com/xzduanzu" target="_blank" class="icon_wb"></a></li>
            </ul>
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
                    <span class="logindialog"   ><i></i>在线客服</span>
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
                    <a target="_blank" href="//cs.xiaozhu.com/">长沙短租房</a>
                    <a target="_blank" href="//wx.xiaozhu.com/">无锡短租房</a>
                    <a target="_blank" href="//km.xiaozhu.com/">昆明短租房</a>
                    <a target="_blank" href="//jn.xiaozhu.com/">济南短租房</a>
                    <a target="_blank" href="//xm.xiaozhu.com/">厦门短租房</a>
                    <a target="_blank" href="//qd.xiaozhu.com/">青岛短租房</a>
                    <a target="_blank" href="//zz.xiaozhu.com/">郑州短租房</a>
                    <a target="_blank" href="//xa.xiaozhu.com/">西安短租房</a>
                    <a target="_blank" href="//hz.xiaozhu.com/">杭州短租房</a>
                    <a target="_blank" href="//sz.xiaozhu.com/">深圳短租房</a>
                    <a target="_blank" href="//sy.xiaozhu.com/">沈阳短租房</a>
                    <a target="_blank" href="//su.xiaozhu.com/">苏州短租房</a>
                </dd>
            </dl>
            <dl class="link_dl">
            </dl>
            <div class="foot_btm">
                <a class="record-jump" href="http://beian.miit.gov.cn" target="_blank"  rel="noopener norefferrer">京ICP备12035936号-1</a>
                &nbsp;&nbsp;许可证号：京ICP证140510号 &nbsp;&nbsp; <a href="//www.anquan.org/s/www.xiaozhu.com"  name="mt8SMvYyRDI92b06nuDs8dPFapllCJYidqhM1WlOoGRZ9DWpbo" rel="nofollow" target="_blank">安全联盟</a> &nbsp;&nbsp; 北京快跑信息科技有限公司 &nbsp;&nbsp; <a href="https://www.xiaozhu.com/images/yingye.jpg"  name="yingyezhizhao" rel="nofollow" target="_blank">营业执照号 103613118</a> <span style="display:none">  &nbsp;&nbsp; 地址：北京市海淀区知春路56号   &nbsp;&nbsp;电话：010-62961978</span>
            </div>
            <div style="margin:0 auto;color:#bdc3c7;">
                <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020380" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="/images/govRecord_icon.png"/><p style="display:inline-block;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#bdc3c7;">京公网安备 11010802020380号</p></a>
                &nbsp;&nbsp; 违法和不良信息举报电话：4000107890转6  &nbsp;&nbsp; 举报邮箱：jubao@xiaozhu.com
            </div>
            <div style="margin-top: 20px">
                <a target="cyxyv" href="https://v.yunaq.com/certificate?domain=www.xiaozhu.com&from=label&code=90030" style="margin-right: 10px"> <img src="https://aqyzmedia.yunaq.com/labels/label_sm_90030.png" style="height: 48px"></a>
                <a id="_xinchacharenzheng_cert_vip_kexinweb" style="text-decoration:none;" target="_blank" href="https://xyt.xinchacha.com/pcinfo?sn=448825606222778368&certType=6"> <img src="https://xyt.xinchacha.com/img/icon/icon3.png" style="height: 48px" > </a>
            </div>
        </div>

        <input type="hidden" name="actionName" id="actionName" value="Front_Index"/>
        <input type="hidden" name="xz_srf_token" id="xz_srf_token" value="8ee3420acb61c39090ccf44ac95809ec"/>


    </div>

    <div class="index_pop indexdialog" id="authenticationDialog" style="display:none;">
        <a href="#ongo" class="pop_close_v2 closeDialog"></a>
        <div class="xz_pop_T"><span class="icon_sfyz"></span>双方身份验证</div>
        <p class="xz_pop_p">
            <img class="fr" lazy_src="images/xz_ad_pic2.jpg" />
            <span class="pop_p_T">为什么要进行身份验证？</span>
            我们相信，彼此的信任是建立在使每个人放心的安全机制上。充分的身份验证机制，会保证我们平台更加安全可靠。
        </p>
        <p class="xz_pop_p">
            <span class="pop_p_T">让房客无忧</span>
            所有房东的手机号码、邮箱等都是真实可信的。并且我们拥有一套完善的验证机制，会人工审核房东的真实姓名、真实面孔、身份证等信息，现在大多数房东已经验证了身份，我们会致力于将此机制推广到全部房东中。
        </p>
        <p class="xz_pop_p">
            <span class="pop_p_T">让房东无忧</span>
            在线交易的房客都会经过三重实名验证：首先，我们会验证房客绑定的手机号码，其次，交易会绑定房客银行卡的实名身份，最重要的是房客都会通过国家二代身份证验证系统进行验证，来确保房客的真实性。
        </p>
        <p class="xz_pop_p">
            <span class="pop_p_T">身份隐私如何保证？</span>
            隐私权是用户的重要权利，我们非常重视用户的隐私权，承诺在任何情况下都会对用户的身份隐私进行保护。更多内容可以查看<a href="https://www.xiaozhu.com/help/privacy" target="_blank">《隐私保护声明》</a>
        </p>
    </div><div class="index_pop indexdialog" id="transactionDialog" style="display:none;">
        <a href="#ongo" class="pop_close_v2 closeDialog"></a>
        <div class="xz_pop_T"><span class="icon_aqjy"></span>安全线上交易</div>
        <p class="xz_pop_p">
            <img class="fr" lazy_src="images/xz_ad_pic1.jpg" />
            <span class="pop_p_T">线上交易才最安全！</span>
            我们打造了安全可靠又灵活方便的第三方担保支付系统，而且支持多种付款和收款方式。房客不是直接支付给房东，而是由小猪代为担保，入住完成后才支付给房东。
        </p>
        <p class="xz_pop_p">
            <span class="pop_p_T">保护房客的资金安全</span>
            <strong>1. 入住体验监督机制：</strong>如发生以下三种情况，房客可致电客服进行投诉，客服将在第一时间为您解决问题，保障房客的入住权益：<br/>
            （1） 入住时发现房间的实际情况与页面展示的房源描述信息不符；<br/>
            （2） 入住时发现房东没有预留房间；<br/>
            （3） 房东乱收费用（如：抬高房价或入住后才告知房客额外收取事先未约定的费用）。<br/>
            客服将根据每单投诉的不同情况提供具体解决方案。<br/>
            <strong>2．订单取消机制：</strong>如房客计划有变，需取消入住或提前退房，在我们第三方担保的机制下，保证房客在合理约定的违约金外，顺利拿回剩余订金。
        </p>
        <p class="xz_pop_p">
            <span class="pop_p_T">保护房东的资金安全</span>
            <strong>1、取消订单无损失：</strong>因为在线交易会要求房客提前支付房费，如出现房客取消入住，或提前退房的违约情况，就可以按照房东交易规则约定比例收取合理的违约金，从而保障房东的利益。<br/>
            <strong>2、不用担心收假钞：</strong>大额交易十分不方便，还担心会收到假钞，而使用我们的第三方担保支付系统便无需担心。
        </p>
    </div><div class="index_pop indexdialog" id="protectionDialog" style="display:none;">
        <a href="#ongo" class="pop_close_v2 closeDialog"></a>
        <div class="xz_pop_T"><span class="icon_jshd"></span>坚实保障后盾</div>
        <p class="xz_pop_p">
            <img class="fr" src="images/xz_ad_pic4.jpg" />
            <span class="pop_p_T">保障只是后盾</span>
            小猪上线以来，已有逾千万的房客完成入住，并且从未发生过不愉快的事件，但我们仍然充分理解您对住进一个陌生人家中的担忧，并为此做了大量工作来保障您的整个交易和入住安全。
        </p>
        <p class="xz_pop_p">
            <span class="pop_p_T">房客保险</span> 无论是国内出行还是到海外出行，小猪都为房客提供了保险服务。只要身份信息完整还可免费获赠保险，免除双方的后顾之忧。更多内容可以查看<a href="/xz_web2/vipprotocol/pages/insurance_stay.html" target="_blank">《平安住宿旅行意外保险》</a>和<a href="https://www.xiaozhu.com/xzweb.php?op=Help_ZhongAnFkOutSideInsuranceDescription" target="_blank">《众安海外住宿意外保险告知书》</a>
        </p>
        <p class="xz_pop_p">
            <span class="pop_p_T">房东财产综合保险</span>
            房客入住期间，房屋如出现财产损坏，将由《家庭财产综合保险》为您提供解决方案，最大限度的保障您的利益。
            <br/>
            更多内容可以查看<a href="https://www.xiaozhu.com/yunying.php?op=YunYing_LandlordInsurance" target="_blank">《家庭财产综合保险》</a>
        </p>
    </div><div class="index_pop indexdialog" id="commentDialog" style="display:none;">
        <a href="#ongo" class="pop_close_v2 closeDialog"></a>
        <div class="xz_pop_T"><span class="icon_dpxy"></span>点评积累信用</div>
        <p class="xz_pop_p">
            <img class="fr" src="images/xz_ad_pic3.jpg" />
            <span class="pop_p_T">我们提倡点评</span>
            小猪需要真实的点评，让美好的回忆可以记录下来，这样可以传播给更多的好房东和好房客，让大家都可以参与进来，建立一个人与人可以充分信赖的环境。
        </p>
        <p class="xz_pop_p">
            <span class="pop_p_T">点评是公平对等的</span>
            房客通过在线交易预订短租房，可以对入住经历进行点评，这些点评可以帮助其他房客了解房间和房东。与此同时，房东也可以对房客进行点评，其他房东也可以根据这些点评了解到房客是否受欢迎。任何的点评，都只能由发布者自己删除。
        </p>
        <p class="xz_pop_p">
            <span class="pop_p_T">激励好房东和好房客</span>
            房东是否热情好客？房客是否广受欢迎？<br/>我们相信在真实可靠的点评机制下，不断积累的信用会赶走那些坏房东和坏房客，让真正懂得分享的好房东和好房客充盈整个平台。
        </p>
    </div><div class="index_pop wx_pop indexdialog" id="focususDialog" style="display:none;">
        <a href="#ongo" class="pop_close_v2 closeDialog"></a>
        <div class="wx_pop_con fl wx_bor_R">
            <span>随时了解优质美宿，扫我吧</span>
            <img lazy_src="images/wx_1.jpg" style="width: 150px"/>
            <span>小猪订阅号：xiaozhunite</span>
        </div>
        <div class="wx_pop_con fr">
            <span>预订服务、优惠活动，扫我吧</span>
            <img lazy_src="images/wx_2.jpg" style="width: 150px" />
            <span>小猪服务号：xiaozhufuwu</span>
        </div>
    </div><div class="bg_black vediodialog" id="vedio1Dialog" style="display:none;">
        <a href="#ongo" class="pop_close_v2 closVedioeDialog"></a>
        <div class="marginT46" id="vedio1Content" style="width:880px;height:528px;"> </div>
    </div>
    <div class="bg_black vediodialog" id="vedio2Dialog" style="display:none;">
        <a href="#ongo" class="pop_close_v2 closVedioeDialog"></a>
        <div class="marginT46" id="vedio2Content"  style="width:880px;height:528px;"> </div>
    </div>
    <input type='hidden' id='defaultCityShowStr' value="城市或目的地"/>
    <input type='hidden' id='defaultstartdate' value=""/>
    <input type='hidden' id='defaultenddate' value=""/>
    <div class="widget_wrapper" style="display:none;" id="firstOrderReducePop">
        <div class="inner">
            <a class="widget_login" href="https://www.xiaozhu.com/xzweb.php?op=FangKe_MyCoupon" id="popimg"></a>
            <div class="widget_download"><img src="/images/xz5_pc_download.png" alt="" title=""></div>
            <a class="widget_close" href="javascript:closeWidgetPop();"></a>
        </div>
    </div>

</template>

<script>
    export default {
        name: "T"
    }
</script>

<style scoped>

</style>
