export declare enum ScheduledStatusEnum {
    SCHEDULED = "scheduled",
    EXECUTED = "executed",
    REVOKED = "revoked"
}
declare class ScheduledStatus {
    getValue(key: string): string;
}
declare const _default: ScheduledStatus;
export default _default;
