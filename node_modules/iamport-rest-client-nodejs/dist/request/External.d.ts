import RequestBase from './Base';
import { IdentifierTypeEnum, IdentifierForEnum } from '../enum';
import { MerchantUidParams } from '../Interfaces';
interface postExternalData {
    merchant_uid: string;
    name: string;
    amount: number;
    identifier: string;
    identifier_type?: IdentifierTypeEnum;
    type?: IdentifierForEnum;
    buyer_name?: string;
    buyer_email?: string;
    buyer_tel?: string;
    tax_free?: number;
    pg?: string;
}
declare class External extends RequestBase {
    constructor();
    static postReceipt(data: postExternalData): External;
    static getReceipt({ merchant_uid }: MerchantUidParams): External;
    static deleteReceipt({ merchant_uid }: MerchantUidParams): External;
}
export default External;
