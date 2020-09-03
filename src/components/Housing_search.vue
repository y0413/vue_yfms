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
                    <el-input v-model="map.startprice" style="width: 100px" placeholder="请输入"></el-input>&nbsp;&nbsp;&nbsp;
                    <span>结束价格</span>&nbsp;&nbsp;&nbsp;
                    <el-input v-model="map.endprice" style="width: 100px" placeholder="请输入"></el-input>
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
    <div class="clearfix" style="margin-top: 14%;height: 500px;">
        <!--地图-->

        <!--<div class="city_map" >-->
        <div id="allmap" class="auto_fixed" :class="auto_fixed">自动粘滞固定头部，需要一直展示的</div>
            <!--<div class="auto_fixed" :class="auto_fixed">自动粘滞固定头部，需要一直展示的</div>-->

            <div class="auto_fixed_fake" :style="{display: auto_fixed.fixed ? 'block':'none'}"></div>
        <div class="content"  style="height: auto">
            <ul  v-for="info in listinfo">
                <li>
                    <a target="_blank" href="https://sh.xiaozhu.com/fangzi/7578140916.html" class="resule_img_a">
                        <img style="height: 330px;width: 440px" class="lodgeunitpic" :title="'info.bnbname'" data-growing-title="7578140916"
                             :src="'http://localhost:8081/'+info.bedroom"
                             :alt="'{{info.bnbname}}'" />
                    </a>
                    <a class="sTitle">
                        <span class="result_title hiddenTxt">{{info.bnbname}}</span>
                    </a>
                    <em class="sTitle">&#165;<i>{{info.price}}</i></em>
                    <em class="hiddenTxt">
                        {{info.hname}}/宜住{{info.liva_num}}人                <span class="commenthref">
                          </span>
                    </em>
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
        components: {ElSelectDropdown},
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
        mounted(){
            this.$nextTick(function () {

            window.addEventListener('scroll', this.onScroll)

        });
            this.cs();
            this.selectInfo();
            this.getlivable ();
        },
        methods:{
            selectInfo(){
                if(this.map.startprice==null){
                    this.map.startprice=0;
                }
                if(this.map.endprice==null){
                    this.map.endprice=9999;
                }
                this.$axios.post('http://localhost:8081/bnbinfo/select',this.map)
                    .then(res => {
                        this.listinfo=res.data;
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
            cs(){
                var map = new BMap.Map('allmap');
                var point = new BMap.Point(113.172257, 36.197589) // 创建点坐标，汉得公司的经纬度坐标
                map.centerAndZoom(point, 15);
                var marker = new BMap.Marker(point);  // 创建标注
                map.addOverlay(marker);
                map.disableDragging();
            },
            onScroll(){

                let scrolled = document.documentElement.scrollTop || document.body.scrollTop

                let header_height = null

                if(document.getElementsByClassName('city_wrap')[0]){

                    header_height = document.getElementsByClassName('city_wrap')[0].offsetHeight

                }

                console.log('滚动的距离:'+scrolled,'头部的高度:'+ header_height)

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
    ul{
        padding-right: -20px;
        margin-right: -20px;
        /*margin-top: -260px;*/
    }
    .auto_fixed{

        height: 680px;
        background: orange;
        position: absolute;
        line-height: 3em;
        width:550px;
        text-align: center;
        float:left;
    }

    .fixed{

        position: fixed;

        top: 0px;

        width: 550px;

    }

    .content{

        color: gray;
        width:830px;
        padding: 8px;
        float:right;
        border: 1px solid red;
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
</style>
