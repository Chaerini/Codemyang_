"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const Base_1 = __importDefault(require("./Base"));
const response_1 = require("../response");
;
/* 아임포트 별개 현금 결제 */
class External extends Base_1.default {
    constructor() {
        super();
        this.responseClass = new response_1.ExternalResponse();
    }
    /* 영수증 발급 */
    static postReceipt(data) {
        const { merchant_uid } = data;
        const external = new External();
        external.url = `/receipts/external/${merchant_uid}`;
        external.method = 'POST';
        external.data = lodash_1.default.omit(data, 'merchant_uid');
        return external;
    }
    /* 영수증 조회 */
    static getReceipt({ merchant_uid }) {
        const external = new External();
        external.url = `/receipts/external/${merchant_uid}`;
        return external;
    }
    /* 영수증 삭제 */
    static deleteReceipt({ merchant_uid }) {
        const external = new External();
        external.url = `/receipts/external/${merchant_uid}`;
        external.method = 'DELETE';
        return external;
    }
}
exports.default = External;
//# sourceMappingURL=External.js.map