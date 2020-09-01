<template>
<div>
    <!-- 头部 -->
    <div class="o_mask" id='maskName'  style="display:none;"></div>
    <div class="detail_wrapper">
        <div class="detail_head clearfix">
            <a href="https://www.xiaozhu.com"  style="margin-left: -270px;" class="xz_logo_detail">小猪</a><span class="slogan_v2 slogan_black"></span>
            <ul class="nav_R nav_commen" style="margin-right: -270px;">
                <li><a rel="nofollow" title="" class="show-register-box" href="https://www.xiaozhu.com/register?next=https%3A%2F%2Fbj.xiaozhu.com%2Ffangzi%2F1209886305.html">注册</a></li>
                <li>&middot;</li>
                <li><a rel="nofollow" class="logindialog" href="https://www.xiaozhu.com/login?next=https%3A%2F%2Fbj.xiaozhu.com%2Ffangzi%2F1209886305.html">登录</a></li>
                <li>&middot;</li>
                <li class="current">
                    <a href="#ongo" class="openTri_R">短租指南</a>
                    <div class="head_pop width_58 top40">
                        <div class="pop_column">
                            <span><a class="fl" href="https://www.xiaozhu.com/xzweb.php?op=Help_UserGuide&type=tenant">房客指南</a><a class="fr" href="https://www.xiaozhu.com/xzweb.php?op=Help_UserGuide&type=landlord">房东指南</a></span>
                        </div>
                    </div>
                </li>
                <li><a rel="nofollow" data-href="https://www.xiaozhu.com/publish" class="btn_free show-register-box" id = "Pub_Btn">免费发布房源</a></li>
            </ul>
        </div>
    </div>
        <!-- /底部 -->

    <!--搜索框-->
    <div class="city_wrap" style="margin: -55px">
        <!--city top-->
        <div class="city_top_box clearfix" id="list_filter">
            <div class="city_l">
                <div class="clearfix mb_14">
                    <div class="city_select city_bg">
                        <input type="text" value="上海" id="searchcityd" placeholder="城市或目的地">

                    </div>
                    <div class="date_box city_bg city_search_index" id="filter-calendar-box">
                        <input class="ipt_list1" type="text" readonly="" id="startenddate" name="startenddate"   value="入住离开日期" />
                        <input type="hidden" name="startdate" id="startdate" value=""/>
                        <input type="hidden" name="enddate" id="enddate" value=""/>
                        <div id="calendar-box" class="calendar-box-index calendar-box-index-filter" style="display:none"> </div>
                        <span class="icon_searchandremove" style="display:none"><span class="ipt_icon icon_delete"></span></span>

                    </div>

                </div>

                <div class="type_bg clearfix keyword-box">
                    <h6 class="type_tit1">关键词</h6>
                    <el-input style="width: 465px;"></el-input>
                </div>

                <div class="type_bg clearfix" id="rentType">
                    <h6 class="type_tit1">出租类型</h6>
                    <ul class="type_list">
                        <li class="rentType" type="zhengzu">
                            <span class="type_ico1">整套出租</span>
                        </li>
                        <li class="rentType" type="danjian">
                            <span class="type_ico2" >独立单间</span>
                        </li>
                        <li class="rentType" type="shafa">
                            <span class="type_ico3" >合住房间</span>
                        </li>

                        <input type="hidden" id="zhengzu" value="https://sh.xiaozhu.com/zhengzu-duanzufang-2/" />

                        <input type="hidden" id="danjian" value="https://sh.xiaozhu.com/danjian-duanzufang-2/" />

                        <input type="hidden" id="shafa" value="https://sh.xiaozhu.com/shafa-duanzufang-2/" />

                        <input type="hidden" id="danjianshafa" value="https://sh.xiaozhu.com/danjianshafa-duanzufang-2/" />

                        <input type="hidden" id="danjianzhengzu" value="https://sh.xiaozhu.com/danjianzhengzu-duanzufang-2/" />

                        <input type="hidden" id="shafazhengzu" value="https://sh.xiaozhu.com/shafazhengzu-duanzufang-2/" />

                        <input type="hidden" id="danjianshafazhengzu" value="https://sh.xiaozhu.com/danjianshafazhengzu-duanzufang-2/" />
                        <input type="hidden" id="norenttype" value="https://sh.xiaozhu.com/search-duanzufang-0/">
                    </ul>
                </div>

            </div>
            <div class="city_r">
                <div class="type_bg clearfix">
                    <h6 class="type_tit2">户型</h6>
                    <div class="info_box"  id="housetyperoomcnt">

                        <label >
                            <input class="checkbox" type="checkbox" id="yiju" value="yiju" onclick="submit_by_attr();"/>一居
                        </label>
                        <label >
                            <input class="checkbox" type="checkbox"  value="liangju" onclick="submit_by_attr();" />二居
                        </label>
                        <label >
                            <input class="checkbox" type="checkbox"  value="sanju"  onclick="submit_by_attr()"/>三居
                        </label>
                        <label >
                            <input class="checkbox " type="checkbox"  value="siju" onclick="submit_by_attr()" />四居
                        </label>
                        <label >
                            <input class="checkbox" type="checkbox"  value="sijuyishang" onclick="submit_by_attr()"/>其他
                        </label>
                    </div>
                </div>
                <div class="type_bg clearfix">
                    <h6 class="type_tit2">设施</h6>
                    <div class="info_box" id="facilities">


                        <label class=""><input type="checkbox" name="amenities"   onclick="submit_by_attr()" value="facility_Shower"/>淋浴</label> <label class=""><input type="checkbox" name="amenities"   onclick="submit_by_attr()" value="facility_AirCondition"/>空调</label> <label class=""><input type="checkbox" name="amenities"   onclick="submit_by_attr()" value="facility_Tv"/>电视</label> <label class=""><input type="checkbox" name="amenities"   onclick="submit_by_attr()" value="facility_Netword"/>网络</label> <label class=""><input type="checkbox" name="amenities"   onclick="submit_by_attr()" value="facility_Kitchen"/>允许做饭</label> <label class=""><input type="checkbox" name="amenities"   onclick="submit_by_attr()" value="facility_Heater"/>暖气</label> <label class=""><input type="checkbox" name="amenities"   onclick="submit_by_attr()" value="facility_Privatetoilet"/>独卫</label>
                    </div>

                </div>
                <div class="type_bg clearfix">
                    <h6 class="type_tit1">最多宜居</h6>
                    <div class="select_box1">
                        <el-select style="width: 500px" v-model="value" clearable placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <input type="hidden" class="btn_pink4search" id="filter_confirm" value="确定" />
            </div>
        </div>
    </div>
    <!-- /搜索框 -->

    <!-- 中间 -->
    <div class="clearfix" style="margin-top: 14%;height: 500px;">
        <!--地图-->
        <div class="city_map" style="border: 1px red solid">
            <div class="list_map">
                <h1>地图</h1>
                <div class="map-canvas">
                    <div id="XZMap" style="width:100%;height:100%;overflow:hidden;margin:0;"></div>
                </div>
            </div>
        </div>
        <!--/map-->
        <!--search list-->
        <div class="search_box">
            <div class="result_box clearfix">
                <div class="fl"> <a href="https://www.xiaozhu.com">小猪</a>&nbsp;&gt;&nbsp;&nbsp;上海短租<span class="paddingL10">
                    超过<span id="searchTotal">20000</span>个房源
                     </span>
                </div>
                <div class="fr" id="checkfra">
                    <span class="col_pink pr20" id="defalut_sort">
                        <a href="javascript:void(0);" onlick="return false;" >推荐排序</a>
                    </span>
                    <span class="pr20" id="haoping_sort">
                        <a title="好评排序" href="https://sh.xiaozhu.com/zuihaoping-duanzufang-10/">好评排序</a>
                    </span>
                    <span id="nodefalut_sort">
                        <a title="点击按价格由低到高排序" href="https://sh.xiaozhu.com/zuipianyi-duanzufang-10/">价格
                        <span class="arrow_top"></span>
                            <span class="arrow_down"></span>
                        </a>
                    </span>
                </div>
            </div>
        </div>
        <!--pic list-->
        <div id="page_list" style="border: 5px blue solid;height: 500px">
            <ul class="pic_list clearfix list_code" style="border: 1px red solid ">
                <li lodgeunitid="lodgeunit_7578140916" latlng="31.238349,121.491339">
                    <a target="_blank" href="https://sh.xiaozhu.com/fangzi/7578140916.html" class="resule_img_a">
                        <img class="lodgeunitpic" title="南京路外滩豫园地铁2号10号线高区大床房整租" data-growing-title="7578140916"
                             lazy_src="https://image.xiaozhustatic3.com/12/2,9,0,64,3298,1799,1200,878d30db.jpg"
                             alt="南京路外滩豫园地铁2号10号线高区大床房整租" />
                    </a>
                    <div class="favorite  lodge_7578140916 wsc_ico"  al="7578140916"  title="收藏"></div>
                    <div class="result_btm_con lodgeunitname" detailurl="https://sh.xiaozhu.com/fangzi/7578140916.html" style="cursor:pointer">
                        <div>
                            <span class="result_price">&#165;<i>338</i></span>
                        </div>

                        <div class="result_intro">
                            <a class="sTitle">
                                <span class="result_title hiddenTxt">南京路外滩豫园地铁2号10号线高区大床房整租</span>
                            </a>

                            <em class="hiddenTxt">
                                整套出租/1室0厅/2张床铺/宜住2人                <span class="commenthref">
           - 4.3分/80条点评                </span>
                            </em>

                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!-- /中间 -->


    <!-- 底部 -->
</div>
</template>
<script>
    import ElSelectDropdown from "element-ui/packages/select/src/select-dropdown";
    export default {
        name: "Housing_search",
        components: {ElSelectDropdown}
    }
</script>

<style scoped>

</style>
