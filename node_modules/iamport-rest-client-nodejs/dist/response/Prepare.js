"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
class Prepare extends Base_1.default {
    setAttributes(response) {
        const { merchant_uid, amount } = response;
        this.merchant_uid = merchant_uid;
        this.amount = amount;
    }
}
exports.default = Prepare;
//# sourceMappingURL=Prepare.js.map