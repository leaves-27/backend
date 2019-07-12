<template>
    <Card :bordered="false" style="min-width:1300px;">
        <div slot="title" style="text-align:left;">
            <span style="margin-left:20px;">
                <Icon type="ios-refresh" size="20"></Icon>
                刷新
            </span>
        </div>
        <div>
            <i-table border :content="self" :columns="headers" :data="bodys" :row-class-name="rowClassName"></i-table>
            <Page :total="100" show-elevator style="margin-top:20px;"></Page>
        </div>
    </Card>
</template>
<script>
    const headers = [{
        title: '配置编号',
        key: 'settingId',
    },
    {
        title: '配置名',
        key: 'settingName',
    },
    {
        title: '配置值',
        key: 'settingValue',
    },
    {
        title: '说明',
        key: 'introduce'
    },
    {
        title: '状态',
        key: 'status'
    },
    {
        title: '创建时间',
        key: 'createTime'
    },
    {
        title: '创建人',
        key: 'creator'
    },
    {
        title: '更新时间',
        key: 'updateTime'
    },
    {
        title: '更新人',
        key: 'updator'
    }];
	export default {
		data (){
			return {
				self: this,
				headers,
				bodys: [],
				id: '',
				name: '',
				phone: '',
				idCard: '',
				trust: '0',
			};
		},
		methods: {
			rowClassName (row, index) {
				if (index % 2 == 1) {
					return 'grey-background';
				}
				return '';
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
