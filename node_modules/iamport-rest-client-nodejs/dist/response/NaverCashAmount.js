"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
class NaverCashAmount extends Base_1.default {
    setAttributes(response) {
        const { amount_total, amount_by_npoint, amount_by_primary, amount_supply, amount_vat, } = response;
        this.amount_total = amount_total;
        this.amount_by_npoint = amount_by_npoint;
        this.amount_by_primary = amount_by_primary;
        this.amount_supply = amount_supply;
        this.amount_vat = amount_vat;
    }
}
exports.default = NaverCashAmount;
//# sourceMappingURL=NaverCashAmount.js.map