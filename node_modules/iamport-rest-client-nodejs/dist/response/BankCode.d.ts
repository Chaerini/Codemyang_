import ResponseBase from './Base';
import { BankCodeEnum } from '../enum';
declare class BankCode extends ResponseBase {
    code: BankCodeEnum;
    name: string;
    setAttributes(response: BankCode): void;
}
export default BankCode;
