import creditOrder from "../view/approval/creditOrder";
import loanOrder from "../view/approval/loanOrder";

export default [
    {
        path: '/approval',
        redirect: '/approval/creditOrder',
    },
    {
        path: '/approval/creditOrder',
        component: creditOrder
    },{
        path: '/approval/loanOrder',
        component: loanOrder
    }
];
