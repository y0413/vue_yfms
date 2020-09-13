<template>
    <div >
        <!--<div class="top"></div>-->
        <div class="o_mask" id='maskName'  style="display:none;"></div>
        <Header></Header>

            <div class='h_top_box'>
                <div class="h_step_box" style="height: auto;background-color: rgba(252,246,255,0);width: 1000px">
                    <el-steps :active="0" finish-status="success">
                        <el-step title="进行中"></el-step>
                        <el-step title="房源描述"></el-step>
                        <el-step title="房源图片"></el-step>
                    </el-steps>
                </div>
            </div>
            <el-form :model="bnb" ref="bnb" :rules="rules3">

            <div class="h_wrap mt20">
                <h4 class="h_tit">房源地址</h4>
                <div class="address_box" >
                    <div class="clearfix">
                        <div class="address_text">房源位于：</div>
                        <div class="address_list">

                            <p class="open_all"  style="display:none">显示全部地址<span></span></p>

                            <div>
                            <el-cascader
                                size="large"
                                :options="options"
                                v-model="selectedOptions"
                                @change="handleChange">
                            </el-cascader>
                            </div>
                            <div>
                                <el-form-item prop="address">
                                <el-input style="width: 200px" placeholder="详细地址" v-model="bnb.address" @blur="cx()"></el-input>
                                </el-form-item>
                            </div>
                            <div id="allmap"></div>

                        </div>
                    </div>
                </div>
                <div class="no_address clearfix"  style="display:none;">
                    <p class="no_address_text">暂无地址</p>
                    <div class="new_address clearfix">
                        <a class="add_btn fl" href="" id="add_new_site"><span></span>位于新地址</a>
                        <input type="hidden"  id="add_address"  value=""></input>
                        <p class="h_check_tip simsun mt2 " id="tip_add_address" style="display:none">请您填写房源地址</p>
                    </div>
                </div>
                <input type="hidden" name="address_id" id="address_id"  value="0"></input>
                <input type="hidden" name="address_nation" id="address_nation"  value=""></input>
                <input type="hidden" name="address_province" id="address_province"  value=""></input>
                <input type="hidden" name="address_city" id="address_city"  value=""></input>
                <input type="hidden" name="address_district" id="address_district"  value=""></input>
                <input type="hidden" name="address_street" id="address_street"  value=""></input>
                <input type="hidden" name="address_address" id="address_address"  value=""></input>
                <input type="hidden" name="address_lnglat" id="address_lnglat"  value=""></input>
                <input type="hidden" name="address_doorNumber" id="address_doorNumber"  value=""></input>
                <input type="hidden" name="ori_address_id" id="ori_address_id"  value="0"></input>
                <input type="hidden" name="ori_nationid" id="ori_nationid"  value=""></input>
            </div>            <div class="h_wrap mt20">

            <h4 class="h_tit">房源基本情况</h4>
            <div  class="h_house_info">
                <ul>
                    <li class="clearfix pb15" >
                        <label class="type w_103" style="width: 100px;color:#000;">房屋名称：</label>
                        <el-form-item prop="bnbname">
                            <el-input style="width: 200px" placeholder="民宿名称" v-model="bnb.bnbname" ></el-input>
                        </el-form-item>
                    </li>
                    <li class="clearfix pb15" >
                        <label class="type w_103" style="width: 100px;color:#000;">房屋类型：</label>

                        <el-form-item prop="rid">
                        <el-select v-model="bnb.rid" placeholder="请选择">
                            <el-option
                                v-for="item in rommtype"
                                :key="item.rid"
                                :label="item.rname"
                                :value="item.rid">
                            </el-option>
                        </el-select>
                        </el-form-item>
                    </li>
                    <li class="clearfix pb15" >
                        <label class="type w_103" style="width: 100px;color:#000;">出租类型：</label>
                        <div class="h_house_r pr">
                            <el-radio-group  v-model="bnb.hid">

                                <!--<el-radio :label="6">备选项</el-radio>-->
                                <!--<el-radio :label="9">备选项</el-radio>-->

                            <ul class="h_house_type">
                                <li style="margin: 10px 0;" class="leasetype_red_err " id="whole_red_err"  >

                                    <span class="select_leasetype">
                                        <el-radio :label="1">&nbsp;
                                        </el-radio>
                                    </span>

                                    <!--<span class="set " style="background: url(./images/pubsysV2/pot_gray_06.png) no-repeat center"></span><p style="font-weight: bold;">整套出租</p>-->
                                    <span style="background:  no-repeat center;height: 21px;width: 24px;margin-left: 15px;margin-bottom: 5px;"></span>
                                    <p style="display: inline-block;margin-left: 15px;font-size: 12px;color: #757575;">

                                        <span style="display: block;font-size: 14px;font-weight: bold;color: #212121;">整套出租</span>
                                        <br/>房客独享整套房屋

                                    </p>

                                </li>
                                <li style="margin: 10px 0;" class="leasetype_red_err " id="part_red_err"  >
                                    <span class="select_leasetype ">
                                        <el-radio :label="2">&nbsp;
                                        </el-radio>
                                    </span>
                                    <!--<span class="alone_room "  ></span><p style="font-weight: bold;">独立单间</p>-->
                                    <span style="background:  no-repeat center;height: 21px;width: 24px;margin-left: 15px;margin-bottom: 5px;"></span>
                                    <p style="display: inline-block;margin-left: 15px;font-size: 12px;color: #757575;">
                                        <span style="display: block;font-size: 14px;font-weight: bold;color: #212121;">独立单间</span>
                                        <br/>房客拥有一个独立的房间，但部分空间与他人分享
                                    </p>
                                </li>
                                <li style="margin: 10px 0;" class="leasetype_red_err " id="sharedRoom_red_err"   >
                                    <span class="select_leasetype ">
                                        <el-radio :label="3">&nbsp;
                                        </el-radio>
                                    </span>
                                    <!--<span class="sharedRoom "></span><p style="font-weight: bold;">合住房间</p>-->
                                    <span style="background:  no-repeat center;height: 21px;width: 24px;margin-left: 15px;margin-bottom: 5px;"></span>
                                    <p style="display: inline-block;margin-left: 15px;font-size: 12px;color: #757575;">
                                        <span style="display: block;font-size: 14px;font-weight: bold;color: #212121;">合住房间</span>
                                        <br/>房客与他人共住一个房间，没有独立的卧室（如：床位、沙发等）
                                    </p>
                                </li>
                            </ul>
                            </el-radio-group>
                            <input type="hidden"  id="leasetype"  value=""></input>
                            <p class="no_select_tip simsun" id="tip_leasetype" style="display:none">请选择出租类型</p>
                        </div>
                    </li>


                    <li class="clearfix pb15" id="luToilet" >
                        <label class="type1 w_103" style="color:#000;">卫生间类型：</label>
                        <div class="h_house_r clearfix " id="toilet">
                            <el-radio-group fill="#409EFF"  v-model="bnb.guard">
                            <ul class="h_toliet_type">
                                <li style="margin: 10px 0;" class="leasetype_red_err  " value="2">
                                    <span class="select_leasetype ">
                                        <el-radio :label="0">&nbsp;</el-radio>
                                    </span>
                                    <p style="display: inline-block;margin-left: 15px;font-size: 12px;color: #757575;">
                                        <span style="display: block;font-size: 14px;font-weight: bold;color: #212121;">独立卫生间</span><br/>
                                        房客独享的卫生间
                                    </p>
                                </li>
                                <li style="margin: 10px 0;" class="leasetype_red_err  " value="1">
                                    <span class="select_leasetype ">
                                        <el-radio :label="1">&nbsp;</el-radio>
                                    </span>
                                    <p style="display: inline-block;margin-left: 15px;font-size: 12px;color: #757575;">
                                        <span style="display: block;font-size: 14px;font-weight: bold;color: #212121;">共用卫生间</span>
                                        <br/>可能与他人分享的卫生间
                                    </p>
                                </li>
                            </ul>
                            </el-radio-group>
                            <input type="hidden"  id="toilettype" key="y" value=""></input>
                            <p class="h_check_tip simsun" id="tip_toilettype"  style="display:none">请选择卫生间类型</p>
                        </div>
                    </li>

                    <li class="clearfix pb15">
                        <label class="type1 w_103" style="color:#000;">宜居人数：</label>
                        <span style="line-height: 40px;font-size:12px;color:#757575">请填写<span style="color:#ff4081;">最适宜居住的人数</span>
                    <p id="tantnumDesc" style="margin-left: 103px;font-size:12px;color:#757575"></p>
                </span>
                        <div class="h_house_r" style="margin-left: 103px;margin-top: 10px;">
                            <div style="width: 100px" class=" select_box fl mr10 tantnum_box" id="select_red_err">
                                <el-form-item prop="liva_id">
                                    <el-select style="width: 200px;" v-model="bnb.liva_id">
                                        <el-option
                                            v-for="item in livable"
                                            :key="item.liva_num"
                                            :label="item.liva_num"
                                            :value="item.liva_id">
                                        </el-option>
                                    </el-select>
                                </el-form-item>

                            </div>

                            <span class="bedDetailInfo">人</span>
                            <p class="h_check_tip ml10 simsun" id="tip_tantnum" value="" style="display:none">请选择宜居人数</p>
                        </div>
                    </li>
                    <br/>
                    <li class="clearfix pb15" >
                        <label class="type w_103" style="width: 100px;color:#000;">房屋价格：</label>
                        <el-form-item prop="price">
                            <el-input  style="width: 200px" placeholder="民宿价格" v-model="bnb.price" ></el-input>
                        </el-form-item>

                    </li>
                    <!--<li class="clearfix pb15" id="luRoomNum" >-->
                </ul>

            </div>

        </div>
            </el-form>
            <div class="w_960 pb15 clearfix">
                <!--<a class="keep_btn" href="#ongo" id="saveSub">保存并继续</a>-->
                <el-button @click="addbnb('bnb')">保存并继续</el-button>
            </div>

            <div class="o_mask" id='mask'  style="display:none;"></div>
            <div class="o_warp" id="dialog"  style="display:none;border:none;"></div>
            <input type="hidden" value="0" id="houseId"/>
            <input type="hidden" value="" id="roomId"/>
            <input type="hidden" value="" id="userRole">
            <input type="hidden" value="1" id="step">
            <input type="hidden" value="Pub_Index" id="action">
            <input type="hidden" value="no" id="commercialLandlord">
            <input type="hidden" value="" id="luId">

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
    <!--</div>-->
