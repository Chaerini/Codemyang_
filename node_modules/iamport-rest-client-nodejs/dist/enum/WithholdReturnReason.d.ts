export declare enum WithholdReturnReasonEnum {
    RETURN_DELIVERYFEE = "RETURN_DELIVERYFEE",
    EXTRAFEEE = "EXTRAFEEE",
    RETURN_DELIVERYFEE_AND_EXTRAFEEE = "RETURN_DELIVERYFEE_AND_EXTRAFEEE",
    RETURN_PRODUCT_NOT_DELIVERED = "RETURN_PRODUCT_NOT_DELIVERED",
    ETC = "ETC"
}
declare class WithholdReturnReason {
    getValue(key: string): string;
}
declare const _default: WithholdReturnReason;
export default _default;
