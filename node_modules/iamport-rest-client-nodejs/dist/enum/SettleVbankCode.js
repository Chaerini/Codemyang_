"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SettleVbankCodeEnum;
(function (SettleVbankCodeEnum) {
    SettleVbankCodeEnum["IBK"] = "003";
    SettleVbankCodeEnum["KB"] = "004";
    SettleVbankCodeEnum["KEB"] = "005";
    SettleVbankCodeEnum["NH"] = "011";
    SettleVbankCodeEnum["WOORI"] = "020";
    SettleVbankCodeEnum["SC"] = "023";
    SettleVbankCodeEnum["CITY"] = "027";
    SettleVbankCodeEnum["DAEGU"] = "031";
    SettleVbankCodeEnum["KYUNG_NAM"] = "039";
    SettleVbankCodeEnum["BUSAN"] = "032";
    SettleVbankCodeEnum["GWANG_JU"] = "034";
    SettleVbankCodeEnum["POST_OFFICE"] = "071";
    SettleVbankCodeEnum["SHINHAN"] = "088";
})(SettleVbankCodeEnum = exports.SettleVbankCodeEnum || (exports.SettleVbankCodeEnum = {}));
;
class SettleVbankCode {
    getValue(key) {
        if (key) {
            switch (key) {
                case '003':
                    return '기업은행';
                case '004':
                    return '국민은행';
                case '005':
                    return 'KEB하나은행';
                case '011':
                    return '농협중앙회(세틀뱅크 테스트 계정에서만 9999오류 발생)';
                case '020':
                    return '우리은행';
                case '023':
                    return 'SC제일은행';
                case '027':
                    return '한국씨티은행';
                case '031':
                    return '대구은행';
                case '039':
                    return '경남은행';
                case '032':
                    return '부산은행';
                case '034':
                    return '광주은행';
                case '071':
                    return '정보통신부 우체국';
                case '088':
                    return '신한은행(세틀뱅크 테스트 계정에서만 9999오류 발생)';
                default:
                    throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
            }
        }
        throw new Error('key값을 입력해주세요.');
    }
}
exports.default = new SettleVbankCode();
//# sourceMappingURL=SettleVbankCode.js.map