"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
;
;
/* 일반결제 */
class Payments extends Base_1.default {
    constructor() {
        super();
        this.responseClass = new response_1.PaymentResponse();
    }
    /* 결제내역 조회 > 아임포트 번호 */
    static getByImpUids(params) {
        const payments = new Payments();
        payments.url = '/payments';
        payments.params = params;
        payments.responseType = 'list';
        payments.keepGoing = true;
        return payments;
    }
    /* 결제내역 조회 > 주문 번호 */
    static getByMerchantUids(params) {
        const { merchant_uid, status, page, sorting } = params;
        const payments = new Payments();
        payments.url = `/payments/findAll/${merchant_uid}/${status}`;
        payments.params = { page, sorting };
        payments.responseType = 'collection';
        return payments;
    }
    /* 결제내역 조회 > 결제 상태 */
    static getByStatus(params) {
        const { status } = params;
        const payments = new Payments();
        payments.url = `/payments/status/${status}`;
        payments.params = lodash_1.default.omit(params, 'status');
        payments.responseType = 'collection';
        return payments;
    }
    /* 결제정보 조회 > 아임포트 번호 */
    static getByImpUid({ imp_uid }, headers) {
        const payments = new Payments();
        payments.url = `/payments/${imp_uid}`;
        if (headers && typeof headers === 'object' && !Array.isArray(headers) && Object.keys(headers).length !== 0) {
            // 티어 결제 건 조회 용도
            payments.headers = Object.assign({}, headers);
        }
        return payments;
    }
    /* 결제정보 조회 > 주문 번호 */
    static getByMerchantUid(params) {
        const { merchant_uid, status, sorting } = params;
        const payments = new Payments();
        payments.url = `/payments/find/${merchant_uid}/${status}`;
        payments.params = { sorting };
        return payments;
    }
    /* 결제금액 조회 > 아임포트 번호 */
    static getAmountByImpUid({ imp_uid }) {
        const payments = new Payments();
        payments.url = `/payments/${imp_uid}/balance`;
        payments.responseClass = new response_1.PaymentAmountResponse();
        return payments;
    }
    /* 결제취소 */
    static cancel(data) {
        const payments = new Payments();
        payments.url = '/payments/cancel';
        payments.method = 'POST';
        payments.data = data;
        return payments;
    }
    getFailedData(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { imp_uid } = this.params;
            const succeed = response.map((payment) => payment.imp_uid);
            return lodash_1.default.difference(imp_uid, succeed);
        });
    }
}
exports.default = Payments;
//# sourceMappingURL=Payments.js.map