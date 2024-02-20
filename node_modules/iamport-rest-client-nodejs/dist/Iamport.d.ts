import * as Request from './request';
import * as Response from './response';
import * as Enum from './enum';
import { Headers } from './Interfaces';
interface IamportProperties {
    apiKey: string;
    apiSecret: string;
    baseUrl?: string;
}
export declare class Iamport {
    private baseUrl;
    private apiKey;
    private apiSecret;
    private token;
    private apiInstance;
    constructor(properties: IamportProperties);
    getApiInstance(): any;
    getHeaders(): Promise<Headers>;
    private getToken;
    private isTokenValid;
}
export { Request, Response, Enum };
