import order from "../view/collection/order";
import statistics from "../view/collection/statistics";
import statisticsDetail from "../view/collection/statisticsDetail";

export default [
	{
		path: '/collection',
		redirect: '/collection/order',
	},
	{
		path: '/collection/order',
		component: order
	},
	{
		path: '/collection/statistics',
		component: statistics
	},
	{
		path: '/collection/statisticsDetail',
		component: statisticsDetail
	}
];
