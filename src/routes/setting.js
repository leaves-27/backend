import GlobalConfig from "../view/setting/globalConfig";

export default [
	{
		path: '/setting',
		redirect: '/setting/globalConfig',
	},
	{
		path: '/setting/globalConfig',
		component: GlobalConfig
	}
];
