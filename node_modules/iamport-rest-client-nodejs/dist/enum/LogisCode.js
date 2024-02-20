"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogisCodeEnum;
(function (LogisCodeEnum) {
    LogisCodeEnum["LOGEN"] = "LOGEN";
    LogisCodeEnum["KOREX"] = "KOREX";
    LogisCodeEnum["HYUNDAI"] = "HYUNDAI";
    LogisCodeEnum["HANARO"] = "HANARO";
    LogisCodeEnum["SAGAWA"] = "SAGAWA";
    LogisCodeEnum["KGB"] = "KGB";
    LogisCodeEnum["YELLOWCAP"] = "YELLOWCAP";
    LogisCodeEnum["DONGBU"] = "DONGBU";
    LogisCodeEnum["EPOST"] = "EPOST";
    LogisCodeEnum["CJGLS"] = "CJGLS";
    LogisCodeEnum["HANJIN"] = "HANJIN";
    LogisCodeEnum["ETC"] = "ETC";
})(LogisCodeEnum = exports.LogisCodeEnum || (exports.LogisCodeEnum = {}));
;
class LogisCode {
    getValue(key) {
        if (key) {
            switch (key) {
                case 'LOGEN':
                    return '로젠택배';
                case 'KOREX':
                    return '대한통운';
                case 'HYUNDAI':
                    return '현대택배';
                case 'HANARO':
                    return '하나로택배';
                case 'SAGAWA':
                    return 'SC로지스';
                case 'KGB':
                    return 'KGB택배';
                case 'YELLOWCAP':
                    return '옐로우캡';
                case 'DONGBU':
                    return '동부택배';
                case 'EPOST':
                    return '우체국택배';
                case 'CJGLS':
                    return 'CJGLS';
                case 'HANJIN':
                    return '한진택배';
                case 'ETC':
                    return '기타(위 코드표에 해당되지 않는 값이 전달되면 ETC로 자동 처리됩니다)';
                default:
                    throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
            }
        }
        throw new Error('key값을 입력해주세요.');
    }
}
exports.default = new LogisCode();
//# sourceMappingURL=LogisCode.js.map