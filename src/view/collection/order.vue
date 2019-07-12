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
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-botttom:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--samll">催款订单号：</label>
                            <Input placeholder="Enter name" style="width: auto" v-model="orderId" />
                        </div>
                    </i-col>
                    <i-col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-botttom:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--samll">姓名：</label>
                            <Input placeholder="Enter name" style="width: auto" v-model="name" />
                        </div>
                    </i-col>
                    <i-col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-botttom:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--samll">手机号码：</label>
                            <Input placeholder="Enter name" style="width: auto" v-model="phone" />
                        </div>
                    </i-col>
                    <i-col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-botttom:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--samll">身份证号：</label>
                            <Input placeholder="Enter name" style="width: auto" v-model="idCard" />
                        </div>
                    </i-col>
                    <i-col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--samll">催收员：</label>
                            <Input placeholder="Enter name" style="width: auto" v-model="collector" />
                        </div>
                    </i-col>
                </Row>
                <Row>
                    <i-col span="5">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--samll">逾期天数：</label>
                            <Input
                                    placeholder="Enter name"
                                    style="width: 80px;margin-right: 20px;"
                                    v-model="delayDays.start" />
                            -
                            <Input
                                    placeholder="Enter name"
                                    style="width: 80px;margin-left: 20px;"
                                    v-model="delayDays.end" />
                        </div>
                    </i-col>
                    <i-col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--middle">还款状态：</label>
                            <Select v-model="repaymentState" style="width:auto">
                                <Option
                                        v-for="item in repaymentStatus"
                                        :value="item.value"
                                        :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                    </i-col>
                    <i-col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--middle">复借：</label>
                            <Select v-model="reborrow" style="width:auto">
                                <Option
                                        v-for="item in reborrows"
                                        :value="item.value"
                                        :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                    </i-col>
                    <i-col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--middle">催收状态：</label>
                            <Select v-model="collectState" style="width:auto">
                                <Option
                                        v-for="item in collectStatus"
                                        :value="item.value"
                                        :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                    </i-col>
                    <i-col span="6">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--small">约定日期：</label>
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
                </Row>
                <Row>
                    <i-col span="4">
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
			title: '是否复借',
			key: 'isReborrow',
		},
		{
			title: '催收员',
			key: 'collector',
		},
		{
			title: '允许展期操作员',
			key: 'deferCollector'
		},
		{
			title: '催收状态',
			key: 'collectionStatus'
		},
		{
			title: '约定还款时间',
			key: 'repaymentTime'
		},
		{
			title: '最近催收',
			key: 'lastCollect'
		},
		{
			title: '账单号',
			key: 'billId'
		},
		{
			title: '备注',
			key: 'desc'
		},
		{
			title: '账单状态',
			key: 'billStatus'
		},
		{
			title: '用户ID',
			key: 'userId'
		},
		{
			title: '姓名',
			key: 'name'
		},
		{
			title: '手机号码',
			key: 'phone'
		},
		{
			title: '身份证号',
			key: 'idCard'
		},
		{
			title: '借款金额',
			key: 'loanAmount'
		},
		{
			title: '借款期限',
			key: 'loanPeroid'
		},
		{
			title: '逾期天数',
			key: 'delayDays'
		},
		{
			title: '应还(含逾期)',
			key: 'shouldRepayment'
		},
		{
			title: '逾期利息',
			key: 'delayInterset'
		},
		{
			title: '逾期管理费',
			key: 'delayFee'
		},
        {
            title: '还款日',
            key: 'repaymentDate'
        },
        {
            title: '更新时间',
            key: 'updateTime'
        }];
	export default {
		data (){
			return {
				self: this,
				date: {
					startDate: '',
					endDate: ''
				},
                orderId: '',
                name: '',
                phone: '',
                idCard: '',
                collector: '',
                delayDays: {
					start: '',
                    end: ''
                },
				headers,
				bodys: [],
                repaymentStatus: [{
					value: '',
                    label: ''
                }],
				reborrows: [{
                    value: '',
                    label: ''
                }],
                collectStatus: [{
                    value: '',
                    label: ''
                }],
                repaymentState: '',
                reborrow: '',
                collectState: ''
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
