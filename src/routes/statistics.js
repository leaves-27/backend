import Repayment from "../view/statistics/repayment";

export default [
	{
		path: '/statistics',
		redirect: '/statistics/repayment',
	},
	{
		path: '/statistics/repayment',
		component: Repayment
	}
];
