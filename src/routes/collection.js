import Order from "../view/collection/order";
import Statistics from "../view/collection/statistics";
import StatisticsDetail from "../view/collection/statisticsDetail";

export default [
	{
		path: '/collection',
		redirect: '/collection/order',
	},
	{
		path: '/collection/order',
		component: Order
	},
	{
		path: '/collection/statistics',
		component: Statistics
	},
	{
		path: '/collection/statisticsDetail',
		component: StatisticsDetail
	}
];
