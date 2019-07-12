import modifiyPassword from "../view/account/modifiyPassword";
import userMange from "../view/account/userMange";

export default [
	{
		path: '/account',
		redirect: '/account/modifiyPassword',
	},
	{
		path: '/account/modifiyPassword',
		component: modifiyPassword
	},
	{
		path: '/account/userMange',
		component: userMange
	}
];
