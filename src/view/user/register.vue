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
                            <label  class="label-width--samll">用户ID：</label>
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
                    <i-col span="6">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--samll">身份证号：</label>
                            <Input placeholder="Enter name" style="width: auto"  v-model="phone" />
                        </div>
                    </i-col>
                    <i-col span="6">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--middle">是否发起过授信：</label>
                            <Input placeholder="Enter name" style="width: auto"  v-model="phone" />
                        </div>
                    </i-col>
                </Row>
                <Row>
                    <i-col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--samll">成功授信：</label>
                            <Input placeholder="Enter name" style="width: auto"  v-model="idCard" />
                        </div>
                    </i-col>
                    <i-col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                             <label  class="label-width--middle">是否实名：</label>
                            <Select v-model="trust" style="width:auto">
                                <Option
                                    v-for="item in trusts"
                                    :value="item.value"
                                    :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                    </i-col>
                    <i-col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;display:flex;">
                             <label  class="label-width--middle">来源：</label>
                            <Select v-model="trust" style="width:auto">
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
                            <label  class="label-width--small">注册时间：</label>
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
        title: '用户Id',
        key: 'id',
    },
    {
        title: '手机号码',
        key: 'phone',
    },
    {
        title: '姓名',
        key: 'name'
    },
    {
        title: '身份证号',
        key: 'idCard'
    },
    {
        title: '性别',
        key: 'sex'
    },
    {
        title: '注册时间',
        key: 'registerTime'
    },
    {
        title: '最后一次访问时间',
        key: 'lastTime'
    },
    {
        title: '授信状态',
        key: 'creditStatus'
    },
    {
        title: '授信总额',
        key: 'creditAmount'
    },
    {
        title: '手机运营商验证',
        key: 'phoneOperatorVeritical'
    },
    {
        title: '最后授信时间',
        key: 'lastCreditTime'
    },
    {
        title: '来源',
        key: 'source'
    },
    {
        title: '身份证正面照片',
        key: 'icardPositivePhone'
    },
    {
        title: '身份证背面照片',
        key: 'icardReversePhone'
    },
    {
        title: '操作',
        key: 'action',
        width: 200,
        render: (h, params) => {
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
                id: '',
                name: '',
                phone: '',
                idCard: '',
                trust: '0',
                originData: {
                    items: []
                }
            };
        },
        computed: {
            bodys(){
                // return [{
                //     id: '11',
                //     phone: '1539428703',
                //     name: '陶少龙',
                //     idCard: '',
                //     sex: '男',
                //     registerTime: '',
                //     lastTime: '',
                //     creditStatus: '',
                //     creditAmount: '',
                //     phoneOperatorVeritical: '',
                //     lastCreditTime: '',
                //     source: '',
                //     icardPositivePhone: '',
                //     icardReversePhone: '12312',
                // }, {
                //     id: '11',
                //     phone: '1539428703',
                //     name: '陶少龙',
                //     idCard: '',
                //     sex: '男',
                //     registerTime: '',
                //     lastTime: '',
                //     creditStatus: '',
                //     creditAmount: '',
                //     phoneOperatorVeritical: '',
                //     lastCreditTime: '',
                //     source: '',
                //     icardPositivePhone: '',
                //     icardReversePhone: '12312',
                // }];
                return this.originData.items.map((item)=>{
                    return {
                         'id': item.id,
                         'phone': item.mobile,
                         'name': item.name,
                         'idCard': item.idNumber,
                         'sex': item.sexDes,
                         'registerTime': item.registTime,
                         'lastTime': item.lastTime,
                         'creditStatus': item.creditStatus,
                         'creditAmount': item.creditAmount,
                         'phoneOperatorVeritical': item.id,
                         'lastCreditTime': item.lastCreditTime,
                         'source': item.source,
                         'icardPositivePhone': item.idCardPhotoPath,
                         'icardReversePhone': item.idCardBackPath,
                    }
                });
            },
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
            axios({
                url: 'http://admin.51laiyun.com/debtorUser/list',
                method: 'post',
                data: {
                    limit: 25,
                    start: 0,
                    sort: '',
                    dir: 'ASC',
                    searchForm: {
                        id: "",
                        name: "",
                        mobile: "",
                        idNumber: "",
                        hasCredit: -1,
                        hasCreditSuccess: -1,
                        idVerified: -1,
                        source:"",
                        startDate:"",
                        endDate: ""
                    }
                }
            })
            .then(function (response) {
              const { data } = response;
              const { debtorUsers } = data;
              this.originData.items = debtorUsers;
            })
            .catch(function (error) {
                // console.log(error);
            });
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
