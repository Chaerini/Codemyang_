import RequestBase from './Base';
interface getTokenData {
    imp_key: string;
    imp_secret: string;
}
declare class Authenticate extends RequestBase {
    constructor();
    static getToken(data: getTokenData): Authenticate;
}
export default Authenticate;
