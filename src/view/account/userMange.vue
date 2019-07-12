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
        title: '用户名',
        key: 'userName',
    },
    {
        title: '姓名',
        key: 'realName',
    },
    {
        title: '最后登录时间',
        key: 'lastLoginInTime',
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
			this.bodys =  [{
                userName: '11',
                realName: '1539428703',
                lastLoginInTime: '陶少龙',
            }, {
                userName: '11',
                realName: '1539428703',
                lastLoginInTime: '陶少龙',
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
