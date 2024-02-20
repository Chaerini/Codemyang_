import RequestBase from './Base';
import { SettleVbankCodeEnum, BankCodeEnum } from '../enum';
import { ImpUidParams } from '../Interfaces';
interface PostData {
    merchant_uid: string;
    amount: number;
    vbank_code: SettleVbankCodeEnum;
    vbank_due: number;
    vbank_holder: string;
    name?: string;
    buyer_name?: string;
    buyer_email?: string;
    buyer_tel?: string;
    buyer_addr?: string;
    buyer_postcode?: string;
    pg?: string;
    notice_url?: string[];
    custom_data?: string;
}
interface PutData {
    imp_uid: string;
    amount?: number;
    vbank_due?: number;
}
interface getHolderParams {
    bank_code: BankCodeEnum;
    bank_num: string;
}
declare class Vbanks extends RequestBase {
    constructor();
    static post(data: PostData): Vbanks;
    static delete({ imp_uid }: ImpUidParams): Vbanks;
    static put(data: PutData): Vbanks;
    static getHolder(params: getHolderParams): Vbanks;
}
export default Vbanks;
