import ResponseBase from './Base';
declare class Receipt extends ResponseBase {
    imp_uid: string;
    receipt_tid: string;
    apply_num: string;
    type: string;
    amount: number;
    vat: number;
    receipt_url?: string;
    applied_at: Date | number;
    cancelled_at?: Date | number;
    setAttributes(response: Receipt): void;
}
export default Receipt;
