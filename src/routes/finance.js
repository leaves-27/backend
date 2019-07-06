import loanOrder from "../view/finance/loanOrder";
import repayment from "../view/finance/repayment";

export default [
    {
        path: '/finance',
        redirect: '/finance/loanOrder',
    },
    {
        path: '/finance/loanOrder',
        component: loanOrder
    },{
        path: '/finance/repayment',
        component: repayment
    }
];
