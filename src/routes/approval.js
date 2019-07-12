import CreditOrder from "../view/approval/creditOrder";
import LoanOrder from "../view/approval/loanOrder";

export default [
    {
        path: '/approval',
        redirect: '/approval/creditOrder',
    },
    {
        path: '/approval/creditOrder',
        component: CreditOrder
    },{
        path: '/approval/loanOrder',
        component: LoanOrder
    }
];
