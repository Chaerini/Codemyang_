"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
const response_1 = require("../response");
;
/* 페이코 */
class Payco extends Base_1.default {
    constructor() {
        super();
        this.responseClass = new response_1.PaycoStatusResponse();
    }
    /* 주문상태 변경 */
    static postOrderStatus(data) {
        const { imp_uid, status } = data;
        const payco = new Payco();
        payco.url = `/payco/orders/status/${imp_uid}`;
        payco.method = 'POST';
        payco.data = { status };
        return payco;
    }
}
exports.default = Payco;
//# sourceMappingURL=Payco.js.map