<template>
    <i-form
        style="width: 40%;background-color: #fff;padding:32px;margin-left:auto;margin-right:auto;">
        <Form-item label="原密码">
            <i-input :value.sync="formItem.oldPassword" placeholder="请输入"></i-input>
        </Form-item>
        <Form-item label="新密码">
            <i-input :value.sync="formItem.newPassword" placeholder="请输入"></i-input>
        </Form-item>
        <Form-item label="确认密码">
            <i-input :value.sync="formItem.comfirmPassword" placeholder="请输入"></i-input>
        </Form-item>
        <Form-item style="text-align: center;">
            <i-button type="primary" @click="confirmModify">修改</i-button>
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
		mounted(){
			this.bodys =  [
				{
					id: '11',
					phone: '1539428703',
					name: '陶少龙',
					idCard: '',
					sex: '男',
					registerTime: '',
					lastTime: '',
					creditStatus: '',
					creditAmount: '',
					phoneOperatorVeritical: '',
					lastCreditTime: '',
					source: '',
					icardPositivePhone: '',
					icardReversePhone: '12312',
				}, {
					id: '11',
					phone: '1539428703',
					name: '陶少龙',
					idCard: '',
					sex: '男',
					registerTime: '',
					lastTime: '',
					creditStatus: '',
					creditAmount: '',
					phoneOperatorVeritical: '',
					lastCreditTime: '',
					source: '',
					icardPositivePhone: '',
					icardReversePhone: '12312',
				}];
		}
	}
</script>
<style>
    .ivu-card-head{
        background-color:#f1f1f1;
    }
    .grey-background td{
        background-color:#f8f8f9;
    }
</style>
<style scoped>
    .label-width--samll{
        display: inline-block;
        width: 120px;
    }
    .label-width--middle{
        display: inline-block;
        width: 117px;
    }

</style>
