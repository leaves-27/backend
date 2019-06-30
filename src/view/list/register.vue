<template>
    <div>
        <Card style="margin-bottom:20px;text-align:left;">
            <Row>
                <Col span="8">
                    <div style="display:inline-block;margin-right:20px;margin-bottom:20px;">
                        <label  class="label-width--samll">用户ID：</label>
                        <Input placeholder="Enter name" style="width: auto" v-model="id" />
                    </div>
                </Col>
                <Col span="8">
                    <div style="display:inline-block;margin-right:20px;margin-bottom:20px;">
                        <label class="label-width--samll">姓名：</label>
                        <Input placeholder="Enter name" style="width: auto"  v-model="name" />
                    </div>
                </Col>
                <Col span="8">
                    <div style="display:inline-block;margin-right:20px;margin-bottom:20px;">
                        <label class="label-width--samll">手机号码：</label>
                        <Input placeholder="Enter name" style="width: auto"  v-model="phone" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span="8">
                    <div style="display:inline-block;margin-right:20px;margin-bottom:20px;">
                        <label class="label-width--samll">身份证号：</label>
                        <Input placeholder="Enter name" style="width: auto"  v-model="idCard" />
                    </div>
                </Col>
                <Col span="8">
                    <div style="display:inline-block;margin-right:20px;margin-bottom:20px;">
                         <label  class="label-width--middle">是否发起过授信：</label>
                        <Select v-model="trust" style="width:200px">
                            <Option v-for="item in trusts" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </div>
                </Col>
                <Col span="8">
                    <div style="display:inline-block;margin-right:20px;margin-bottom:20px;">
                         <Button type="primary" style="margin-right:20px">查询</Button>
                         <Button type="default">清空</Button>
                    </div>
                </Col>
            </Row>
         </Card>
        <Table :columns="headers" :data="bodys"></Table>
    </div>
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
               type: 'selection',
               width: 60,
               align: 'center'
           },
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
              title: '性别',
              key: 'sex'
          }
        ];
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
        width: 70px;
    }
    .label-width--middle{
        display: inline-block;
        width: 112px;
    }
</style>