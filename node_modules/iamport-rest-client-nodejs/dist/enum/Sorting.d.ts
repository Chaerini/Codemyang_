export declare enum SortingEnum {
    STARTED_ASC = "started",
    STARTED_DESC = "-started",
    PAID_ASC = "paid",
    PAID_DESC = "-paid",
    UPDATED = "updated",
    UPDATED_DESC = "-updated"
}
declare class Sorting {
    getValue(key: string): string;
}
declare const _default: Sorting;
export default _default;
