"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
const response_1 = require("../response");
;
/* 카카오페이 */
class Kakao extends Base_1.default {
    constructor() {
        super();
        this.responseClass = new response_1.KakaoOrderResponse();
    }
    /* 포인트 적립 */
    static getOrders(params) {
        const kakao = new Kakao();
        kakao.url = '/kakao/payment/orders';
        kakao.params = params;
        return kakao;
    }
}
exports.default = Kakao;
//# sourceMappingURL=Kakao.js.map