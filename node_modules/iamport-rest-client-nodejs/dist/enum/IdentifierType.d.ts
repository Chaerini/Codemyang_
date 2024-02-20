export declare enum IdentifierTypeEnum {
    PERSON = "person",
    BUSINESS = "business",
    PHONE = "phone",
    TAXCARD = "taxcard"
}
declare class IdentifierType {
    getValue(key: string): string;
}
declare const _default: IdentifierType;
export default _default;
