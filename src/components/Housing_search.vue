<template>
<div>
    <!-- 头部 -->
    <div class="o_mask" id='maskName'  style="display:none;"></div>
    <!--<div class="head_wrapper">-->
        <!--<a href="https://www.xiaozhu.com" class="logo_v2">小猪</a><span class="slogan_v2 slogan_black"></span>-->
        <!--&lt;!&ndash;    <span class="list_city" id="suggest_icon4Search">西安<i id="showCitySuggestion" class="icon_tri_down tri_down_f"></i><i id="closeCitySuggestion" class="icon_tri_down icon_tri_up"></i></span>&ndash;&gt;-->
        <!--<ul class="nav_R nav_commen" id="u">-->
            <!--<li><a rel="nofollow" title="" class="show-register-box" href="https://www.xiaozhu.com/register?next=https%3A%2F%2Fxa.xiaozhu.com%2F">注册</a></li>-->
            <!--<li>·</li>-->
            <!--<li><a rel="nofollow" href="https://www.xiaozhu.com/login?next=https%3A%2F%2Fxa.xiaozhu.com%2F" class="logindialog">登录</a></li>-->
            <!--<li>·</li>-->
            <!--<li class="current">-->
                <!--<a href="#ongo" class="openTri_R">短租指南</a>-->
                <!--<div class="head_pop width_58 top40">-->
                    <!--<div class="pop_column">-->
                        <!--<span><a class="fl" href="https://www.xiaozhu.com/xzweb.php?op=Help_UserGuide&amp;type=tenant">房客指南</a><a class="fr" href="https://www.xiaozhu.com/xzweb.php?op=Help_UserGuide&amp;type=landlord">房东指南</a></span>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</li>-->
            <!--<li><a rel="nofollow" data-href="https://www.xiaozhu.com/publish" class="btn_free show-register-box" id="Pub_Btn">免费发布房源</a></li>-->
        <!--</ul>-->
    <!--</div>-->



    <Header></Header>
    <!--<div class="detail_wrapper">-->
        <!--<div class="detail_head clearfix">-->
            <!--<a href="https://www.xiaozhu.com"  style="margin-left: -270px;" class="xz_logo_detail">小猪</a><span class="slogan_v2 slogan_black"></span>-->
            <!--<ul class="nav_R nav_commen" style="margin-right: -270px;">-->
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
    <!--</div>-->
        <!-- /底部 -->

    <!--搜索框-->
    <div class="city_wrap" style="margin: -55px;margin-top: -50px">
        <!--city top-->
        <div class="city_top_box clearfix" id="list_filter">
            <div class="city_l">
                <div class="clearfix mb_14">
                    <div class="city_select city_bg">
                        <input v-model="map.city" id="searchcityd" placeholder="城市或目的地">
                    </div>
                    <div class="date_box city_bg city_search_index" id="filter-calendar-box">
                        <el-button @click="selectInfo()">搜索</el-button>
                    </div>

                </div>

                <div class="type_bg clearfix keyword-box" style="border: 1px red solid">
                    &nbsp;&nbsp;&nbsp;关键词&nbsp;&nbsp;&nbsp;
                    <el-input v-model="map.bnbname" style="width: 450px;" ></el-input>
                </div>

                <div class="type_bg clearfix" id="rentType">
                    <h6 class="type_tit1">出租类型</h6>
                    <el-radio-group v-model="map.hid" size="small">

                    <!--<ul class="type_list">-->
                        <!--<li class="rentType" type="zhengzu">-->
                            <span class="type_ico1"><el-radio-button  label="1" >整套出租</el-radio-button></span>
                        <!--</li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-->
                        <!--<li class="rentType" type="danjian">-->

                            <span class="type_ico2" ><el-radio-button label="2" >独立单间</el-radio-button></span>
                        <!--</li>-->
                        <!--<li class="rentType" type="shafa">-->
                            <span class="type_ico3" ><el-radio-button label="3" >合住房间</el-radio-button></span>
                        <!--</li>-->

                        <input type="hidden" id="zhengzu" value="https://sh.xiaozhu.com/zhengzu-duanzufang-2/" />

                        <input type="hidden" id="danjian" value="https://sh.xiaozhu.com/danjian-duanzufang-2/" />

                        <input type="hidden" id="shafa" value="https://sh.xiaozhu.com/shafa-duanzufang-2/" />

                        <input type="hidden" id="danjianshafa" value="https://sh.xiaozhu.com/danjianshafa-duanzufang-2/" />

                        <input type="hidden" id="danjianzhengzu" value="https://sh.xiaozhu.com/danjianzhengzu-duanzufang-2/" />

                        <input type="hidden" id="shafazhengzu" value="https://sh.xiaozhu.com/shafazhengzu-duanzufang-2/" />

                        <input type="hidden" id="danjianshafazhengzu" value="https://sh.xiaozhu.com/danjianshafazhengzu-duanzufang-2/" />
                        <input type="hidden" id="norenttype" value="https://sh.xiaozhu.com/search-duanzufang-0/">
                    <!--</ul>-->
                    </el-radio-group>
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
                    &nbsp;&nbsp;&nbsp;<span>价格</span>&nbsp;&nbsp;
                    <span>起始价格</span>&nbsp;&nbsp;&nbsp;
                    <el-input-number
                        min="0"
                        size="small"
                        max="9999"

                        v-model="map.startprice" style="width: 200px" placeholder="请输入"></el-input-number>&nbsp;&nbsp;&nbsp;
                    <span>结束价格</span>&nbsp;&nbsp;&nbsp;
                    <el-input-number
                        min="0"
                        size="small"
                        max="9999"
                        v-model="map.endprice" style="width: 200px" placeholder="请输入"></el-input-number>
                </div>
                <div class="type_bg clearfix">
                    <h6 class="type_tit1">最多宜居</h6>
                    <div class="select_box1">
                        <el-select style="width: 200px;" v-model="map.liva_id" placeholder="请选择">
                            <el-option
                                v-for="item in livable"
                                :key="item.liva_num"
                                :label="item.liva_num"
                                :value="item.liva_id">
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
    <div class="clearfix" style="margin-top: 230px;height: 500px;">
        <!--地图-->

        <!--<div class="city_map" >-->
        <div id="allmap" class="auto_fixed" :class="auto_fixed" style="margin-top: -12px"></div>
            <!--<div class="auto_fixed" :class="auto_fixed">自动粘滞固定头部，需要一直展示的</div>-->

            <div class="auto_fixed_fake" :style="{display: auto_fixed.fixed ? 'block':'none'}"></div>
        <div class="content"   style="height: auto;margin-top: -20px">
            <ul  id="uinfo">
                <span v-for="info in listinfo">
                <li >

                    <a target="_blank"  class="resule_img_a">
                        <img @click="details(info.bnbid)" style="height: 330px;width: 440px" class="lodgeunitpic" :title="'info.bnbname'"
                             :src="'http://localhost:8081/'+info.bedroom"
                             :alt="'{{info.bnbname}}'" />
                    </a>


                    <div id="pic" >
                                        <div>
        <span class="result_price">¥<i>{{info.price}}</i>起/晚</span>
        </div>

        <span class="result_img" >
            <!--<a class="=&quot;search_result_gridsum&quot;" href="https://www.xiaozhu.com/fangdong/41687294701/" target="_blank">-->
                <img  width="42" height="42"  src="https://image.xiaozhustatic1.com/23/5,17,0,89,19158,260,260,7951e0d2.jpg">
            <!--</a>-->
        </span>
        <div class="result_intro">

            <a class="sTitle">
                                                <span class="result_title hiddenTxt">{{info.bnbname}}</span>
            </a>

            <em class="hiddenTxt">

                {{info.hname}}/宜住{{info.liva_num}}人
                <!--<span class="commenthref">-->
                     <!-- - 5分/76条点评                </span>-->
            </em>
            <p class="hiddenTxt newLabel">

                                                                                                                                <!--<span class="col_slogn" title="速订：下单即可入住，无需房东确认"><i class="new_ico"></i>速订</span>-->

                                                    <!--<span class="col_slogn" title="优品：设施齐全、服务贴心、体验优质"><i class="new_ico"></i>优品</span>-->

                <!--<span class="mianyajin_ico" title="免押金：小猪在线担保、无需支付押金"></span>-->

                <!--<span class="yanzhen_ico" title="验真：小猪实地考察，确保房源真实性"></span>-->
                <!--<span class="shipai_ico" title="实拍：摄影师上门拍摄，100%还原房源"></span>-->

                                                &nbsp;
            </p>
        </div>
    </div>



                    <!--<a class="sTitle">-->
                        <!--<span class="result_title hiddenTxt">{{info.bnbname}}</span>-->
                    <!--</a>-->
                    <!--<em class="sTitle">&#165;<i>{{info.price}}</i></em>-->
                    <!--<em class="hiddenTxt">-->
                        <!--{{info.hname}}/宜住{{info.liva_num}}人                <span class="commenthref">-->
                          <!--</span>-->
                    <!--</em>-->
                </li>
