"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BankCodeEnum;
(function (BankCodeEnum) {
    BankCodeEnum["BOK"] = "001";
    BankCodeEnum["KDB"] = "002";
    BankCodeEnum["IBK"] = "003";
    BankCodeEnum["KB"] = "004";
    BankCodeEnum["OLD_KEB"] = "005";
    BankCodeEnum["SH"] = "007";
    BankCodeEnum["EXIM"] = "008";
    BankCodeEnum["NH"] = "011";
    BankCodeEnum["CHOOK_HYUP"] = "012";
    BankCodeEnum["WOORI"] = "020";
    BankCodeEnum["SC"] = "023";
    BankCodeEnum["CITY"] = "027";
    BankCodeEnum["DAE_GU"] = "031";
    BankCodeEnum["BUSAN"] = "032";
    BankCodeEnum["GWANG_JU"] = "034";
    BankCodeEnum["JEJU"] = "035";
    BankCodeEnum["JUN_BOOK"] = "037";
    BankCodeEnum["KYUNG_NAM"] = "039";
    BankCodeEnum["MG"] = "045";
    BankCodeEnum["SIN_HYUP"] = "048";
    BankCodeEnum["FSB"] = "050";
    BankCodeEnum["JP"] = "052";
    BankCodeEnum["HSBC"] = "054";
    BankCodeEnum["DEUTSCHE"] = "055";
    BankCodeEnum["RBSPLC"] = "056";
    BankCodeEnum["JBMC"] = "057";
    BankCodeEnum["MIZUHO"] = "058";
    BankCodeEnum["UFJ"] = "059";
    BankCodeEnum["BOA"] = "060";
    BankCodeEnum["BNP"] = "061";
    BankCodeEnum["ICBC"] = "062";
    BankCodeEnum["BOC"] = "063";
    BankCodeEnum["NFCF"] = "064";
    BankCodeEnum["UOB"] = "065";
    BankCodeEnum["BOCC"] = "066";
    BankCodeEnum["POST_OFFICE"] = "071";
    BankCodeEnum["KODIT"] = "076";
    BankCodeEnum["KIBO"] = "077";
    BankCodeEnum["KEP"] = "081";
    BankCodeEnum["SHIN_HAN"] = "088";
    BankCodeEnum["K_BANK"] = "089";
    BankCodeEnum["KAKAO"] = "090";
    BankCodeEnum["HF"] = "093";
    BankCodeEnum["SGI"] = "094";
    BankCodeEnum["POLICE"] = "095";
    BankCodeEnum["NICE"] = "096";
    BankCodeEnum["KFTC"] = "099";
    BankCodeEnum["YUANTA_SC"] = "209";
    BankCodeEnum["HYUNDAI_SC"] = "218";
    BankCodeEnum["SANG_SANG_IN_SC"] = "221";
    BankCodeEnum["HAN_YANG_SC"] = "222";
    BankCodeEnum["LEADING_SC"] = "223";
    BankCodeEnum["BNK_SC"] = "224";
    BankCodeEnum["IBK_SC"] = "225";
    BankCodeEnum["KB_SC"] = "226";
    BankCodeEnum["KTB_SC"] = "227";
    BankCodeEnum["MIRAE_ASSET_SC"] = "230";
    BankCodeEnum["DAEWOO_SC"] = "238";
    BankCodeEnum["SAMSUNG_SC"] = "240";
    BankCodeEnum["KIS"] = "243";
    BankCodeEnum["WOORI_SC"] = "247";
    BankCodeEnum["KYOBO_SC"] = "261";
    BankCodeEnum["HI_SC"] = "262";
    BankCodeEnum["HMC_SC"] = "263";
    BankCodeEnum["KIWOOM_SC"] = "264";
    BankCodeEnum["EBEST_SC"] = "265";
    BankCodeEnum["SK_SC"] = "266";
    BankCodeEnum["DAI_SHIN_SC"] = "267";
    BankCodeEnum["IM_SC"] = "268";
    BankCodeEnum["HAN_WHA_SC"] = "269";
    BankCodeEnum["HANA_SC"] = "270";
    BankCodeEnum["SHIN_HAN_SC"] = "278";
    BankCodeEnum["DB_SC"] = "279";
    BankCodeEnum["EUGENE_SC"] = "280";
    BankCodeEnum["MERITZ_SC"] = "287";
    BankCodeEnum["NH_SC"] = "289";
    BankCodeEnum["BOOKOOK_SC"] = "290";
    BankCodeEnum["SHIN_YOUNG_SC"] = "291";
    BankCodeEnum["LIG_SC"] = "292";
    BankCodeEnum["KSFC"] = "293";
    BankCodeEnum["FOSS_KOREA"] = "294";
    BankCodeEnum["WOORIIB"] = "295";
    BankCodeEnum["SS_FUTURES"] = "296";
    BankCodeEnum["OLD_KEB_FUTURES"] = "297";
    BankCodeEnum["HI_FUTURES"] = "298";
})(BankCodeEnum = exports.BankCodeEnum || (exports.BankCodeEnum = {}));
;
class BankCode {
    getValue(key) {
        if (key) {
            switch (key) {
                case '001':
                    return '한국은행';
                case '002':
                    return '산업은행';
                case '003':
                    return '기업은행';
                case '004':
                    return '국민은행';
                case '005':
                    return '외환은행';
                case '007':
                    return '수협중앙회';
                case '008':
                    return '수출입은행';
                case '011':
                    return '농협은행';
                case '012':
                    return '지역 농.축협';
                case '020':
                    return '우리은행';
                case '023':
                    return 'SC은행';
                case '027':
                    return '한국씨티은행';
                case '031':
                    return '대구은행';
                case '032':
                    return '부산은행';
                case '034':
                    return '광주은행';
                case '035':
                    return '제주은행';
                case '037':
                    return '전북은행';
                case '039':
                    return '경남은행';
                case '045':
                    return '새마을금고중앙회';
                case '048':
                    return '신협중앙회';
                case '050':
                    return '상호저축은행';
                case '052':
                    return '모건스탠리은행';
                case '054':
                    return 'HSBC은행';
                case '055':
                    return '도이치은행';
                case '056':
                    return '알비에스피엘씨은행';
                case '057':
                    return '제이피모간체이스은행';
                case '058':
                    return '미즈호은행';
                case '059':
                    return '미쓰비시도쿄UFJ은행';
                case '060':
                    return 'BOA은행';
                case '061':
                    return '비엔피파리바은행';
                case '062':
                    return '중국공상은행';
                case '063':
                    return '중국은행';
                case '064':
                    return '산림조합중앙회';
                case '065':
                    return '대화은행';
                case '066':
                    return '교통은행';
                case '071':
                    return '우체국';
                case '076':
                    return '신용보증기금';
                case '077':
                    return '기술보증기금';
                case '081':
                    return 'KEB하나은행';
                case '088':
                    return '신한은행';
                case '089':
                    return '케이뱅크';
                case '090':
                    return '카카오뱅크';
                case '093':
                    return '한국주택금융공사';
                case '094':
                    return '서울보증보험';
                case '095':
                    return '경찰청';
                case '096':
                    return '한국전자금융(주)';
                case '099':
                    return '금융결제원';
                case '209':
                    return '유안타증권';
                case '218':
                    return '현대증권';
                case '221':
                    return '골든브릿지투자증권';
                case '222':
                    return '한양증권';
                case '223':
                    return '리딩투자증권';
                case '224':
                    return 'BNK투자증권';
                case '225':
                    return 'IBK투자증권';
                case '226':
                    return 'KB투자증권';
                case '227':
                    return 'KTB투자증권';
                case '230':
                    return '미래에셋증권';
                case '238':
                    return '대우증권';
                case '240':
                    return '삼성증권';
                case '243':
                    return '한국투자증권';
                case '247':
                    return '우리투자증권';
                case '261':
                    return '교보증권';
                case '262':
                    return '하이투자증권';
                case '263':
                    return 'HMC투자증권';
                case '264':
                    return '키움증권';
                case '265':
                    return '이베스트투자증권';
                case '266':
                    return 'SK증권';
                case '267':
                    return '대신증권';
                case '268':
                    return '솔로몬투자증권';
                case '269':
                    return '한화투자증권';
                case '270':
                    return '하나대투증권';
                case '278':
                    return '신한금융투자';
                case '279':
                    return '동부증권';
                case '280':
                    return '유진투자증권';
                case '287':
                    return '메리츠종합금융증권';
                case '289':
                    return 'NH투자증권';
                case '290':
                    return '부국증권';
                case '291':
                    return '신영증권';
                case '292':
                    return '엘아이지투자증권';
                case '293':
                    return '한국증권금융';
                case '294':
                    return '펀드온라인코리아';
                case '295':
                    return '우리종합금융';
                case '296':
                    return '삼성선물';
                case '297':
                    return '외환선물';
                case '298':
                    return '현대선물';
                default:
                    throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
            }
        }
        throw new Error('key값을 입력해주세요.');
    }
}
exports.default = new BankCode();
//# sourceMappingURL=BankCode.js.map