"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeliveryMethodEnum;
(function (DeliveryMethodEnum) {
    DeliveryMethodEnum["RETURN_DESIGNATED"] = "RETURN_DESIGNATED";
    DeliveryMethodEnum["RETURN_DELIVERY"] = "RETURN_DELIVERY";
    DeliveryMethodEnum["RETURN_INDIVIDUAL"] = "RETURN_INDIVIDUAL";
})(DeliveryMethodEnum = exports.DeliveryMethodEnum || (exports.DeliveryMethodEnum = {}));
;
class DeliveryMethod {
    getValue(key) {
        if (key) {
            switch (key) {
                case 'RETURN_DESIGNATED':
                    return '지정 반품 택배(판매자 측에서 택배접수는 미리 해준 경우)';
                case 'RETURN_DELIVERY':
                    return '일반 반품 택배';
                case 'RETURN_INDIVIDUAL':
                    return '직접 반송';
                default:
                    throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
            }
        }
        throw new Error('key값을 입력해주세요.');
    }
}
exports.default = new DeliveryMethod();
//# sourceMappingURL=DeliveryMethod.js.map