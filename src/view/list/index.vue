<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header :style="{textAlign: 'left', color: '#fff' }">
                <h2>某某APP-后台管理系统</h2>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu
                        active-name="1-2"
                        theme="light"
                        width="auto"
                        :open-names="['1']"
                        @on-select="select">
                        <Submenu
                            v-for="item in menus"
                            :name="item.id">
                            <template slot="title">
                                <Icon :type="item.icon"></Icon>
                                {{ item.name }}
                            </template>
                            <MenuItem
                                v-for="subItem in item.items"
                                :name="subItem.id">{{ subItem.name }}</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumbs :breadcrumbs="breadcrumbs"/>
                    <Content :style="{padding: '0px', minHeight: '280px', background: 'transparent'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    import Breadcrumbs from '../../components/breadcrumbs';

    export default {
        data(){
            return {
                menus: [{
                    id: '1',
                    name: '用户管理',
                    icon: 'ios-navigate',
                    items: [{
                        id: '1-1',
                        name: '注册用户',
                        path: '/register'
                    }, {
                       id: '1-2',
                       name: '借款用户',
                       path: '/loan'
                   }],
                }, {
                   id: '2',
                   name: 'Item 2',
                   icon: 'ios-keypad',
                   items: [{
                       id: '2-1',
                       name: 'options1',
                   }, {
                        id: '2-1',
                        name: 'options2',
                    }],
               }],
                breadcrumbs: []
            }
        },
        components: {
            Breadcrumbs,
        },
        methods: {
            select(id){
                const menuId = id.split('-')[0];
                const { items = [] } = this.menus.find((item)=>{
                    return item.id == menuId;
                }) || {};

                const { path } = items.find((item)=>{
                    return item.id == id;
                }) || {};

                this.$router.push({
                    path,
                });
            },
        },
        mounted(){

        }
    }
</script>