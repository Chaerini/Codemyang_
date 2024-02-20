"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
;
;
;
;
;
class KakaoOrder extends Base_1.default {
    setAttributes(response) {
        const { page, payment_request_date, cid, orders, } = response;
        this.page = page;
        this.payment_request_date = payment_request_date;
        this.cid = cid;
        this.orders = orders;
    }
}
exports.default = KakaoOrder;
//# sourceMappingURL=KakaoOrder.js.map