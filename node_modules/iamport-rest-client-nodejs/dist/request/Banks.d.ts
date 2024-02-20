import RequestBase from './Base';
import { BankCodeEnum } from '../enum';
interface getBankParams {
    code: BankCodeEnum;
}
declare class Banks extends RequestBase {
    constructor();
    static getBanks(): Banks;
    static getBank({ code }: getBankParams): Banks;
}
export default Banks;
