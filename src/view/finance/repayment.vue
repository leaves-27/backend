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
                    <i-col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--samll">账单号：</label>
                            <Input placeholder="Enter name" style="width: auto" v-model="id" />
                        </div>
                    </i-col>
                    <i-col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--samll">姓名：</label>
                            <Input placeholder="Enter name" style="width: auto"  v-model="name" />
                        </div>
                    </i-col>
                    <i-col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--samll">手机号码：</label>
                            <Input placeholder="Enter name" style="width: auto"  v-model="phone" />
                        </div>
                    </i-col>
                    <i-col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--samll">身份证号：</label>
                            <Input placeholder="Enter name" style="width: auto"  v-model="phone" />
                        </div>
                    </i-col>
                    <i-col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--middle">放款状态：</label>
                            <Select v-model="trust" style="width:auto">
                                <Option
                                    v-for="item in trusts"
                                    :value="item.value"
                                    :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                    </i-col>
                    <i-col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--samll">来源：</label>
                            <Input placeholder="Enter name" style="width: auto"  v-model="idCard" />
                        </div>
                    </i-col>
                </Row>
                <Row>
                    <i-col span="7">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--small">创建订单时间：</label>
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
                    <i-col span="7">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--small">实际还款日期：</label>
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
                            <label  class="label-width--small">逾期天数：</label>
                            <div style="display:inline-block;">
                                <Input placeholder="Enter name" style="width:80px"  v-model="start" />
                                -
                                <Input placeholder="Enter name" style="width: 80px"  v-model="end" />
                            </div>
                        </div>
                    </i-col>
                    <i-col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--middle">付款方式：</label>
                            <Select v-model="trust" style="width:auto">
                                <Option
                                        v-for="item in trusts"
                                        :value="item.value"
                                        :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                    </i-col>
                </Row>
                <Row>

                    <i-col span="7">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--small">应还日期：</label>
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
                    <i-col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--small" style="width:100px">催收员:</label>
                            <div style="display:inline-block;">
                                <Input
                                    placeholder="Enter name"
                                    style="width: auto"  v-model="end" />
                            </div>
                        </div>
                    </i-col>
                    <i-col span="3">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--middle">复借：</label>
                            <Select v-model="trust" style="width:auto">
                                <Option
                                        v-for="item in trusts"
                                        :value="item.value"
                                        :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                    </i-col>
                    <i-col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--middle">是否手动补账：</label>
                            <Select v-model="trust" style="width:auto">
                                <Option
                                        v-for="item in trusts"
                                        :value="item.value"
                                        :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                    </i-col>
                    <i-col span="4">
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
				headers: [
					{
						title: '账单号',
						key: 'billId',
					},
					{
						title: '是否复借',
						key: 'isContinueBorrow',
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
						title: '芝麻信用分',
						key: 'ZiMaTtrustMark'
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
						title: '逾期天数',
						key: 'overdueDays'
					},
					{
						title: '合同金额',
						key: 'contractAmount'
					},
					{
						title: '应还金额',
						key: 'shouldPaymentAmount'
					},
					{
						title: '实还金额',
						key: 'realPaymentAmount'
					},
					{
						title: '放款日',
						key: 'loanDate'
					},
					{
						title: '实际还款日',
						key: 'realPaymentDate'
					},
                    {
                        title: '订单创建时间',
                        key: 'orderCreateTime'
                    },
                    {
                        title: '更新时间',
                        key: 'updateTime'
                    },
                    {
                        title: '催收员',
                        key: 'collector'
                    },
                    {
                        title: '付款方式',
                        key: 'paymentWay'
                    },
                    {
                        title: '来源',
                        key: 'source'
                    },
					{
						title: '备注',
						key: 'desc',
					}],
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
