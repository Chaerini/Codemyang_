export declare enum ReturnReasonEnum {
    INTENT_CHANGED = "INTENT_CHANGED",
    COLOR_AND_SIZE = "COLOR_AND_SIZE",
    WRONG_ORDER = "WRONG_ORDER",
    PRODUCT_UNSATISFIED = "PRODUCT_UNSATISFIED",
    DELAYED_DELIVERY = "DELAYED_DELIVERY",
    SOLD_OUT = "SOLD_OUT",
    DROPPED_DELIVERY = "DROPPED_DELIVERY",
    BROKEN = "BROKEN",
    INCORRECT_INFO = "INCORRECT_INFO",
    WRONG_DELIVERY = "WRONG_DELIVERY",
    WRONG_OPTION = "WRONG_OPTION"
}
declare class ReturnReason {
    getValue(key: string): string;
}
declare const _default: ReturnReason;
export default _default;
