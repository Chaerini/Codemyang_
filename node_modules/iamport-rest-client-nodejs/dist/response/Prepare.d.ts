import ResponseBase from './Base';
declare class Prepare extends ResponseBase {
    merchant_uid: string;
    amount: number;
    setAttributes(response: Prepare): void;
}
export default Prepare;
