import RequestBase from './Base';
import { StatusEnum, SortingEnum } from '../enum';
import { ImpUidParams, Headers } from '../Interfaces';
interface ImpUidsParams {
    imp_uid: string[];
}
interface MerchantUidsParams {
    merchant_uid: string;
    status: StatusEnum;
    sorting: SortingEnum;
    page: number;
}
interface StatusParams {
    status: StatusEnum;
    page: number;
    limit: number;
    from: number;
    to: number;
    sorting: SortingEnum;
}
interface MerchantUidParams {
    merchant_uid: string;
    status: StatusEnum;
    sorting: SortingEnum;
}
interface CancelData {
    imp_uid: string;
    merchant_uid: string;
    amount: number;
    tax_free: number;
    checksum: number;
    reason: string;
    refund_holder: string;
    refund_bank: string;
    refund_account: string;
}
declare class Payments extends RequestBase {
    constructor();
    static getByImpUids(params: ImpUidsParams): Payments;
    static getByMerchantUids(params: MerchantUidsParams): Payments;
    static getByStatus(params: StatusParams): Payments;
    static getByImpUid({ imp_uid }: ImpUidParams, headers?: Headers): Payments;
    static getByMerchantUid(params: MerchantUidParams): Payments;
    static getAmountByImpUid({ imp_uid }: ImpUidParams): Payments;
    static cancel(data: CancelData): Payments;
    getFailedData(response: any): Promise<any>;
}
export default Payments;
