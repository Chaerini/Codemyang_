"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
const response_1 = require("../response");
;
/* 금융결제원 표준 코드 기준 은행 정보 조회 */
class Banks extends Base_1.default {
    constructor() {
        super();
        this.responseClass = new response_1.BankCodeResponse();
    }
    /* 모든 은행 정보 조회 */
    static getBanks() {
        const banks = new Banks();
        banks.url = '/banks';
        banks.responseType = 'list';
        return banks;
    }
    /* 특정 은행 정보 조회 */
    static getBank({ code }) {
        const banks = new Banks();
        banks.url = `/banks/${code}`;
        return banks;
    }
}
exports.default = Banks;
//# sourceMappingURL=Banks.js.map