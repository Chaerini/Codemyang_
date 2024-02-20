"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CancelReasonEnum;
(function (CancelReasonEnum) {
    CancelReasonEnum["PRODUCT_UNSATISFIED"] = "PRODUCT_UNSATISFIED";
    CancelReasonEnum["DELAYED_DELIVERY"] = "DELAYED_DELIVERY";
    CancelReasonEnum["SOLD_OUT"] = "SOLD_OUT";
})(CancelReasonEnum = exports.CancelReasonEnum || (exports.CancelReasonEnum = {}));
;
class CancelReason {
    getValue(key) {
        if (key) {
            switch (key) {
                case 'PRODUCT_UNSATISFIED':
                    return '서비스 및 상품 불만족';
                case 'DELAYED_DELIVERY':
                    return '배송 지연';
                case 'SOLD_OUT':
                    return '상품 품절';
                default:
                    throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
            }
        }
        throw new Error('key값을 입력해주세요.');
    }
}
exports.default = new CancelReason();
//# sourceMappingURL=CancelReason.js.map