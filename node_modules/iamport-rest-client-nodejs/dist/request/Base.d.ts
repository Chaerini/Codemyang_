import { Iamport } from '../Iamport';
import { Method, AxiosResponse, Headers } from '../Interfaces';
declare class RequestBase {
    url: string;
    method: Method;
    headers: Headers;
    params: any;
    data: any;
    responseType: string;
    responseClass: any;
    keepGoing: boolean;
    isLast: boolean;
    isTokenNeeded: boolean;
    request(iamport: Iamport): Promise<AxiosResponse>;
    private getResponse;
    private getResponseData;
    protected getFailedData(response: any): Promise<any>;
}
export default RequestBase;
