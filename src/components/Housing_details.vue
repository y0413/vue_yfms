<template>
    <div>

        <div class="o_mask" id='maskName'  style="display:none;"></div>
        <Header></Header>
        <!--<div class="detail_wrapper">-->
            <!--<div class="detail_head clearfix">-->
                <!--<a href="https://www.xiaozhu.com" class="xz_logo_detail">小猪</a><span class="slogan_v2 slogan_black"></span>-->
                <!--<ul class="nav_R nav_commen">-->
                    <!--<li><a rel="nofollow" title="" class="show-register-box" href="https://www.xiaozhu.com/register?next=https%3A%2F%2Fbj.xiaozhu.com%2Ffangzi%2F1209886305.html">注册</a></li>-->
                    <!--<li>&middot;</li>-->
                    <!--<li><a rel="nofollow" class="logindialog" href="https://www.xiaozhu.com/login?next=https%3A%2F%2Fbj.xiaozhu.com%2Ffangzi%2F1209886305.html">登录</a></li>-->
                    <!--<li>&middot;</li>-->
                    <!--<li class="current">-->
                        <!--<a href="#ongo" class="openTri_R">短租指南</a>-->
                        <!--<div class="head_pop width_58 top40">-->
                            <!--<div class="pop_column">-->
                                <!--<span><a class="fl" href="https://www.xiaozhu.com/xzweb.php?op=Help_UserGuide&type=tenant">房客指南</a><a class="fr" href="https://www.xiaozhu.com/xzweb.php?op=Help_UserGuide&type=landlord">房东指南</a></span>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</li>-->


                    <!--<li><a rel="nofollow" data-href="https://www.xiaozhu.com/publish" class="btn_free show-register-box" id = "Pub_Btn">免费发布房源</a></li>-->
                <!--</ul>-->
            <!--</div>-->

            <!--&lt;!&ndash;/header&ndash;&gt;-->

            <!--&lt;!&ndash;subNav&ndash;&gt;-->
            <!--<div class="header_bg" style="position:fixed;width:100%;top:0;left:0;z-index:999;display:none;" id="scrollHeader">-->
                <!--<div class="detail_header clearfix">-->
                    <!--<div class="nav_l">-->
                        <!--<a class="xz_logo" href="#">小猪</a>-->
                        <!--<ul id="scorllFather">-->
                            <!--<li>-->
                                <!--<a href="#ongo">实拍照片</a>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<a href="#ongo">详细介绍</a>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<a href="#ongo">位置地图</a>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<a href="#ongo">预订须知</a>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<a href="#ongo">入住点评</a>-->
                            <!--</li>-->
                            <!--<li>-->
                                <!--<a href="#ongo">房东日记</a>-->
                            <!--</li>-->
                        <!--</ul>-->
                    <!--</div>-->
                    <!--<div class="nav_r clearfix" id="scrollPrice">-->
                        <!--<div class="fl">&#165;<span class="detail_avgprice">138</span><em></em></div>-->
                        <!--<div class="time_r">每晚</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash;/subNav&ndash;&gt;-->


            <!--main -->
            <div class="wrap clearfix con_bg" style="margin-top: 80px">

                <!--left content-->
                <div class="con_l">
                    <div class="pho_info">
                        <h4>
                            <em>{{listinfo.bnbname}}</em>
                        </h4>

                        <p :title="listinfo.city+listinfo.address">
                            <em class="col_pink">
                                <a href="https://www.xiaozhu.com" >小猪</a>
                                &gt;
                                <a href="https://bj.xiaozhu.com/">{{listinfo.city}}</a>
                                &gt;
                            </em>
                            <span class="pr5">{{listinfo.address}}
                                  </span>
                        </p>
                        <div class="labels">



                                               <span class="col_slogn" title="设施齐全、服务贴心、体验优质">
                        <i class="new_ico" ></i>优品
                    </span>


                            &nbsp;
                        </div>
                    </div>
                    <el-carousel height="533px" :autoplay="false" arrow="hover"   >
                        <el-carousel-item v-for="item in pic" :key="item">
                            <img :src="'http://localhost:8081/'+item" alt="" style="height: 533px;width: 1000px" />
                        </el-carousel-item>
                    </el-carousel>
                    <!--轮播图-->
                    <!--<div class="pho_show clearfix user_unselectable" id="detailImageBox" onselectstart="return false">-->
                    <!--<div class="pho_show_l">-->
                    <!--<div class="pho_show_big">-->
                    <!--<div class="pho_tip_box" id="curImgIntro" style="display:none;">-->
                    <!--<div>-->
                    <!--<span></span>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--<div valign="middle" align="center">-->
                    <!--<div id="imgMouseCusor" style="background:url('/images/detail/null_bg.png')"></div>-->
                    <!--<img id="curBigImage" :src="'http://localhost:8081/'+listinfo.bedroom" alt="" />-->

                    <!--&lt;!&ndash;<img id="curBigImage" src="https://image.xiaozhustatic3.com/00,800,533/2,3,0,6,983,1800,1200,0088b195.jpg" alt="" />&ndash;&gt;-->

                    <!--</div>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--<div class="pho_show_r">-->
                    <!--<div class="pho_show_small">-->
                    <!--<div class="pho_small_prev detail-image-prev"></div>-->
                    <!--<div class="pho_small_next detail-image-next"></div>-->
                    <!--<ul class="detail-thumb-nav">-->
                    <!--<li>-->
                    <!--<div class="pho_layer"></div>-->
                    <!--<img :src="'http://localhost:8081/'+listinfo.bedroom"-->
                    <!--data-intro="" data-imgrate="0.7421875"-->
                    <!--data-bigimg="https://image.xiaozhustatic3.com/00,396,533/s,1,nubs,950,1280,2,3b15e3c5.jpg" data-width="396"  data-height="533" title="" />-->

                    <!--</li>-->
                    <!--<li>-->
                    <!--<img :src="'http://localhost:8081/'+listinfo.bedroom"-->
                    <!--data-intro="" data-imgrate="0.7421875"-->
                    <!--data-bigimg="https://image.xiaozhustatic3.com/00,396,533/s,1,nubs,950,1280,2,3b15e3c5.jpg" data-width="396"  data-height="533" title="" />-->
                    <!--</li>-->
                    <!--</ul>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--/轮播图-->

                    <!--photo light box-->
                    <!--/photo light box-->


                    <div id="introducePart">
                        <ul class="house_info clearfix" id="introduce">
                            <li class="border_none">
                                <h6 class="h_ico6">{{listinfo.hname}}</h6>
                                <p>房间面积：25平米<br/>                         房屋户型：3室1厅1卫1厨2阳台</p>                 </li>
                            <li>
                                <h6 class="h_ico2">宜住{{listinfo.liva_num}}人</h6>
                                <p>
                                    与房东分别住不同房间<br />
                                    可能与其他房客分住不同房间
                                </p>
                            </li>
                            <!--<li>-->
                            <!--<h6 class="h_ico3">共1张</h6>-->
                            <!--<p>-->

                            <!--双人床：1.5m宽 × 2m长 ×1张<br />-->
                            <!--</p>-->
                            <!--</li>-->
                        </ul>
                        <div class="box_white clearfix detail_intro_item" hideheight="135" showheight="120" >
                            <div class="info_l">
                                <span class="info_ico1"></span>
                                <p>个性描述</p>
                            </div>
                            <div class="info_r">
                                <div class=" intro_item_content">
                                    <p>{{listinfo.desbes}}</p>
                                </div>
                            </div>
                        </div>

                        <div class="box_gray clearfix detail_intro_item" hideheight="135" showheight="120" >
                            <div class="info_l">
                                <span class="info_ico2"></span>
                                <p>内部情况</p>
                            </div>
                            <div class="info_r">
                                <div class=" intro_item_content">
                                    <p>{{listinfo.Internal}}</p>
                                </div>

                            </div>
                        </div>
                        <div class="box_white clearfix detail_intro_item" hideheight="135" showheight="120" >
                            <div class="info_l">
                                <span class="info_ico3"></span>
                                <p>交通情况</p>
                            </div>
                            <div class="info_r">
                                <div class=" intro_item_content">
                                    <p>{{listinfo.Traffic}}</p>
                                </div>

                            </div>
                        </div>

                        <div class=" box_gray  clearfix detail_intro_item" hideheight="135" showheight="120" >
                            <div class="info_l">
                                <span class="info_ico4"></span>
                                <p>周边情况</p>
                            </div>
                            <div class="info_r">
                                <div class=" intro_item_content">
                                    <p>{{listinfo.spots}}</p>
                                </div>

                            </div>
                        </div>

                        <div class="box_white clearfix detail_intro_item" hideheight="134" showheight="130" >
                            <div class="info_l">
                                <span class="info_ico5"></span>
                                <p>配套设施</p>
                            </div>
                            <div class="info_r">
                                <div class="intro_item_content">
                                    <ul class="pt_list clearfix">
                                        <li>
                                            <!--<li class="s_ico_shower">热水淋浴-->
                                            <span v-if="listinfo.shower==='0'">
                                        <span class="s_ico_shower">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;热水淋浴
                                        </span>
                                    </span>
                                            <span v-if="listinfo.shower==='1'">
                                        <span class="s_ico_no">
                                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;热水淋浴
                                        </span>
                                    </span>
                                        </li>
                                        <li >
                                        <span v-if="listinfo.network==='0'">
                                        <span class="s_ico_wirelessnetwork">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;热水淋浴
                                        </span>
                                    </span>
                                            <span v-if="listinfo.network==='1'">
                                        <span class="s_ico_no">
                                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;热水淋浴
                                        </span>
                                    </span>
                                        </li>
                                        <li >
                                        <span v-if="listinfo.air==='0'">
                                        <span class="s_ico_aircondition">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;空调
                                        </span>
                                    </span>
                                            <span v-if="listinfo.air==='1'">
                                        <span class="s_ico_no">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;空调
                                        </span>
                                    </span>
                                        </li>
                                        <li >
                                        <span v-if="listinfo.Television==='0'">
                                        <span class="s_ico_tv">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电视
                                        </span>
                                    </span>
                                            <span v-if="listinfo.Television==='1'">
                                        <span class="s_ico_no">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电视
                                        </span>
                                    </span></li>
                                        <li >
                                        <span v-if="listinfo.Heating==='0'">
                                        <span class="s_ico_heater">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;暖气
                                        </span>
                                    </span>
                                            <span v-if="listinfo.Heating==='1'">
                                        <span class="s_ico_no">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;暖气
                                        </span>
                                    </span>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div class="box_gray clearfix detail_intro_item" hideheight="135" showheight="120" >
                            <div class="info_l">
                                <span class="info_ico6"></span>
                                <p>入住须知</p>
                            </div>
                            <div class="info_r">
                                <div class="info_text_mid">

                                    <ul class="check_con clearfix">
                                        <li>卫生间：&nbsp;&nbsp;<span v-if="listinfo.guard==='1'">共用卫生间</span>
                                            <span v-if="listinfo.guard==='0'">独立卫生间</span></li>
                                        <li>最少入住天数：1天</li>
                                        <li>最多入住天数：365天</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="allmap" style="position:relative">
                        <div class="map_btm"></div><div class="xq_map" id="detailMap" style="height:500px"></div>
                        <div class="map_text">
                            <table>
                                <tr>
                                    <td>
                                        房源位置：北京市大兴区清源西路
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div class="bg_box" id="rulesPart">

                        <div class="clause_box">
                            <h5>房东对房客的要求</h5>
                            <div>
                                {{listinfo.requirement}}
                            </div>
                        </div>

                        <div class="clause_box">
                            <h5>预订方式</h5>
                            <p>
                                下单需房东确认，确认后生成订单。<br />
                                订单确认后，在线支付总房款的100%。<br/>
                                额外的服务费用不包含在总房租内，由房东线下收取。<br/>
                            </p>
                        </div>

                    </div>

                    <!--点评-->

                    <div id="load_Ajax_GetDetalCommentAndOtherComment" class="commentlist bg_box mt_10">
                        <el-tabs v-model="activeName">
                            <el-tab-pane name="xz">
                          <span slot="label">本房源点评
                          </span>
                                <div>
                                    <!--发表评论-->
                                    <el-form style="text-align: left;margin: 0px 20px;" label-width="180px" :model="com" class="form">
                                        <el-input v-model="com.uid"></el-input>
                                        <el-input v-model="com.bnbid"></el-input>
                                        <div v-clickoutside="hideReplyBtn" @click="inputFocus" class="my-reply">
                                            <el-avatar class="header-img" :size="40" :src="myHeader"></el-avatar>
                                            <div class="reply-info" >
                                                <el-input
                                                    placeholder="输入评论..."
                                                    class="reply-input"
                                                    @focus="showReplyBtn"
                                                    @input="onDivInput($event)"
                                                    v-model="com.context"></el-input>

                                            </div>
                                            <div class="reply-btn-box" v-show="btnShow">
                                                <el-button class="reply-btn" size="medium" @click="sendComment" type="primary">发表评论</el-button>
                                            </div>
                                        </div>
                                    </el-form>

                                    <!--显示评论-->
                                    <div v-for="(item,i) in comments" :key="i" class="author-title reply-father">
                                        <el-avatar class="header-img" :size="40" :src="item.headImg"></el-avatar>
                                        <div class="author-info" style="width: 400px;margin-left: 50px;margin-top: -31px;height: 50px">
                                            <span class="author-name" style="color:red;margin-right: 5px">{{item.uname}}</span>
                                            <span class="author-time">评论时间:  {{item.ctime | moment("YYYY-MM-DD")}}</span>
                                        </div>
                                        <div class="icon-btn">
                                            <!--<span @click="showReplyInput(i,item.uname,item.cid)"><i class="iconfont el-icon-s-comment"></i></span>-->
                                        </div>
                                        <div class="talk-box">
                                            <p>
                                                <span class="reply" style="margin-left: 50px">{{item.context}}</span>
                                            </p>
                                        </div>
                                        <el-divider></el-divider>

                                    </div>
                                </div>

                            </el-tab-pane>
                        </el-tabs>

                    </div>

                    <!--/点评-->

                </div>
                <!--/left content-->

                <!--right content-->
                <div class="con_r">
                    <div class="top_bar clearfix">
                        <ul class="collection_ul"  style="display:none;">
                            <li class="top_bar_w1 col_pink tl_text collection_btn_full">
                                <a href="#ongo" class="ysc_ico un_collection_btn" id="unCollectionBtn">已收藏</a>
                            </li>
                            <li class="top_bar_w3 tl_text collection_btn_short" style="display:none;">
                                <a class="sc_ico ysc_ico un_collection_btn"></a>
                            </li>
                        </ul>
                        <ul class="collection_ul" >
                            <li class="top_bar_w1 tl_text collection_btn_full">
                                <a href="#ongo" class="sc_ico collection_btn" id="collectionBtn">收藏</a>
                            </li>
                            <li class="top_bar_w3 tl_text collection_btn_short" style="display:none;">
                                <a href="#ongo" class="sc_ico collection_btn"></a>
                            </li>
                        </ul>
                        <ul>
                            <li class="top_bar_w1 detail-default-share">
                                <a href="#ongo" class="share_ico">分享</a>
                            </li>
                            <li class="top_bar_w4 pr detail-icon-share" style="display:none;">

                            </li>
                            <li class="top_bar_w2 border_right_none">评分：<em class="score-rate">5分</em></li>
                        </ul>
                    </div>

                    <div class="bg_box" id="floatRightBox">
                        <div class="day_top clearfix" id="pricePart">
                            <div class="day_l">&#165;<span>{{listinfo.price}}</span><em></em></div>
                            <div class="day_r">每晚</div>
                        </div>

                        <!--预定start-->
                        <div id="detailBookArea">
                            <div class="reserve_box">
                                <input type="hidden" name="newfiexdPrice" id="newfiexdPrice" value="0"></input>

                                <!--</script>-->
                                <div class="block">
                                    <el-date-picker
                                        v-model="datavalue"
                                        type="daterange"
                                        :editable="false"
                                        :clearable="false"
                                        :size="small"
                                        @change="hqjg"
                                        format="yyyy-MM-dd"
                                        value-format="yyyy-MM-dd"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                                    </el-date-picker>
                                </div>
                                <div class="reserve_space">

                                    <div class="price_top">

                                    </div>
                                    <div class="order_btn_container">
                                        <a class="order_btn" @click="addOrder" id="day_yuding">立即预订<span class="f14">（总计￥{{tprice}}）</span></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <!--预定end-->

                        <!--landlord info start-->
                        <div class="js_box clearfix">
                            <div class="member_pic">
                                <div class="member_ico"></div>
                                <a href="https://www.xiaozhu.com/fangdong/1156304605/" target="_blank">
                                    <img  src="https://image.xiaozhustatic1.com/21/3,3,0,15,339,375,375,742e0af4.jpg" alt="" />
                                </a>
                            </div>
                            <div class="w_240">
                                <h6>
                                    <a class="lorder_name" href="https://www.xiaozhu.com/fangdong/1156304605/" title="给您一个温暖的家" target="_blank">给您一个温暖的家</a>
                                    <span class="member_boy_ico"></span>
                                </h6>
                                <p class="col_green">
                                    <span class="pl10" title="">实名认证</span>
                                    <!---->
                                    <!--<span class="zm_ico zm_credit">750</span>-->
                                    <!---->
                                </p>
                            </div>
                        </div>
                        <!--landlord info end-->
                    </div>

                </div>
                <!--/right content-->
            </div>

            <div class="wrap" id="otherRoomPart"></div>
            <!--/main -->
            <!--hiden dialog-->
            <div id="fullCalendarDialog" style="display:none">
                <div class="colsed"></div>
                <div class="mask"></div>
                <div class="calendar_big clearfix">
                    <div class="calendar_l">
                        <div class="arrow_l1">
                        </div>
                        <div class="arrow_r1"></div>
                        <div class="calendar_big_tit" id="leftMonth"></div>
                        <table class="calendar_top" border="0" cellspacing="0" cellpadding="0">
                            <thead>
                            <tr><th class="col_pink">日</th>
                                <th>一</th>
                                <th>二</th>
                                <th>三</th>
                                <th>四</th>
                                <th>五</th>
                                <th class="col_pink">六</th>
                            </tr></thead>
                        </table>
                        <table width="100%" border="0" cellspacing="4" cellpadding="0" class="calendar_big_table">
                            <tbody id="leftTbody">
                            </tbody>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <div class="calendar_r">
                        <div class="calendar_btm clearfix">
                            <div class="calendar_text col_pink yh">
                            </div>
                        </div>
                        <div class="calendar_big_tit" id="rightMonth"></div>
                        <table class="calendar_top" border="0" cellspacing="0" cellpadding="0">
                            <thead>
                            <tr><th class="col_pink">日</th>
                                <th>一</th>
                                <th>二</th>
                                <th>三</th>
                                <th>四</th>
                                <th>五</th>
                                <th class="col_pink">六</th>
                            </tr></thead>
                        </table>
                        <table width="100%" border="0" cellspacing="4" cellpadding="0" class="calendar_big_table">
                            <tbody id="rightTbody">
                            </tbody>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> <!--/hiden dialog-->
            <div id="addFavoritePop" style="display:none;"></div>
            <div id="addFavoriteGroupPop" style="display:none;">

                <div class="collect_mask" id="Pop_mask"></div>
                <div class="pop_520" id="addGroupPop">
                    <h5>新建收藏分组</h5>
                    <div class="pop_520_main">
                        <div class="group_item">
                            <span>名称：</span>
                            <input type="text" placeholder="填写收藏分组名称" maxlength="16" id="groupName" value="" />
                            <p class="tips_msg"><i></i></p>
                        </div>
                        <div class="group_item">
                            <span>描述：<em>（选填）</em></span>
                            <textarea placeholder="可简单填写对分组的描述" maxlength="200" id="groupDesc"></textarea>
                        </div>
                        <div class="group_item">
                            <span>设置成私密：</span>
                            <label><input type="radio" name="groupPrivate" value="1"  /><em></em><span>仅自己可以查看这个收藏分组</span></label>
                            <label><input type="radio" name="groupPrivate" value="0" checked  /><em></em><span>所有人都可以查看这个收藏分组</span></label>
                        </div>
                    </div>
                    <div class="btn_group">
                        <a href="#ongo" class="save_btn" id="addGroupSave">保存</a>
                        <a href="#ongo" class="cancel_btn"  id="addGroupCancel">取消</a>
                    </div>
                    <input type="hidden" id="favoriteGroupId" value=""/>
                </div> </div>
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
    const clickoutside = {
        // 初始化指令
        bind(el, binding, vnode) {
            function documentHandler(e) {
                // 这里判断点击的元素是否是本身，是本身，则返回
                if (el.contains(e.target)) {
                    return false;
                }
                // 判断指令中是否绑定了函数
                if (binding.expression) {
                    // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
                    binding.value(e);
                }
            }
            // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
            el.vueClickOutside = documentHandler;
            document.addEventListener('click', documentHandler);
        },
        update() {},
        unbind(el, binding) {
            // 解除事件监听
            document.removeEventListener('click', el.vueClickOutside);
            delete el.vueClickOutside;
        },
    };
    import header from "../components/Housing_header.vue"
    var userid=JSON.parse(localStorage.getItem('acc'))

    export default {
        name: "Housing_details",
        data(){
            return{
                bnbid:1,
                listinfo:[],//房源信息
                pic:[],//图片
                tprice:10,//总价格
                datavalue:"", //日期
                jasj:{
                    uid : 2,
                    name : "张三",
                    phone : "131235643215",
                    bnbname:"sss",
                    bnbid : 10,
                    order_price : 20,
                    order_people:1,
                    order_number:8098080980
                },
                activeName:'xz',
                btnShow: false,
                index:'0',
                com:{
                    uid: null,
                    bnbid: null,
                },
                myHeader:'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
                comments:[{
                    headImg:'https://ae01.alicdn.com/kf/Hd60a3f7c06fd47ae85624badd32ce54dv.jpg',
                    inputShow:false
                }],
                reply: [{
                    fromHeadImg: 'https://ae01.alicdn.com/kf/H94c78935ffa64e7e977544d19ecebf06L.jpg',
                    inputShow: false
                }]
            }
        },
        components:{
            Header:header
        },
        directives: {clickoutside},
        created:function(){
            this.bnbid = this.$route.params.bnbid
            this.com.bnbid = this.$route.params.bnbid;
            this.com.uid = JSON.parse(localStorage.getItem('acc'));
            // alert(JSON.parse(localStorage.getItem('acc')))
            this.queryBnbid(this.bnbid);
            this.query();
            this.reqQuery();
        },
        methods:{
            addOrder(){
                var list = this.jasj
                this.$router.push({name:"Housing_order",params:{list:list}});
            },
            //查询评论
            query() {
                this.$axios.post('http://localhost:8081/comment/listAll')
                    .then(res => {
                        this.comments = res.data
                    });
            },reqQuery(){  //查询回复
                this.$axios.post('http://localhost:8081/rep/listAll')
                    .then(res => {
                        this.reply = res.data
                    });
            },

            inputFocus(){
                var replyInput = document.getElementById('replyInput');
                replyInput.style.padding= "8px 8px"
                replyInput.style.border ="2px solid blue"
                replyInput.focus()
            },
            showReplyBtn(){
                this.btnShow = true
            },
            hideReplyBtn(){
                this.btnShow = false
                replyInput.style.padding= "10px"
                replyInput.style.border ="none"
            },
            showReplyInput(i,name,id){
                this.comments[this.index].inputShow = false
                this.index =i
                this.comments[i].inputShow = true
                this.to = name
                this.toId = id
            },
            _inputShow(i){
                return this.comments[i].inputShow
            },
            sendComment(){
                //添加评论
                this.$axios.post("http://localhost:8081/comment/addCom", this.com)
                    .then(res => {
                        if (res.data == 1) {
                            this.$message.success("评论成功");
                            this.query();
                        } else {
                            this.$message.error("评论失败");
                        }
                    })
            },
            onDivInput: function(e) {
                this.replyComment = e.target.innerHTML;
            },

            hqjg(){
                let start=(this.datavalue[0]).split('-');
                start=start[0]+start[1]+start[2]
                start=parseInt(start);
                let end=(this.datavalue[1]).split('-');
                end=end[0]+end[1]+end[2];
                end=parseInt(end);
                let num=end-start;
                this.tprice=num*this.listinfo.price;
            },
            queryBnbid(bnbid){
                this.$axios.post("http://localhost:8081/bnbinfo/queryId?bnbid="+bnbid)
                    .then(response=>{
                        this.listinfo=response.data;
                        var map = new BMap.Map('allmap');
                        var point = new BMap.Point(this.listinfo.longitude, this.listinfo.latitude) // 创建点坐标，汉得公司的经纬度坐标
                        map.centerAndZoom(point, 15);
                        var marker = new BMap.Marker(point);  // 创建标注
                        map.addOverlay(marker);
                        map.disableDragging();
                        this.pic.push(this.listinfo.bedroom);
                        this.pic.push(this.listinfo.room);
                        this.pic.push(this.listinfo.toilet);
                        this.pic.push(this.listinfo.kitchen);
                        this.pic.push(this.listinfo.other);
                        this.tprice=this.listinfo.price;
                    })
            }
        },

    }