</span>
            </ul>
        </div>
    </div>
    <!-- /中间 -->


    <!-- 底部 -->
</div>
</template>
<script>
    import header from "../components/Housing_header.vue"
    import ElSelectDropdown from "element-ui/packages/select/src/select-dropdown";
    // const map=new BMap.Map('allmap');
    export default {
        name: "Housing_search",
        components: {
            ElSelectDropdown,
            Header:header
        },
        data(){
            return{
                gjc:"",
                auto_fixed: {
                    fixed: false
                },
                listinfo:[],
                map:{city:"",bnbname:"",hid:"",liva_id:0,startprice:0,endprice:9999},
                livable: [],
            }
        },
        created(){
            this.$nextTick(function () {
                window.addEventListener('scroll', this.onScroll)
            });
            // this.cs();
            if(this.$route.params.city!=null){
                this.map.city=this.$route.params.city;
            }

            this.selectInfo();
            this.getlivable ();
        },
        mounted(){

            this.cs();
            this.selectInfo();
            this.getlivable ();
            this.$nextTick(function () {

                window.addEventListener('scroll', this.onScroll)

            });
        },
        methods:{
            fy(){
                this.$router.push("Housing_info");
            },
            selectInfo(){
                console.log(this.map)
                if(this.map.startprice==null || this.map.startprice===""){
                    this.map.startprice=0;
                }
                if(this.map.endprice==null || this.map.endprice===""){
                    this.map.endprice=9999;
                }
                this.$axios.post('http://localhost:8081/bnbinfo/select',this.map)
                    .then(res => {
                        this.listinfo=res.data;
                        var map = new BMap.Map('allmap');
                        for(var i=0;i<this.listinfo.length;i++){
                            var point = new BMap.Point(this.listinfo[i].longitude, this.listinfo[i].latitude) // 创建点坐标，汉得公司的经纬度坐标
                            map.centerAndZoom(point, 12);
                            var marker = new BMap.Marker(point);  // 创建标注
                            map.addOverlay(marker);
                        }

                        // map.disableDragging();
                        marker.enableDragging()
                        map.enableScrollWheelZoom(false)
                    });
            },
            //获取宜居人数
            getlivable () {
                this.$axios.post('http://localhost:8081/livable/queryAll')
                    .then(response => {
                        this.livable = response.data

                    }).catch(error => {

                })
            },
            details(bnbid){
                this.$router.push({name: 'Housing_details',params: {bnbid}})
            },
            cs(){
                var map = new BMap.Map('allmap');
                var point = new BMap.Point(113.172257, 36.197589) // 创建点坐标，汉得公司的经纬度坐标
                map.centerAndZoom(point, 15);
                var marker = new BMap.Marker(point);  // 创建标注
                map.addOverlay(marker);
                map.disableDragging();
            },
            onScroll(){

                let scrolled = document.documentElement.scrollTop || document.body.scrollTop;

                let header_height = null;

                if(document.getElementsByClassName('city_wrap')[0]){

                    header_height = document.getElementsByClassName('city_wrap')[0].offsetHeight

                }

                // console.log('滚动的距离:'+scrolled,'头部的高度:'+ header_height);

                this.auto_fixed = {

                    auto_fixed: true,

                    fixed: scrolled >= header_height

                }

            }
        }
    }