</template>

<script>
    import header from "../components/Housing_header.vue"
import { regionData, CodeToText } from 'element-china-area-data'// 省市级连
var j = ''// 精度
var w = ''// 维度
export default {
  name: 'Housing_info',
  data () {
      var validateidcard = (rule, value, callback) => {
          let isMobile =  /^[0-9]+$/.test(value);
          if (isMobile) {
              callback();
          } else {
              callback(new Error('只能输入数字'));
          }
      };
    return {
          rules3:{
              bnbname:[
                  {required:true,message:'房源名称不能为空',trigger:'blur'},


              ],
              price:[
                  {required:true,message:'价格不能为空',trigger:'blur'},
                  {validator: validateidcard, trigger: 'blur'},
                  {min:2,max:4,message:'价格要2-4位',trigger:['change','blur']}
              ],
              liva_id:[
                {required:true,message:'请选择宜居人数',trigger:'blur'},

            ],
              address:[
                  {required:true,message:'详细地址不能为空',trigger:'blur'},

              ],
              rid:[
                  {required:true,message:'请选择房屋类型',trigger:'blur'},

              ]
          },
      options: regionData,
      selectedOptions: [], // 省市级连信息
        bnb:{"guard":0,"hid":1},
      jt: '', // 地图文本框信息
      jt1: '', // 地图文本框信息2
      czradio: 1, // 出租类型单选框
      wcradio: 1, // 厕所单选框
      rommtype: [],
      rommtypevalue: '', // 房屋类型下拉框数据
      livable: [],
      livablevalue: '',// 宜居人数数据
      bnbname:""//民宿名称
    }
  },
    components:{
        Header:header
    },
  created () {
    this.getrommtype()
    this.getlivable()
  },
  methods: {
      //添加房源信息
          addbnb(bnb)
          {
              this.$refs[bnb].validate((valid) => {
                      if (valid) {
          this.bnb.longitude=j;
          this.bnb.latitude=w;0
                          if(this.selectedOptions[0]===undefined){
                              this.$message.error("请选择省市区");
                          }else{
                              this.$axios.post('http://localhost:8081/bnbinfo/add',this.bnb)
                                  .then(response => {
                                      if(response.data!=""){
                                          this.$message.success("添加成功");
                                          this.$router.push({name:"Housing_des"});
                                      }else{
                                          this.$message.error("添加失败");
                                      }
                                  }).catch(error => {

                              })

  }
                      }else {
                          console.log('error submit!!');
                          return false;
                      }
              })
          } ,
      //获取房屋类型
    getrommtype () {
      this.$axios.post('http://localhost:8081/rommtype/queryAll')
        .then(response => {
          this.rommtype = response.data
        }).catch(error => {

        })
    },
      //获取宜居人数
    getlivable () {
      this.$axios.post('http://localhost:8081/livable/queryAll')
        .then(response => {
          this.livable = response.data

        }).catch(error => {

        })
    },
    bc () {
      var ssq = ''
      for (var i = 0; i < this.selectedOptions.length; i++) {
        ssq += CodeToText[this.selectedOptions[i]]
      }
      ssq += this.jt
      alert('详细地址:' + ssq + '房屋类型:' + this.rommtypevalue + '出租类型:' + this.czradio + '卫生间类型:' + this.wcradio + '精度:' + j + w + '宜居人数:' + this.livablevalue)
    },
    cx () {
      this.jt1 = this.bnb.address;
      var map = new BMap.Map('allmap')

      var local = new BMap.LocalSearch(map, {
        renderOptions: { map: map }
      })
      if (this.jt1 == '') {
        this.jt1 = '北京市'
      }
      let c = local.search(this.jt1)
      if (c == null) {
        var pc = new BMap.Map('allmap')
        // 初始化地图,设置中心点坐标，
        var point = new BMap.Point(116.331398, 39.897445) // 创建点坐标，汉得公司的经纬度坐标
        map.centerAndZoom(point, 10)
      }
      map.disableDragging()
      local.setMarkersSetCallback(function (pois) {
        var mar = pois[0].marker
        var p = mar.getPosition()
        mar.enableDragging()
        // alert("marker的位置是" + p.lng + "," + p.lat)
        var map = new BMap.Map('allmap')
        var point = new BMap.Point(p.lng, p.lat) // 创建点坐标，汉得公司的经纬度坐标
        map.centerAndZoom(point, 17)
        var marker = new BMap.Marker(point) // 创建标注
        map.addOverlay(marker)
        marker.addEventListener('click', getAttr)
        marker.enableDragging()
        var c = marker.getPosition()
        console.log(c.lng + '12345' + c.lat)
        j = c.lng
        w = c.lat
        function getAttr () {
          var p = marker.getPosition() // 获取marker的位置
          alert('marker是' + p.lng + ',' + p.lat)
          let a = p.lng
          console.log(a + '你')

          console.log(p.lng + ',' + p.lat)
        }
        map.enableScrollWheelZoom(false)
        var geolocationControl = new BMap.GeolocationControl()
        geolocationControl.addEventListener('locationSuccess', function (e) {
          // 定位成功事件
          map.centerAndZoom(marker.getPosition(), 17)
        })
        map.addControl(geolocationControl)
      })
    },
      //省市级联事件
    handleChange (value) {
        // for (var i = 0; i < this.selectedOptions.length; i++) {
        //     ssq += CodeToText[this.selectedOptions[i]]
        // }
        this.bnb.province=CodeToText[this.selectedOptions[0]];
        this.bnb.city=CodeToText[this.selectedOptions[1]];
        this.bnb.town=CodeToText[this.selectedOptions[2]];
      var map = new BMap.Map('allmap')
      var local = new BMap.LocalSearch(map, {
        renderOptions: { map: map }
      })
      local.search(CodeToText[this.selectedOptions[2]])
      map.disableDragging()
      // local.setMarkersSetCallback(function(pois){
      //     var p = pois[0].marker.getPosition();
      //     // alert("marker的位置是" + p.lng + "," + p.lat)
      // })
    }

  },
  mounted () {
    var map = new BMap.Map('allmap')
    // map.addEventListener("tilesloaded",function(){marker.enableDragging()});
    // 初始化地图,设置中心点坐标，
    var point = new BMap.Point(116.404, 39.915) // 创建点坐标，汉得公司的经纬度坐标
    map.centerAndZoom(point, 4)
    // var marker = new BMap.Marker(point);  // 创建标注
    // map.addOverlay(marker);              // 将标注添加到地图中
    // marker.addEventListener("click",getAttr);

    map.disableDragging()
    // function getAttr(){
    //     var p = marker.getPosition();       //获取marker的位置
    //     alert("marker是" + p.lng + "," + p.lat);
    //     console.log(p.lng+","+p.lat)
    // }
  }

}

</script>

<style scoped>
    #allmap{
        width: 700px;
        height: 400px;
        border:1px solid green;
    }
    .el-radio{
        margin-top: -1px;
    }
    #xxdz{
        width: 100px;
    }
    .el-form-item__error{
        border: 1px solid  red;
        text-align: center;
    }
</style>
