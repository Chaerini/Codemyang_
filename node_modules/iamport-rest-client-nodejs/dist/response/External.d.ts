import ResponseBase from './Base';
declare class External extends ResponseBase {
    merchant_uid: string;
    receipt_tid: string;
    apply_num: string;
    type: string;
    amount: number;
    vat: number;
    receipt_url?: string;
    applied_at: Date | number;
    cancelled_at?: Date | number;
    setAttributes(response: External): void;
}
export default External;
