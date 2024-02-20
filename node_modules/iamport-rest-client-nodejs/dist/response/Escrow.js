"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
class Escrow extends Base_1.default {
    setAttributes(response) {
        const { company, invoice, sent_at, applied_at, } = response;
        this.company = company;
        this.invoice = invoice;
        this.sent_at = this.timeToDate(sent_at);
        this.applied_at = this.timeToDate(applied_at);
    }
}
exports.default = Escrow;
//# sourceMappingURL=Escrow.js.map