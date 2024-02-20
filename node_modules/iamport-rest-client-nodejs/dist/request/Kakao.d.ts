import RequestBase from './Base';
interface getParams {
    payment_request_date: string;
    cid?: string;
    page?: number;
}
declare class Kakao extends RequestBase {
    constructor();
    static getOrders(params: getParams): Kakao;
}
export default Kakao;
