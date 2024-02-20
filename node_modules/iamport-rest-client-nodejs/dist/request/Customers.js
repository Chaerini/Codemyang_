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
;
;
/* 정기결제용 구매자 빌링키 */
class Customers extends Base_1.default {
    constructor() {
        super();
        this.responseClass = new response_1.CustomerResponse();
    }
    /* 빌링키 내역 조회 */
    static getBillingKeys(params) {
        const customers = new Customers();
        customers.url = '/subscribe/customers';
        customers.params = params;
        customers.responseType = 'list';
        return customers;
    }
    /* 빌링키 발급 및 등록 */
    static postBillingKey(data) {
        const { customer_uid } = data;
        const customers = new Customers();
        customers.url = `/subscribe/customers/${customer_uid}`;
        customers.method = 'POST';
        customers.data = lodash_1.default.omit(data, 'customer_uid');
        return customers;
    }
    /* 빌링키 정보 조회 */
    static getBillingKey({ customer_uid }) {
        const customers = new Customers();
        customers.url = `/subscribe/customers/${customer_uid}`;
        return customers;
    }
    /* 빌링키 삭제 */
    static deleteBillingKey({ customer_uid }) {
        const customers = new Customers();
        customers.url = `/subscribe/customers/${customer_uid}`;
        customers.method = 'DELETE';
        return customers;
    }
    /* 빌링키로 결제 된 결제내역 조회 */
    static getPayments(params) {
        const { customer_uid, page } = params;
        const customers = new Customers();
        customers.url = `/subscribe/customers/${customer_uid}/payments`;
        customers.params = { page };
        customers.responseType = 'collection';
        customers.responseClass = new response_1.PaymentResponse();
        return customers;
    }
    /* 결제 예약 내역 조회  */
    static getScheduleds(params) {
        const { customer_uid } = params;
        const customers = new Customers();
        customers.url = `/subscribe/customers/${customer_uid}/schedules`;
        customers.params = lodash_1.default.omit(params, 'customer_uid');
        customers.responseType = 'collection';
        customers.responseClass = new response_1.ScheduledResultResponse();
        return customers;
    }
}
exports.default = Customers;
//# sourceMappingURL=Customers.js.map