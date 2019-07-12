import LoanOrder from "../view/finance/loanOrder";
import Repayment from "../view/finance/repayment";

export default [
    {
        path: '/finance',
        redirect: '/finance/loanOrder',
    },
    {
        path: '/finance/loanOrder',
        component: LoanOrder
    },{
        path: '/finance/repayment',
        component: Repayment
    }
];
