"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
class VbankHolder extends Base_1.default {
    setAttributes(response) {
        const { bank_holder } = response;
        this.bank_holder = bank_holder;
    }
}
exports.default = VbankHolder;
//# sourceMappingURL=VbankHolder.js.map