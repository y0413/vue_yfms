<template>
    <!--<div class="week">-->
        <!--<el-row id="nav-fixed" :class="{nav_fixed : isFixed}">-->
            <!--<el-col :span="3">-->
                <!--<div class="grid-content"><span class="sun">Sun.</span>日曜日</div>-->
            <!--</el-col>-->
        <!--</el-row>-->
    <!--</div>-->


</template>

<script>
    function scrollLis(){
    var toTop = offs.top-$(window).scrollTop();
    if(toTop==0||toTop<0){
        if(!$('#fixed').hasClass('ab'))$('#fixed').addClass('ab');
    }else{
        $('#fixed').removeClass('ab');
    }
    }
    var offs=$('#fixed').offset();
    $(window).scroll(function(){
        scrollLis();
    });
    export default {
        name: 'week',
        data() {
            return {}
        },
        mounted() {
            // 设置bar浮动阈值为 #fixedBar 至页面顶部的距离
            this.offsetTop = document.querySelector('#nav-fixed').offsetTop;
            // 开启滚动监听
            window.addEventListener('scroll', this.handleScroll);
        },
        methods: {
            // 滚动监听  滚动触发的效果写在这里
            handleScroll() {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if (scrollTop >= this.offsetTop) {
                    this.isFixed = true;
                } else {
                    this.isFixed = false;
                }
            }
        },
        destroyed() {
            // 离开页面 关闭监听 不然会报错
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style>

    .fixed{
        border: 1px red solid;
        height:100px;
        width:50px;
    }

    .week {
        margin-bottom: 1.25rem;
    }

    #nav-fixed {
        background: rgba(255, 255, 255, 0.8);
        border: 0;
        border-radius: 10px;
    }

    .nav_fixed {
        position: fixed;
        z-index: 2;
        top: 0;
        width: 77.2%;
    }

    .el-row {
        background: rgba(255, 255, 255, 0);
        border-radius: 10px;
        line-height: 2.2rem;
    }

    &:last-child {
         margin-bottom: 0;

    }

    .el-col {
        margin: 0.625rem 1.5rem;
    }

    .el-col div:hover {
        background: #E0E0E0;
        border-radius: 0.625rem;
        cursor: pointer;
        transition: all 0.5s;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .grid-content span {
        border: 1px solid;
        border-radius: 50px;
        padding: 5px;
        margin-right: 0.5rem;
    }

    .sun {
        color: #f60;
    }

</style>
