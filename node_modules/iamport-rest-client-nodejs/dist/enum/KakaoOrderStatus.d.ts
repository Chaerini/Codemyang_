export declare enum KakaoOrderStatusEnum {
    READY = "READY",
    SEND_TMS = "SEND_TMS",
    OPEN_PAYMENT = "OPEN_PAYMENT",
    SELECT_METHOD = "SELECT_METHOD",
    ARS_WAITING = "ARS_WAITING",
    AUTH_PASSWORD = "AUTH_PASSWORD",
    ISSUED_SID = "ISSUED_SID",
    SUCCESS_PAYMENT = "SUCCESS_PAYMENT",
    PART_CANCEL_PAYMENT = "PART_CANCEL_PAYMENT",
    CANCEL_PAYMENT = "CANCEL_PAYMENT",
    FAIL_AUTH_PASSWORD = "FAIL_AUTH_PASSWORD",
    QUIT_PAYMENT = "QUIT_PAYMENT",
    FAIL_PAYMENT = "FAIL_PAYMENT"
}
declare class KakaoOrderStatus {
    getValue(key: string): string;
}
declare const _default: KakaoOrderStatus;
export default _default;
