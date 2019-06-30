import List from "./view/list/index";
import Register from "./view/list/register";
import Loan from './view/list/loan';

export default [
    {
        path: '/',
        component: List,
        redirect: '/register',
        children: [{
            path: 'register',
            component: Register
        },{
            path: 'loan',
            component: Loan
        }]
    },
];