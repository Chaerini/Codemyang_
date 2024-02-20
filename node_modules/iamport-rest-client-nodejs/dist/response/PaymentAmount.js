"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const Base_1 = __importDefault(require("./Base"));
;
;
class PaymentAmount extends Base_1.default {
    setAttributes(response) {
        const { amount, cash_receipt, primary, secondary, discount, histories, } = response;
        this.amount = amount;
        this.cash_receipt = cash_receipt;
        this.primary = primary;
        this.secondary = secondary;
        this.discount = discount;
        this.histories = histories.map((history) => {
            const { created } = history;
            return lodash_1.default.assign(history, { created: this.timeToDate(created) });
        });
    }
}
exports.default = PaymentAmount;
//# sourceMappingURL=PaymentAmount.js.map