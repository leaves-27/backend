import ModifiyPassword from "../view/account/modifiyPassword";
import UserMange from "../view/account/userMange";

export default [
	{
		path: '/account',
		redirect: '/account/modifiyPassword',
	},
	{
		path: '/account/modifiyPassword',
		component: ModifiyPassword
	},
	{
		path: '/account/userMange',
		component: UserMange
	}
];
