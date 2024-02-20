"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const Base_1 = __importDefault(require("./Base"));
const response_1 = require("../response");
;
/* 현금영수증 */
class Receipts extends Base_1.default {
    constructor() {
        super();
        this.responseClass = new response_1.ReceiptResponse();
    }
    /* 발급 */
    static postReceipt(data) {
        const { imp_uid } = data;
        const receipts = new Receipts();
        receipts.url = `/receipts/${imp_uid}`;
        receipts.method = 'POST';
        receipts.data = lodash_1.default.omit(data, 'imp_uid');
        return receipts;
    }
    /* 조회 */
    static getReceipt({ imp_uid }) {
        const receipts = new Receipts();
        receipts.url = `/receipts/${imp_uid}`;
        return receipts;
    }
    /* 삭제 */
    static deleteReceipt({ imp_uid }) {
        const receipts = new Receipts();
        receipts.url = `/receipts/${imp_uid}`;
        receipts.method = 'DELETE';
        return receipts;
    }
}
exports.default = Receipts;
//# sourceMappingURL=Receipts.js.map