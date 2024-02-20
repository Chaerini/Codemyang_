export declare enum SettleVbankCodeEnum {
    IBK = "003",
    KB = "004",
    KEB = "005",
    NH = "011",
    WOORI = "020",
    SC = "023",
    CITY = "027",
    DAEGU = "031",
    KYUNG_NAM = "039",
    BUSAN = "032",
    GWANG_JU = "034",
    POST_OFFICE = "071",
    SHINHAN = "088"
}
declare class SettleVbankCode {
    getValue(key: string): string;
}
declare const _default: SettleVbankCode;
export default _default;
