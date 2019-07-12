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
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--samll">放款订单号：</label>
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
                                        :key="item.value">{{ item.label }}
                                </Option>
                            </Select>
                        </div>
                    </i-col>
                    <i-col span="3">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--samll">来源：</label>
                            <Input placeholder="Enter name" style="width: auto"  v-model="idCard" />
                        </div>
                    </i-col>
                </Row>
                <Row>
                    <i-col span="5">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--middle">放款通道：</label>
                            <Select v-model="trust">
                                <Option
                                        v-for="item in trusts"
                                        :value="item.value"
                                        :key="item.value">{{ item.label }}
                                </Option>
                            </Select>
                        </div>
                    </i-col>
                    <i-col span="6">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--small">申请时间：</label>
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
                            <label  class="label-width--small">放款时间：</label>
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

                    <i-col span="3">
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
        title: '放款订单编号',
        key: 'loanOrderId',
    },
    {
        title: '放款状态',
        key: 'loanStatus',
    },
    {
        title: '借款订单号',
        key: 'loanOrderId'
    },
    {
        title: '用户ID',
        key: 'id'
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
        title: '放款银行卡号',
        key: 'loanBankCardNo'
    },
    {
        title: '放款银行',
        key: 'loanBank'
    },
    {
        title: '放款本金',
        key: 'loanCapital'
    },
    {
        title: '放款金额',
        key: 'loanAmount'
    },
    {
        title: '申请时间',
        key: 'applyTime'
    },
    {
        title: '放款时间',
        key: 'loanTime'
    },
    {
        title: '修改时间',
        key: 'modifyTime'
    },
    {
        title: '放款通道',
        key: 'loanChannel'
    },
    {
        title: '来源',
        key: 'source'
    },
    {
        title: '备注',
        key: 'desc',
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
		},
		mounted() {
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
