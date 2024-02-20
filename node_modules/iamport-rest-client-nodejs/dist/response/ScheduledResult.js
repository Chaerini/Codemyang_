"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
class ScheduledResult extends Base_1.default {
    setAttributes(response) {
        const { customer_uid, merchant_uid, imp_uid, schedule_at, executed_at, revoked_at, amount, name, buyer_name, buyer_email, buyer_tel, buyer_addr, buyer_postcode, custom_data, schedule_status, payment_status, fail_reason, } = response;
        this.customer_uid = customer_uid;
        this.merchant_uid = merchant_uid;
        this.imp_uid = imp_uid;
        this.schedule_at = this.timeToDate(schedule_at);
        this.executed_at = this.timeToDate(executed_at);
        this.revoked_at = this.timeToDate(revoked_at);
        this.amount = amount;
        this.name = name;
        this.buyer_name = buyer_name;
        this.buyer_email = buyer_email;
        this.buyer_tel = buyer_tel;
        this.buyer_addr = buyer_addr;
        this.buyer_postcode = buyer_postcode;
        this.custom_data = custom_data;
        this.schedule_status = schedule_status;
        this.payment_status = payment_status;
        this.fail_reason = fail_reason;
    }
}
exports.default = ScheduledResult;
//# sourceMappingURL=ScheduledResult.js.map