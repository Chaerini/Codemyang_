"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const Base_1 = __importDefault(require("./Base"));
const response_1 = require("../response");
;
;
;
/* 결제 예정 금액 등록 및 조회 */
class Escrows extends Base_1.default {
    constructor() {
        super();
        this.responseClass = new response_1.EscrowResponse();
    }
    /* 결제 예정 금액 등록 */
    static postEscrow(data) {
        const { imp_uid } = data;
        const prepare = new Escrows();
        prepare.url = `/escrows/logis/${imp_uid}`;
        prepare.method = 'POST';
        prepare.data = lodash_1.default.omit(data, 'imp_uid');
        return prepare;
    }
    /* 결제 예정 금액 조회 */
    static putEscrow(data) {
        const { imp_uid } = data;
        const prepare = new Escrows();
        prepare.url = `/escrows/logis/${imp_uid}`;
        prepare.method = 'PUT';
        prepare.data = lodash_1.default.omit(data, 'imp_uid');
        return prepare;
    }
}
exports.default = Escrows;
//# sourceMappingURL=Escrows.js.map