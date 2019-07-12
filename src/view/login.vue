<template>
    <i-form
        style="width: 30%;background-color: #fff;padding:32px;margin-left:auto;margin-right:auto;margin:50px auto; 100px;">
        <Form-item label="用户名">
            <i-input :value.sync="formItem.oldPassword" placeholder="请输入"></i-input>
        </Form-item>
        <Form-item label="密码">
            <i-input :value.sync="formItem.newPassword" placeholder="请输入"></i-input>
        </Form-item>
        <Form-item style="text-align: center;">
            <i-button type="primary" @click="confirmModify">登录</i-button>
        </Form-item>
    </i-form>
</template>
<script>
	export default {
		data (){
			return {
				formItem: {
					oldPassword: '',
					newPassword: '',
					comfirmPassword: ''
				}
			};
		},
		methods: {
			confirmModify(){

			}
		},
		mounted(){}
	}
</script>