</script>

<style lang="stylus" scoped>

    .my-reply
        padding 10px
        background-color #fafbfc
        .header-img
            display inline-block
            vertical-align top
        .reply-info
            display inline-block
            margin-left 5px
            width 90%
            @media screen and (max-width:1200px) {
                width 80%
            }
            .reply-input
                min-height 20px
                line-height 22px
                padding 10px 10px
                color #ccc
                background-color #fff
                border-radius 5px
                &:empty:before
                    content attr(placeholder)
                &:focus:before
                    content none
                &:focus
                    padding 8px 8px
                    border 2px solid blue
                    box-shadow none
                    outline none
        .reply-btn-box
            height 25px
            margin 10px 0
            .reply-btn
                position relative
                float right
                margin-right 15px
        .my-comment-reply
            margin-left 50px
            .reply-input
                width flex
        .author-title:not(:last-child)
            border-bottom: 1px solid rgba(178,186,194,.3)
        .author-title
            padding 10px
            .header-img
                display inline-block
                vertical-align top
            .author-info
                display inline-block
                margin-left 5px
                width 60%
                height 40px
                line-height 20px
                >span
                    display block
                    cursor pointer
                    overflow hidden
                    white-space nowrap
                    text-overflow ellipsis
                .author-name
                    color #000
                    font-size 18px
                    font-weight bold
                .author-time
                    font-size 14px
            .icon-btn
                width 30%
                padding 0 !important
                float right
                @media screen and (max-width : 1200px){
                    width 20%
                    padding 7px
                }
                >span
                    cursor pointer
                .iconfont
                    margin 0 5px
            .talk-box
                margin 0 50px
                >p
                    margin 0
                .reply
                    font-size 16px
                    color #000
            .reply-box
                margin 10px 0 0 50px
                background-color #efefef

        .el-date-editor.el-input, .el-date-editor.el-input__inner {
            width: 300px;
        }
    #allmap{
        width: 918px;
        height: 500px;
        border:1px solid green;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

</style>
