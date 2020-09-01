<template>
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
                                    <input type="text" class="r_input_small" id="input-username" autocomplete="off" placeholder="手机号、邮箱" >
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
                </div>
                <div class="r_main_r">
                    <h5>合作网站账户登录</h5>
                    <ul class="r_wedsitev1">
                        <li>
                            <a class="hz_qqv1" href="https://www.xiaozhu.com/xzweb.php?op=GetOpenSnsAuthUrl&snsType=qqzone&state=login&next=https%3A%2F%2Fwww.xiaozhu.com%2F"><i></i>QQ登录</a>
                        </li>

                    </ul>                <p>还没有注册？<a href="#" class="col_pink show-register-box" >注册账号&gt;&gt;</a></p>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "trdt1"
    }
</script>

<style scoped>

</style>
