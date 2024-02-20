"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
const response_1 = require("../response");
;
;
/* 결제 예정 금액 등록 및 조회 */
class Prepare extends Base_1.default {
    constructor() {
        super();
        this.responseClass = new response_1.PrepareResponse();
    }
    /* 결제 예정 금액 등록 */
    static postAmount(data) {
        const prepare = new Prepare();
        prepare.url = '/payments/prepare';
        prepare.method = 'POST';
        prepare.data = data;
        return prepare;
    }
    /* 결제 예정 금액 조회 */
    static getAmount({ merchant_uid }) {
        const prepare = new Prepare();
        prepare.url = `/payments/prepare/${merchant_uid}`;
        return prepare;
    }
}
exports.default = Prepare;
//# sourceMappingURL=Prepare.js.map