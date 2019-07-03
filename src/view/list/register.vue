<template>
    <Card :bordered="false" style="min-width:1300px;">
        <div slot="title" style="text-align:left;p">
            <span>
                <Icon type="ios-film-outline"></Icon>
                添加黑名单
            </span>
            <span style="margin-left:20px;">
                <Icon type="ios-film-outline"></Icon>
                刷新
            </span>
        </div>
        <div>
            <Card style="margin-bottom:20px;text-align:left;">
                <Row>
                    <Col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--samll">用户ID：</label>
                            <Input placeholder="Enter name" style="width: auto" v-model="id" />
                        </div>
                    </Col>
                    <Col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--samll">姓名：</label>
                            <Input placeholder="Enter name" style="width: auto"  v-model="name" />
                        </div>
                    </Col>
                    <Col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--samll">手机号码：</label>
                            <Input placeholder="Enter name" style="width: auto"  v-model="phone" />
                        </div>
                    </Col>
                    <Col span="6">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--samll">身份证号：</label>
                            <Input placeholder="Enter name" style="width: auto"  v-model="phone" />
                        </div>
                    </Col>
                    <Col span="6">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--middle">是否发起过授信：</label>
                            <Input placeholder="Enter name" style="width: auto"  v-model="phone" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--samll">成功授信：</label>
                            <Input placeholder="Enter name" style="width: auto"  v-model="idCard" />
                        </div>
                    </Col>
                    <Col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                             <label  class="label-width--middle">是否实名：</label>
                            <Select v-model="trust" style="width:auto">
                                <Option v-for="item in trusts" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                    </Col>
                    <Col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;display:flex;">
                             <label  class="label-width--middle">来源：</label>
                            <Select v-model="trust" style="width:auto">
                                <Option v-for="item in trusts" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                    </Col>
                    <Col span="6">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label  class="label-width--small">注册时间：</label>
                            <div style="display:inline-block;">
                                <Date-picker type="date" placement="bottom-end" placeholder="选择日期" style="width: 80px;"></Date-picker>
                                 -
                                <Date-picker type="date" placement="bottom-end" placeholder="选择日期" style="width: 80px;"></Date-picker>
                            </div>
                        </div>
                    </Col>
                    <Col span="6">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <i-button type="primary" style="margin-right:20px">查询</i-button>
                            <i-button type="primary">清空</i-button>
                        </div>
                    </Col>
                </Row>
             </Card>
            <Table :columns="headers" :data="bodys"></Table>
            <Page :total="100" show-elevator style="margin-top:20px;"></Page>
        </div>
    </Card>
</template>
<script>
export default {
  data (){
        return {
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
            id: '',
            name: '',
            phone: '',
            idCard: '',
            trust: '0',
        };
    },
    mounted(){
        this.headers = [
          {
              title: '用户Id',
              key: 'id'
          },
          {
              title: '手机号码',
              key: 'phone'
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
            title: '芝麻信用',
            key: 'credit'
        },
        {
            title: '淘宝认证',
            key: 'taobaoVertical'
        },
        {
            title: '京东验证',
            key: 'jdVertical'
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
        }];

         this.bodys =  [
            {
              name: '陶少龙',
              id: '11',
              phone: '1539428703',
              sex: '男'
            },
            {
              name: '陶少龙',
              id: '12',
              phone: '1539428703',
              sex: '男'
            },
            {
              name: '陶少龙',
              id: '13',
              phone: '1539428703',
              sex: '男'
            },
            {
                name: '陶少龙',
                id: '14',
                phone: '1539428703',
                sex: '男'
              },
         ];
    }
}
</script>
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