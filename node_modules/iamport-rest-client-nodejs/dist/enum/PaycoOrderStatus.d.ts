export declare enum PaycoOrderStatusEnum {
    DELIVERY_START = "DELIVERY_START",
    PURCHASE_DECISION = "PURCHASE_DECISION",
    CANCELED = "CANCELED"
}
declare class PaycoOrderStatus {
    getValue(key: string): string;
}
declare const _default: PaycoOrderStatus;
export default _default;
