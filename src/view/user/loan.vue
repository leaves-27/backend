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
                            <label  class="label-width--small">注册时间：</label>
                            <div style="display:inline-block;">
                                <Date-picker type="date" placement="bottom-end" placeholder="选择日期" style="width: 80px;"></Date-picker>
                                 -
                                <Date-picker type="date" placement="bottom-end" placeholder="选择日期" style="width: 80px;"></Date-picker>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span="4">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-right:20px;margin-bottom:20px;padding-left:10px;padding-right:10px;">
                            <label class="label-width--samll">来源：</label>
                            <Input placeholder="Enter name" style="width: auto"  v-model="source" />
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
            headers: [],
            bodys: [],
            id: '',
            name: '',
            phone: '',
            idCard: '',
            trust: '0',
            source: '',
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
            title: '芝麻信用分',
            key: 'zhimaMark'
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
            title: '是否成功授信',
            key: 'isCreditSuccess'
        },
        {
          title: '授信总额度',
          key: 'creditAmount'
        },
        {
          title: '剩余授信额度',
          key: 'creditAmount'
        },
        {
            title: '最后授信时间',
            key: 'lastCreditTime'
        },
        {
            title: '最后一次访问时间',
            key: 'lastViewTime'
        },
        {
            title: '来源',
            key: 'source'
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
