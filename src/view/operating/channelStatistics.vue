<template>
    <Card :bordered="false" style="min-width:1300px;">
        <div slot="title" style="text-align:left;">
            <span style="margin-left:20px;">
                <Icon type="ios-refresh" size="20"></Icon>
                刷新
            </span>
        </div>
        <div>
            <Card style="margin-bottom:20px;text-align:left;">
                <Row>
                    <i-col span="6">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--small">注册时间：</label>
                            <div style="display:inline-block;">
                                <Date-picker
                                        v-model="registerTime.startTime"
                                        type="date"
                                        placement="bottom-end"
                                        placeholder="选择日期"
                                        style="width: 80px;">
                                </Date-picker>
                                -
                                <Date-picker
                                        v-model="registerTime.endTime"
                                        type="date"
                                        placement="bottom-end"
                                        placeholder="选择日期"
                                        style="width: 80px;">
                                </Date-picker>
                            </div>
                        </div>
                    </i-col>
                    <i-col span="5">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--small">来源：</label>
                            <Input placeholder="Enter name" style="width: auto" v-model="source" />
                        </div>
                    </i-col>
                    <i-col span="6">
                        <div style="display:flex;justify-content:flex-start;align-items:center;margin-right:20px;padding-left:10px;padding-right:10px;">
                            <i-button type="primary" style="margin-right:20px">查询</i-button>
                            <i-button type="primary">清空</i-button>
                        </div>
                    </i-col>
                </Row>
            </Card>
            <i-table border :content="self" :columns="headers" :data="bodys" :row-class-name="rowClassName"></i-table>
            <Page :total="100" show-elevator style="margin-top:20px;"></Page>
        </div>
    </Card>
</template>
<script>
	import axios from 'axios';
	import qs from 'qs';

	const headers = [
    {
        title: '日期',
        key: 'date',
    },
    {
        title: '注册数',
        key: 'registerCount',
    },
    {
        title: '发起授权数',
        key: 'initiationAuthorizationCount'
    },
    {
        title: '成功授权数',
        key: 'successAuthorizationCount'
    },
    {
        title: '实名数',
        key: 'realNameCount'
    },
    {
        title: '芝麻授信',
        key: 'ziMaCredit'
    },
    {
        title: '授信总额',
        key: 'creditAmount'
    },
    {
        title: '新用户借款总额',
        key: 'newUserLoanAmount'
    },
    {
        title: '新用户借款笔数',
        key: 'newUserLoanCount'
    },
    {
        title: '来源',
        key: 'source'
    }];

	export default {
		data (){
			return {
				self: this,
				headers,
				bodys: [],
				source: '',
                registerTime: {
					startTime: '',
                    endTime: ''
                }
			};
		},
		methods: {
			rowClassName (row, index) {
				if (index % 2 == 1) {
					return 'grey-background';
				}
				return '';
			},
			render(h, params){
				return h('div', [
					h('Button', {
						props: {
							type: 'primary',
							size: 'small'
						},
						style: {
							marginRight: '10px'
						},
						on: {
							click: () => {
								// this.show(params.index)
							}
						}
					}, '添加黑名单'),
					h('Button', {
						props: {
							type: 'error',
							size: 'small'
						},
						on: {
							click: () => {
								// this.remove(params.index)
							}
						}
					}, '资料')
				]);
			}
		},
		mounted(){

			// axios({
			//     url: 'http://admin.51laiyun.com/debtorUser/list',
			//     method: 'post',
			//     data: {
			//         limit: 25,
			//         start: 0,
			//         sort: '',
			//         dir: 'ASC',
			//         searchForm: {
			//             id: "",
			//             name: "",
			//             mobile: "",
			//             idNumber: "",
			//             hasCredit: -1,
			//             hasCreditSuccess: -1,
			//             idVerified: -1,
			//             source:"",
			//             startDate:"",
			//             endDate: ""
			//         }
			//     }
			// })
			// .then(function (response) {
			//     // console.log(response);
			// })
			// .catch(function (error) {
			//     // console.log(error);
			// });

			// const data = qs.stringify({
			//     limit: 25,
			//     start: 0,
			//     sort: '',
			//     dir: 'ASC',
			//     searchForm: {
			//         'id': "",
			//         'name': "",
			//         'mobile': "",
			//         'idNumber': "",
			//         'hasCredit': -1,
			//         'hasCreditSuccess': -1,
			//         'idVerified': -1,
			//         'source':"",
			//         'startDate':"",
			//         'endDate': ""
			//     }
			// });
			// axios({
			//     url: 'http://10.1.135.148:3000/list',
			//     method: 'post',
			//     data,
			//     headers: {
			//         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			//     }
			// })
			// .then(function (response) {
			//     // console.log(response);
			// })
			// .catch(function (error) {
			//     // console.log(error);
			// });
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
