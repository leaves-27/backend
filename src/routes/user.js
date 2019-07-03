import Register from "../view/user/register";
import Loan from '../view/user/loan';
import BlackList from '../view/user/blackList';
import WhiteList from '../view/user/whiteList';

export default [
    {
        path: '/user',
        redirect: '/user/register',
    },
    {
        path: '/user/register',
        component: Register
    },{
        path: '/user/loan',
        component: Loan
    },{
        path: '/user/blackList',
        component: BlackList
    },{
        path: '/user/whiteList',
        component: WhiteList
    }
];