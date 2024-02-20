import RequestBase from './Base';
interface PostData {
    merchant_uid: string;
    amount: number;
}
interface getParams {
    merchant_uid: string;
}
declare class Prepare extends RequestBase {
    constructor();
    static postAmount(data: PostData): Prepare;
    static getAmount({ merchant_uid }: getParams): Prepare;
}
export default Prepare;