</script>

<style scoped>
    .el-input >>> .el-input__inner{
        border:0px;
        height:14px;
    }
    /*ul{*/
        /*padding-right: -20px;*/
        /*margin-right: -20px;*/
        /*!*margin-top: -260px;*!*/
    /*}*/
    #uinfo li{

        float: left;
        width: 50%;
        /*padding-right: 12px;*/
        /*margin-bottom: 89px;*/
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
        z-index: 1;
    }
    .auto_fixed{
        height: 750px;
        background: orange;
        position: absolute;
        line-height: 3em;
        width:39%;
        text-align: center;
        float:left;
    }

    .fixed{
        position: fixed;
        top: 0px;
        width: 39%;
    }

    .content{
        color: gray;
        width:60%;
        padding: 8px;
        float:right;
        /*border: 1px solid red;*/
    }
    .city_wrap{

        padding: 8px 10px;

    }
    .type_ico1{
          margin-bottom: 10px;
        margin-right: 10px;
      }
    .type_ico2{
        margin-bottom: 10px;
        margin-right: 10px;
    }
    .type_ico3{
        margin-bottom: 10px;
        margin-right: 10px;
    }
    el-radio-button{
        padding-bottom: 5px;
    }
    #pic{
        margin-top: -48px;
        width: 440px;
    }
    .nav_commen li {
        height: 40px;
        line-height: 40px;
    }
    .nav_R li {
        float: left;
        color: #fff;
        height: 44px;
        line-height: 44px;
        position: relative;
        z-index: 999;
    }
    #u li{
        display: list-item;
        text-align: -webkit-match-parent;
    }
    .nav_R {
        float: right;
        font-family: "microsoft yahei";
        font-size: 14px;
    }
</style>
