import RequestBase from './Base';
import { ImpUidParams } from '../Interfaces';
declare class NaverPay extends RequestBase {
    static postPoint({ imp_uid }: ImpUidParams): NaverPay;
    static postEscrow({ imp_uid }: ImpUidParams): NaverPay;
    static getCashAmount({ imp_uid }: ImpUidParams): NaverPay;
}
export default NaverPay;
