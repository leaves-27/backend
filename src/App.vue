<template>
  <div id="app">
    <div class="layout">
        <Layout>
            <Header :style="{textAlign: 'left', color: '#fff' }">
                <h2>某某APP-后台管理系统</h2>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menus :menus="menus" />
                </Sider>
                <Layout :style="{ padding: '0 24px 24px', width: '1134px', overflowX: 'auto' }">
                    <Breadcrumbs :breadcrumbs="breadcrumbs"/>
                    <Content :style="{padding: '0px', minHeight: '280px', background: 'transparent'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
  </div>
</template>
<script>
    import Breadcrumbs from './components/breadcrumbs';
    import Menus from './components/menus';

    export default {
        data(){
            return {
                menus: [],
                breadcrumbs: []
            }
        },
        components: {
            Breadcrumbs,
            Menus
        },
        mounted(){
            this.menus = [{
                 id: '1',
                 name: '用户管理',
                 icon: 'ios-navigate',
                 items: [{
                     id: '1-1',
                     name: '注册用户',
                     path: '/user/register'
                 }, {
                    id: '1-2',
                    name: '借款用户',
                    path: '/user/loan'
                }, {
                    id: '1-3',
                    name: '黑灰名单',
                    path: '/user/blackList'
                }, {
                    id: '1-4',
                    name: '白名单',
                    path: '/user/whiteList'
                }],
             },{
                id: '2',
                name: '审批管理',
                icon: 'ios-keypad',
                items: [{
                    id: '2-1',
                    name: '授信订单',
                    path: '/approval/creditOrder'
                }, {
                    id: '2-2',
                    name: '借款订单',
                    path: '/approval/loanOrder'
                }],
            },{
                id: '3',
                name: '财务管理',
                icon: 'ios-keypad',
                items: [],
            },{
                id: '4',
                name: '运营管理',
                icon: 'ios-keypad',
                items: [],
            },{
                id: '5',
                name: '催收管理',
                icon: 'ios-keypad',
                items: [],
            },{
                id: '6',
                name: '统计管理',
                icon: 'ios-keypad',
                items: [],
            },{
                id: '7',
                name: '账户管理',
                icon: 'ios-keypad',
                items: [],
            },{
                id: '8',
                name: '设置管理',
                icon: 'ios-keypad',
                items: [],
            },{
                id: '9',
                name: '系统管理',
                icon: 'ios-keypad',
                items: [],
            }];
        }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
