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
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--small">日期：</label>
                            <div style="display:inline-block;">
                                <Date-picker
                                        type="date"
                                        placement="bottom-end"
                                        placeholder="选择日期"
                                        style="width: 80px;">
                                </Date-picker>
                                -
                                <Date-picker
                                        type="date"
                                        placement="bottom-end"
                                        placeholder="选择日期"
                                        style="width: 80px;">
                                </Date-picker>
                            </div>
                        </div>
                    </i-col>
                    <i-col span="6">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
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
        title: '应还款总额',
        key: 'shouldRepaymentAmount',
    },
    {
        title: '正常还款笔数',
        key: 'normalRepaymentCount'
    },
    {
        title: '正常还款额',
        key: 'normalRepaymentAmount'
    },
    {
        title: '首借自然还款率',
        key: 'firstBorrowNormalRepaymentRate'
    },
    {
        title: '首借还款率',
        key: 'firstBorrowRepaymentRate'
    },
    {
        title: '复借还款率',
        key: 'reborrowRepaymentRate'
    },
    {
        title: '正常还款率',
        key: 'normalRepaymentRate'
    },
    {
        title: '逾期已还数',
        key: 'delayRepaymentedCounts'
    },
    {
        title: '逾期还款额',
        key: 'delayRepaymentAmount'
    },
    {
        title: '坏账',
        key: 'badDebt'
    },
    {
        title: '逾期未还总额',
        key: 'delayNoRepaymentAmount'
    },
    {
        title: '催回率',
        key: 'recoveryRate'
    },
    {
        title: '坏账率',
        key: 'badDebtRate'
    },
    {
        title: '当前逾期率',
        key: 'delayRate',
    }];

	export default {
		data (){
			return {
				self: this,
				trusts: [{
					label: '全部',
					value: '0'
				}, {
					label: '是',
					value: '1'
				}, {
					label: '否',
					value: '2'
				}],
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
