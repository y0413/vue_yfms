<template>
    <div class="right-context" id="right-context">
        <baidu-map :style="{width:map.width,height:map.height}" class="map"  :zoom="map.zoom" :center="{lng: map.center.lng, lat: map.center.lat}" @ready="handler" :scroll-wheel-zoom="true">
            <!--比例尺控件-->
            <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
            <!--缩放控件-->
            <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" ></bm-navigation>
            <!--聚合动态添加的点坐标-->
            <bm-marker @click="hq()" :position="map.center" :dragging="true"  :raiseOnDrag="true" >
            </bm-marker>
        </baidu-map>
    </div>
</template>

<script>
    //百度地图
    import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
    import BmScale from 'vue-baidu-map/components/controls/Scale'
    import BmNavigation from 'vue-baidu-map/components/controls/Navigation'
    import BmMarkerClusterer from  'vue-baidu-map/components/extra/MarkerClusterer'
    import BmMarker from 'vue-baidu-map/components/overlays/Marker'
    import BmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow'
    export default {
        name: "T"
        ,components: {
        BaiduMap,
            BmScale,
            BmNavigation,
            BmMarkerClusterer,
            BmMarker,
            BmInfoWindow
    },
        data(){
            return{
                map:{
                    center: {lng: 116.404,lat:39.915},//'南京市',
                    zoom: 12,
                    width:'1000px',
                    height:'710px',

                },
            }
        },methods:{
            handler ({BMap, map}) {
                console.log(BMap, map)
                // this.map.center.lng = 118.802422
                // this.map.center.lat = 32.065631
                // this.map.zoom = 12;
                this.map.width= document.getElementById("container").clientWidth-330+'px';
                this.map.height=document.body.clientHeight -160+'px';
                this.getProPositionMap();
            },hq(){
                alert(this.size)
            }
        }
    }
</script>

<style scoped>

</style>
