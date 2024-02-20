"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
const response_1 = require("../response");
/* 네이버페이 > 결제형 */
class NaverPay extends Base_1.default {
    /* 포인트 적립 */
    static postPoint({ imp_uid }) {
        const naverpay = new NaverPay();
        naverpay.url = `/payments/${imp_uid}/naver/point`;
        naverpay.method = 'POST';
        return naverpay;
    }
    /* 에스크로 주문 확정 */
    static postEscrow({ imp_uid }) {
        const naverpay = new NaverPay();
        naverpay.url = `/payments/${imp_uid}/naver/confirm`;
        naverpay.method = 'POST';
        return naverpay;
    }
    /* 현금영수증 발급 가능 금액 조회 */
    static getCashAmount({ imp_uid }) {
        const naverpay = new NaverPay();
        naverpay.url = `/payments/${imp_uid}/naver/cash-amount`;
        naverpay.responseClass = new response_1.NaverCashAmountResponse();
        return naverpay;
    }
}
exports.default = NaverPay;
//# sourceMappingURL=NaverPay.js.map