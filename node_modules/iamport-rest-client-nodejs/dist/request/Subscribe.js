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
;
/* 정기결제 */
class Subscribe extends Base_1.default {
    constructor() {
        super();
        this.responseClass = new response_1.ScheduledResultResponse();
    }
    /* 빌링키 발급과 동시에 결제 */
    static onetime(data) {
        const subscribe = new Subscribe();
        subscribe.url = '/subscribe/payments/onetime';
        subscribe.method = 'POST';
        subscribe.data = data;
        subscribe.responseClass = new response_1.PaymentResponse();
        return subscribe;
    }
    /* 빌링키로 재결제 */
    static again(data) {
        const subscribe = new Subscribe();
        subscribe.url = '/subscribe/payments/again';
        subscribe.method = 'POST';
        subscribe.data = data;
        subscribe.responseClass = new response_1.PaymentResponse();
        return subscribe;
    }
    /* 예약 */
    static schedule(data) {
        const subscribe = new Subscribe();
        subscribe.url = '/subscribe/payments/schedule';
        subscribe.method = 'POST';
        subscribe.data = data;
        subscribe.responseType = 'list';
        return subscribe;
    }
    /* 예약 취소 */
    static unschedule(data) {
        const subscribe = new Subscribe();
        subscribe.url = '/subscribe/payments/unschedule';
        subscribe.method = 'POST';
        subscribe.data = data;
        subscribe.responseType = 'list';
        return subscribe;
    }
    /* 결제 예약 정보 조회 */
    static getScheduled({ merchant_uid }) {
        const subscribe = new Subscribe();
        subscribe.url = `/subscribe/payments/schedule/${merchant_uid}`;
        return subscribe;
    }
    /* 결제 예약 내역 조회 */
    static getScheduleds(params) {
        const { customer_uid } = params;
        const subscribe = new Subscribe();
        subscribe.url = `/subscribe/payments/schedule/customers/${customer_uid}`;
        subscribe.params = lodash_1.default.omit(params, 'customer_uid');
        subscribe.responseType = 'collection';
        return subscribe;
    }
}
exports.default = Subscribe;
//# sourceMappingURL=Subscribe.js.map