"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
const response_1 = require("../response");
;
;
;
/* 가상계좌 */
class Vbanks extends Base_1.default {
    constructor() {
        super();
        this.responseClass = new response_1.PaymentResponse();
    }
    /* 가상계좌 생성 */
    static post(data) {
        const vbanks = new Vbanks();
        vbanks.url = '/vbanks';
        vbanks.method = 'POST';
        vbanks.data = data;
        return vbanks;
    }
    /* 가상계좌 삭제 */
    static delete({ imp_uid }) {
        const vbanks = new Vbanks();
        vbanks.url = `/vbanks/${imp_uid}`;
        vbanks.method = 'DELETE';
        return vbanks;
    }
    /* 가상계좌 수정 */
    static put(data) {
        const vbanks = new Vbanks();
        const { imp_uid, amount, vbank_due } = data;
        vbanks.url = `/vbanks/${imp_uid}`;
        vbanks.method = 'PUT';
        vbanks.data = { amount, vbank_due };
        return vbanks;
    }
    /* 가상계좌 예금주 조회 */
    static getHolder(params) {
        const vbanks = new Vbanks();
        vbanks.url = '/vbanks/holder';
        vbanks.params = params;
        vbanks.responseClass = new response_1.VbankHolderResponse();
        return vbanks;
    }
}
exports.default = Vbanks;
//# sourceMappingURL=Vbanks.js.map