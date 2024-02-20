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
;
;
;
;
/* 네이버페이 > 주문형 */
class NaverCo extends Base_1.default {
    constructor() {
        super();
        this.keepGoing = true;
        this.responseType = 'list';
        this.responseClass = new response_1.NaverProductOrderResponse();
    }
    /* 상품 발주 */
    static place(data) {
        const { imp_uid, product_order_id } = data;
        const naverco = new NaverCo();
        naverco.url = `/payments/${imp_uid}/naver/place`;
        naverco.method = 'POST';
        naverco.data = { product_order_id };
        return naverco;
    }
    /* 상품 발송 */
    static ship(data) {
        const { imp_uid } = data;
        const naverco = new NaverCo();
        naverco.url = `/payments/${imp_uid}/naver/ship`;
        naverco.method = 'POST';
        naverco.data = lodash_1.default.omit(data, 'imp_uid');
        return naverco;
    }
    /* 교환 승인 상품 재발송 */
    static shipExchanged(data) {
        const { imp_uid } = data;
        const naverco = new NaverCo();
        naverco.url = `/payments/${imp_uid}/naver/ship-exchanged`;
        naverco.method = 'POST';
        naverco.data = lodash_1.default.omit(data, 'imp_uid');
        return naverco;
    }
    /* 상품 반품 요청 */
    static requestReturn(data) {
        const { imp_uid } = data;
        const naverco = new NaverCo();
        naverco.url = `/payments/${imp_uid}/naver/request-return`;
        naverco.method = 'POST';
        naverco.data = lodash_1.default.omit(data, 'imp_uid');
        return naverco;
    }
    /* 상품 반품 보류 */
    static withholdReturn(data) {
        const { imp_uid } = data;
        const naverco = new NaverCo();
        naverco.url = `/payments/${imp_uid}/naver/withhold-return`;
        naverco.method = 'POST';
        naverco.data = lodash_1.default.omit(data, 'imp_uid');
        return naverco;
    }
    /* 상품 반품 보류 해제 */
    static resolveReturn(data) {
        const { imp_uid, product_order_id } = data;
        const naverco = new NaverCo();
        naverco.url = `/payments/${imp_uid}/naver/resolve-return`;
        naverco.method = 'POST';
        naverco.data = { product_order_id };
        return naverco;
    }
    /* 상품 반품 거절 */
    static rejectReturn(data) {
        const { imp_uid } = data;
        const naverco = new NaverCo();
        naverco.url = `/payments/${imp_uid}/naver/reject-return`;
        naverco.method = 'POST';
        naverco.data = lodash_1.default.omit(data, 'imp_uid');
        return naverco;
    }
    /* 상품 반품 승인 */
    static approveReturn(data) {
        const { imp_uid } = data;
        const naverco = new NaverCo();
        naverco.url = `/payments/${imp_uid}/naver/approve-return`;
        naverco.method = 'POST';
        naverco.data = lodash_1.default.omit(data, 'imp_uid');
        return naverco;
    }
    /* 상품 환불 */
    static cancel(params) {
        const { imp_uid } = params;
        const naverco = new NaverCo();
        naverco.url = `/payments/${imp_uid}/naver/cancel`;
        naverco.method = 'POST';
        naverco.data = lodash_1.default.omit(params, 'imp_uid');
        return naverco;
    }
    /* 주문번호 조회 */
    static getProductOrderIds({ imp_uid }) {
        const naverco = new NaverCo();
        naverco.url = `/payments/${imp_uid}/naver/product-orders`;
        naverco.keepGoing = false;
        return naverco;
    }
    /* 주문내역 상세조회 */
    static getOrderDetail({ product_order_id }) {
        const naverco = new NaverCo();
        naverco.url = `/naver/product-orders/${product_order_id}`;
        naverco.responseType = 'item';
        naverco.keepGoing = false;
        return naverco;
    }
    /* 구매평 조회 */
    static getReviews(params) {
        const naverco = new NaverCo();
        naverco.url = '/naver/reviews';
        naverco.params = params;
        naverco.responseClass = new response_1.NaverReviewResponse();
        naverco.keepGoing = false;
        return naverco;
    }
    /**
     * 액션에 실패한 네이버페이 주문번호를 리턴
     */
    getFailedData(response) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getProductOrderId()
                .then((product_order_id) => {
                const succeed = response.map((orders) => orders.product_order_id);
                const failedData = lodash_1.default.difference(product_order_id, succeed);
                return failedData;
            })
                .catch((error) => Promise.reject(error));
        });
    }
    /**
     * 요청에 네이버페이 주문번호가 있는 경우엔 리턴
     * 없는 경우엔 아임포트 번호에 대한 네이버페이 주문번호를 조회 결과를 리턴
     */
    getProductOrderId() {
        return __awaiter(this, void 0, void 0, function* () {
            const { product_order_id } = this.data;
            if (Array.isArray(product_order_id) && product_order_id.length === 0) {
                const [, imp_uid] = this.url.match('/(?<=/payments/)(.*)(?=/naver)/');
                return NaverCo.getProductOrderIds({ imp_uid });
            }
            return product_order_id;
        });
    }
}
exports.default = NaverCo;
//# sourceMappingURL=NaverCo.js.map