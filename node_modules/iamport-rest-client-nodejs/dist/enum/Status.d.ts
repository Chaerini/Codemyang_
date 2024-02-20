export declare enum StatusEnum {
    ALL = "all",
    PAID = "paid",
    FAILED = "failed",
    CANCELLED = "cancelled",
    READY = "ready"
}
declare class Status {
    getValue(key: string): string;
}
declare const _default: Status;
export default _default;
