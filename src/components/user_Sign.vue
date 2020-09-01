<template>
    <div>
        <el-form :model="userSign" status-icon :rules="rules2" ref="userSign" label-width="80px" class="demo-ruleForm">
            <el-form-item label="账号" prop="q">
                <el-input v-model="userSign.uname" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="upwd">
                <el-input type="password" v-model="userSign.upwd" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="queryName()">提交</el-button>
                <el-button @click="resetForm('userSign')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "user_Sign",
        data() {
            return {
                userSign: {},
                rules2: {
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
            }
        }
    }
</script>
<style scoped>

</style>
