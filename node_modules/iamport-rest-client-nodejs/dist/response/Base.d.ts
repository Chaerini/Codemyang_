declare abstract class ResponseBase {
    abstract setAttributes(response: ResponseBase): void;
    protected timeToDate(time: any): number | Date;
    getAttributes(): ResponseBase;
}
export default ResponseBase;
