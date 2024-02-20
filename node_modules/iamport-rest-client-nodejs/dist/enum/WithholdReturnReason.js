"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WithholdReturnReasonEnum;
(function (WithholdReturnReasonEnum) {
    WithholdReturnReasonEnum["RETURN_DELIVERYFEE"] = "RETURN_DELIVERYFEE";
    WithholdReturnReasonEnum["EXTRAFEEE"] = "EXTRAFEEE";
    WithholdReturnReasonEnum["RETURN_DELIVERYFEE_AND_EXTRAFEEE"] = "RETURN_DELIVERYFEE_AND_EXTRAFEEE";
    WithholdReturnReasonEnum["RETURN_PRODUCT_NOT_DELIVERED"] = "RETURN_PRODUCT_NOT_DELIVERED";
    WithholdReturnReasonEnum["ETC"] = "ETC";
})(WithholdReturnReasonEnum = exports.WithholdReturnReasonEnum || (exports.WithholdReturnReasonEnum = {}));
;
class WithholdReturnReason {
    getValue(key) {
        if (key) {
            switch (key) {
                case 'RETURN_DELIVERYFEE':
                    return '반품 배송비 청구';
                case 'EXTRAFEEE':
                    return '기타 반품 비용 청구';
                case 'RETURN_DELIVERYFEE_AND_EXTRAFEEE':
                    return '반품 배송비 및 기타 반품 비용 청구';
                case 'RETURN_PRODUCT_NOT_DELIVERED':
                    return '반품 상품 미입고';
                case 'ETC':
                    return '기타 사유';
                default:
                    throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
            }
        }
        throw new Error('key값을 입력해주세요.');
    }
}
exports.default = new WithholdReturnReason();
//# sourceMappingURL=WithholdReturnReason.js.map