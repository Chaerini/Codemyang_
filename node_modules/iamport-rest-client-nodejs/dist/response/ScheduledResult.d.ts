import ResponseBase from './Base';
import { ScheduledStatusEnum } from '../enum';
declare class ScheduledResult extends ResponseBase {
    customer_uid?: string;
    merchant_uid?: string;
    imp_uid?: string;
    schedule_at?: Date | number;
    executed_at?: Date | number;
    revoked_at?: Date | number;
    amount?: number;
    name?: string;
    buyer_name?: string;
    buyer_email?: string;
    buyer_tel?: string;
    buyer_addr?: string;
    buyer_postcode?: string;
    custom_data?: string;
    schedule_status?: ScheduledStatusEnum;
    payment_status?: 'paid' | 'failed' | 'cancelled';
    fail_reason?: string;
    setAttributes(response: ScheduledResult): void;
}
export default ScheduledResult;
