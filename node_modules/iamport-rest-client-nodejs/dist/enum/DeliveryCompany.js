"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeliveryCompanyEnum;
(function (DeliveryCompanyEnum) {
    DeliveryCompanyEnum["CJGLS"] = "CJGLS";
    DeliveryCompanyEnum["KGB"] = "KGB";
    DeliveryCompanyEnum["DONGBU"] = "DONGBU";
    DeliveryCompanyEnum["EPOST"] = "EPOST";
    DeliveryCompanyEnum["REGISTPOST"] = "REGISTPOST";
    DeliveryCompanyEnum["HANJIN"] = "HANJIN";
    DeliveryCompanyEnum["HYUNDAI"] = "HYUNDAI";
    DeliveryCompanyEnum["KGBLS"] = "KGBLS";
    DeliveryCompanyEnum["INNOGIS"] = "INNOGIS";
    DeliveryCompanyEnum["DAESIN"] = "DAESIN";
    DeliveryCompanyEnum["ILYANG"] = "ILYANG";
    DeliveryCompanyEnum["KDEXP"] = "KDEXP";
    DeliveryCompanyEnum["CHUNIL"] = "CHUNIL";
    DeliveryCompanyEnum["CH1"] = "CH1";
    DeliveryCompanyEnum["HDEXP"] = "HDEXP";
    DeliveryCompanyEnum["CVSNET"] = "CVSNET";
    DeliveryCompanyEnum["DHL"] = "DHL";
    DeliveryCompanyEnum["FEDEX"] = "FEDEX";
    DeliveryCompanyEnum["GSMNTON"] = "GSMNTON";
    DeliveryCompanyEnum["WARPEX"] = "WARPEX";
    DeliveryCompanyEnum["WIZWA"] = "WIZWA";
    DeliveryCompanyEnum["EMS"] = "EMS";
    DeliveryCompanyEnum["DHLDE"] = "DHLDE";
    DeliveryCompanyEnum["ACIEXPRESS"] = "ACIEXPRESS";
    DeliveryCompanyEnum["EZUSA"] = "EZUSA";
    DeliveryCompanyEnum["PANTOS"] = "PANTOS";
    DeliveryCompanyEnum["UPS"] = "UPS";
    DeliveryCompanyEnum["HLCGLOBAL"] = "HLCGLOBAL";
    DeliveryCompanyEnum["KOREXG"] = "KOREXG";
    DeliveryCompanyEnum["TNT"] = "TNT";
    DeliveryCompanyEnum["SWGEXP"] = "SWGEXP";
    DeliveryCompanyEnum["DAEWOON"] = "DAEWOON";
    DeliveryCompanyEnum["USPS"] = "USPS";
    DeliveryCompanyEnum["IPARCEL"] = "IPARCEL";
    DeliveryCompanyEnum["KUNYOUNG"] = "KUNYOUNG";
    DeliveryCompanyEnum["HPL"] = "HPL";
    DeliveryCompanyEnum["DADREAM"] = "DADREAM";
    DeliveryCompanyEnum["SLX"] = "SLX";
    DeliveryCompanyEnum["SFEXPRESS"] = "SFEXPRESS";
    DeliveryCompanyEnum["HONAM"] = "HONAM";
})(DeliveryCompanyEnum = exports.DeliveryCompanyEnum || (exports.DeliveryCompanyEnum = {}));
class DeliveryCompany {
    getValue(key) {
        if (key) {
            switch (key) {
                case 'CJGLS':
                    return 'CJ 대한통운';
                case 'KGB':
                    return '로젠택배';
                case 'DONGBU':
                    return 'KG 로지스';
                case 'EPOST':
                    return '우체국택배';
                case 'REGISTPOST':
                    return '우편등기';
                case 'HANJIN':
                    return '한진택배';
                case 'HYUNDAI':
                    return '현대택배';
                case 'KGBLS':
                    return 'KGB 택배';
                case 'INNOGIS':
                    return 'GTX 로지스';
                case 'DAESIN':
                    return '대신택배';
                case 'ILYANG':
                    return '일양로지스';
                case 'KDEXP':
                    return '경동택배';
                case 'CHUNIL':
                    return '천일택배';
                case 'CH1':
                    return '기타 택배';
                case 'HDEXP':
                    return '합동택배';
                case 'CVSNET':
                    return '편의점택배';
                case 'DHL':
                    return 'DHL';
                case 'FEDEX':
                    return 'FEDEX';
                case 'GSMNTON':
                    return 'GSMNTON';
                case 'WARPEX':
                    return 'WarpEx';
                case 'WIZWA':
                    return 'WIZWA';
                case 'EMS':
                    return 'EMS';
                case 'DHLDE':
                    return 'DHL(독일)';
                case 'ACIEXPRESS':
                    return 'ACI';
                case 'EZUSA':
                    return 'EZUSA';
                case 'PANTOS':
                    return '범한판토스';
                case 'UPS':
                    return 'UPS';
                case 'HLCGLOBAL':
                    return '현대택배(국제택배)';
                case 'KOREXG':
                    return 'CJ 대한통운(국제택배)';
                case 'TNT':
                    return 'TNT';
                case 'SWGEXP':
                    return '성원글로벌';
                case 'DAEWOON':
                    return '대운글로벌';
                case 'USPS':
                    return 'USPS';
                case 'IPARCEL':
                    return 'i-parcel';
                case 'KUNYOUNG':
                    return '건영택배';
                case 'HPL':
                    return '한의사랑택배';
                case 'DADREAM':
                    return '다드림';
                case 'SLX':
                    return 'SLX 택배';
                case 'SFEXPRESS':
                    return '순풍택배';
                case 'HONAM':
                    return '호남택배';
                default:
                    throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
            }
        }
        throw new Error('key값을 입력해주세요.');
    }
}
exports.default = new DeliveryCompany();
//# sourceMappingURL=DeliveryCompany.js.map