import globalConfig from "../view/setting/globalConfig";

export default [
	{
		path: '/setting',
		redirect: '/setting/globalConfig',
	},
	{
		path: '/setting/globalConfig',
		component: globalConfig
	}
];
