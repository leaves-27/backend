<template>
    <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
            <Menus :menus="menus" />
        </Sider>
        <Layout
            :style="{
                padding: '0 24px 24px',
                width: '1134px',
                overflowX: 'auto'
            }">
            <Breadcrumbs :breadcrumbs="breadcrumbs"/>
            <Content :style="{padding: '0px', minHeight: '280px', background: 'transparent'}">
                <router-view></router-view>
            </Content>
        </Layout>
    </Layout>
</template>
<script>
	import Breadcrumbs from '../components/breadcrumbs';
	import Menus from '../components/menus';

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
				items: [{
					id: '3-1',
					name: '放款订单',
					path: '/finance/loanOrder'
				}, {
					id: '3-2',
					name: '还款订单',
					path: '/finance/repayment'
				}],
			},{
				id: '4',
				name: '运营管理',
				icon: 'ios-keypad',
				items: [{
					id: '4-1',
					name: '渠道统计',
					path: '/operating/channelStatistics'
				}, {
					id: '4-2',
					name: '渠道统计原',
					path: '/operating/channelStatisticsSource'
				}],
			},{
				id: '5',
				name: '催收管理',
				icon: 'ios-keypad',
				items: [{
					id: '5-1',
					name: '催收订单',
					path: '/collection/order'
				}, {
					id: '5-2',
					name: '催收统计',
					path: '/collection/statistics'
				}, {
					id: '5-3',
					name: '催收统计明细',
					path: '/collection/statisticsDetail'
				}],
			},{
				id: '6',
				name: '统计管理',
				icon: 'ios-keypad',
				items: [{
					id: '6-1',
					name: '还款统计',
					path: '/statistics/repayment'
				}],
			},{
				id: '7',
				name: '账户管理',
				icon: 'ios-keypad',
				items: [{
					id: '7-1',
					name: '修改密码',
					path: '/account/modifiyPassword'
				},{
					id: '7-2',
					name: '用户管理',
					path: '/account/userMange'
				}],
			},{
				id: '8',
				name: '设置管理',
				icon: 'ios-keypad',
				items: [{
					id: '8-1',
					name: '全局配置',
					path: '/setting/globalConfig'
				}],
			}];
		}
	}
</script>
