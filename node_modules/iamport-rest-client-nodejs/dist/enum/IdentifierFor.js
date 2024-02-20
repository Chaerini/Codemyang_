"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IdentifierForEnum;
(function (IdentifierForEnum) {
    IdentifierForEnum["PERSON"] = "person";
    IdentifierForEnum["COMPANY"] = "company";
})(IdentifierForEnum = exports.IdentifierForEnum || (exports.IdentifierForEnum = {}));
;
class IdentifierFor {
    getValue(key) {
        if (key) {
            switch (key) {
                case 'person':
                    return '소득공제용(개인)';
                case 'company':
                    return '지출증빙용(법인)';
                default:
                    throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
            }
        }
        throw new Error('key값을 입력해주세요.');
    }
}
exports.default = new IdentifierFor();
//# sourceMappingURL=IdentifierFor.js.map