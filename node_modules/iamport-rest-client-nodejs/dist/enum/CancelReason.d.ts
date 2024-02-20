export declare enum CancelReasonEnum {
    PRODUCT_UNSATISFIED = "PRODUCT_UNSATISFIED",
    DELAYED_DELIVERY = "DELAYED_DELIVERY",
    SOLD_OUT = "SOLD_OUT"
}
declare class CancelReason {
    getValue(key: string): string;
}
declare const _default: CancelReason;
export default _default;
