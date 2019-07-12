import Main from '../view/main';
import user from './user';
import approval from './approval';
import finance from './finance';
import statistics from './statistics';
import operating from './operating';
import collection from './collection';
import setting from './setting';
import account from './account';

import Login from "../view/login";

export default [
    {
        path: '/',
        component: Main,
        children: [
            ...user,
            ...approval,
            ...finance,
            ...statistics,
            ...operating,
            ...collection,
            ...setting,
            ...account,
        ],
        redirect: '/user/register',
    },
    {
        path: '/login',
        component: Login,
    },
]
