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
                    <i-col span="5">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--small">日期：</label>
                            <div style="display:inline-block;">
                                <Date-picker
                                        v-model="date.startDate"
                                        type="date"
                                        placement="bottom-end"
                                        placeholder="选择日期"
                                        style="width: 80px">
                                </Date-picker>
                                -
                                <Date-picker
                                        v-model="date.endDate"
                                        type="date"
                                        placement="bottom-end"
                                        placeholder="选择日期"
                                        style="width: 80px">
                                </Date-picker>
                            </div>
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
			title: '新增入催笔数',
			key: 'newAddCollectCount',
		},
		{
			title: '新增入催金额',
			key: 'newAddCollectAmount'
		},
		{
			title: '累计逾期未还笔数',
			key: 'delayUnrepaymentCount'
		},
		{
			title: '累计逾期危害金额',
			key: 'delayUnrepaymentAmount'
		},
		{
			title: '催收还款笔数',
			key: 'collectionRepaymentCount'
		},
        {
            title: '催收还款金额',
            key: 'collectionRepaymentAmount'
        },
        {
            title: '1-3天回款笔数',
            key: '1To3RepaymentCount'
        },
        {
            title: '1-3天回款金额',
            key: '1To3RepaymentAmount'
        },
        {
            title: '4-7天回款笔数',
            key: '4To7RepaymentCount'
        },
        {
            title: '4-7天回款金额',
            key: '4To7RepaymentAmount'
        },
        {
            title: '8-15天回款笔数',
            key: '8To15RepaymentCount'
        },
        {
            title: '8-15天回款金额',
            key: '8To15RepaymentAmount'
        },
        {
            title: '16-30天回款笔数',
            key: '16To30RepaymentCount'
        },
        {
            title: '16-30天回款金额',
            key: '16To30RepaymentAmount'
        },
        {
            title: '31-60天回款笔数',
            key: '31To60RepaymentCount'
        },
        {
            title: '31-60天回款金额',
            key: '31To60RepaymentAmount'
        },
        {
            title: '60天以上回款笔数',
            key: '60ToAboveRepaymentCount'
        },
        {
            title: '60天以上回款金额',
            key: '60ToAboveRepaymentAmount'
			}];
	export default {
		data (){
			return {
				self: this,
                date: {
                    startDate: '',
                    endDate: ''
                },
				headers,
				bodys: [],
			};
		},
		methods: {
			rowClassName (row, index) {
				if (index % 2 == 1) {
					return 'grey-background';
				}
				return '';
			},
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
