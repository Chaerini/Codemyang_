"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
class Receipt extends Base_1.default {
    setAttributes(response) {
        const { imp_uid, receipt_tid, apply_num, type, amount, vat, receipt_url, applied_at, cancelled_at, } = response;
        this.imp_uid = imp_uid;
        this.receipt_tid = receipt_tid;
        this.apply_num = apply_num;
        this.type = type;
        this.amount = amount;
        this.vat = vat;
        this.receipt_url = receipt_url;
        this.applied_at = this.timeToDate(applied_at);
        this.cancelled_at = this.timeToDate(cancelled_at);
    }
}
exports.default = Receipt;
//# sourceMappingURL=Receipt.js.map