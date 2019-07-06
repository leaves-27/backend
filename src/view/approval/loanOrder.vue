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
                    <Col span="5">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--samll">借款订单号：</label>
                            <Input placeholder="Enter name" style="width: auto" v-model="orderId" />
                        </div>
                    </Col>
                    <Col span="6">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--samll">用户：</label>
                            <Input placeholder="Enter name" style="width: auto"  v-model="name" />
                        </div>
                    </Col>
                    <Col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--samll">手机号码：</label>
                            <Input placeholder="Enter name" style="width: auto"  v-model="phone" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span="5">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--samll">借款订单状态：</label>
                            <Select v-model="loanOrderStatus" style="width:auto">
                                <Option
                                    v-for="item in loanOrderStatuses"
                                    :value="item.value"
                                    :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                    </Col>
                    <Col span="6">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--small">创建时间：</label>
                            <div style="display:inline-block;">
                                <Date-picker type="date" placement="bottom-end" placeholder="选择日期" style="width: 80px;"></Date-picker>
                                -
                                <Date-picker type="date" placement="bottom-end" placeholder="选择日期" style="width: 80px;"></Date-picker>
                            </div>
                        </div>
                    </Col>
                    <Col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--samll">是否展期：</label>
                            <Select v-model="defer" style="width:auto">
                                <Option
                                        v-for="item in  defers"
                                        :value="item.value"
                                        :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                    </Col>
                    <Col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <i-button type="primary" style="margin-right:20px">查询</i-button>
                            <i-button type="primary">清空</i-button>
                        </div>
                    </Col>
                </Row>
            </Card>
            <i-table border :content="self" :columns="headers" :data="bodys" :row-class-name="rowClassName"></i-table>
            <Page :total="100" show-elevator style="margin-top:20px;"></Page>
        </div>
    </Card>
</template>
<script>
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
				headers: [],
				bodys: [],
				orderId: '',
				name: '',
				phone: '',
				credit: '',
				loan: '',
				apply: {
					startTime: '',
					endTime: ''
				},
				defers: [{
                    label: '全部',
                    value: '-1'
                }],
                loanOrderStatuses: [{
                    label: '全部',
                    value: '-1'
                }],
                loanOrderStatus: '-1',
				defer: '-1'
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
			this.headers = [
				{
					title: '授信订单号',
					key: 'creditOrderId',
				},
				{
					title: '审核人员',
					key: 'auditor',
				},
				{
					title: '授信状态',
					key: 'creditStatus'
				},
				{
					title: '历史授信状态',
					key: 'historyCreditStatus'
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
					title: '申请时间',
					key: 'applyTime'
				},
				{
					title: '是否命中本地黑名单',
					key: 'isHitNativeBlackList'
				},
				{
					title: '是否通过新颜',
					key: 'isThroughtNewFace'
				},
				{
					title: '自动计算授信额度',
					key: 'autoCountCreditAmount'
				},
				{
					title: '是否人工介入审核',
					key: 'isApprovalByPeople'
				},
				{
					title: '最终授信额度',
					key: 'lastCreditAmount'
				},
				{
					title: '授信通过时间',
					key: 'creditThroughTime',
				},
				{
					title: '授信过期时间',
					key: 'creditOverDate',
				},
				{
					title: '更新时间',
					key: 'updateTime',
				},
				{
					title: '备注',
					key: 'desc',
				}];

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
