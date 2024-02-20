import RequestBase from './Base';
import { IdentifierTypeEnum, IdentifierForEnum } from '../enum';
import { ImpUidParams } from '../Interfaces';
interface postData {
    imp_uid: string;
    identifier: string;
    identifier_type?: IdentifierTypeEnum;
    type?: IdentifierForEnum;
    buyer_name?: string;
    buyer_email?: string;
    buyer_tel?: string;
    tax_free?: number;
}
declare class Receipts extends RequestBase {
    constructor();
    static postReceipt(data: postData): Receipts;
    static getReceipt({ imp_uid }: ImpUidParams): Receipts;
    static deleteReceipt({ imp_uid }: ImpUidParams): Receipts;
}
export default Receipts;
