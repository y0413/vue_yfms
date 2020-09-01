<template>
    <el-form :model="userSign" status-icon :rules="rules2" ref="userSign" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="uname">
        <el-input v-model="userSign.uname" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="upwd">
            <el-input type="password" v-model="userSign.upwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkupwd">
            <el-input type="password" v-model="userSign.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="adduser()">提交</el-button>
            <el-button @click="resetForm('userSign')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "user_zhuce",
        data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.userSign.checkPass !== '') {
                    this.$refs.ruleForm2.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.userSign.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            userSign: {},
            rules2: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },adduser:function () {
            this.$axios.post("http://localhost:8081/UsersController/adduser?uname="+
                this.userSign.uname+"&upwd="+this.userSign.upwd).then(res=>{
                if(res.data>0){
                    alert("注册成功");
                }else {
                    alert("注册失败");
                }
            }).catch(err=>{
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
    }
</script>

<style scoped>

</style>
