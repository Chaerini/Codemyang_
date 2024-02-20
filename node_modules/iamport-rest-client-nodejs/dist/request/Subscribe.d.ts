import RequestBase from './Base';
import { ScheduledStatusEnum } from '../enum';
import { MerchantUidParams } from '../Interfaces';
interface ScheduleInfo {
    merchant_uid: string;
    schedule_at: number;
    amount: number;
    currency?: string;
    tax_free?: number;
    name?: string;
    buyer_name?: string;
    buyer_email?: string;
    buyer_tel?: string;
    buyer_addr?: string;
    buyer_postcode?: string;
    custom_data?: string;
    notice_url?: string;
    extra?: {
        [key: string]: any;
    } | any[];
}
interface onetimeData {
    merchant_uid: string;
    currency?: string;
    amount: number;
    tax_free?: number;
    card_number: string;
    expiry: string;
    birth: string;
    pwd_2digit?: string;
    cvc?: string;
    customer_uid?: string;
    pg?: string;
    name: string;
    buyer_name?: string;
    buyer_email?: string;
    buyer_tel?: string;
    buyer_addr?: string;
    buyer_postcode?: string;
    interest_free_by_merchant?: boolean;
    card_quota?: number;
    custom_data?: string;
    notice_url?: string;
    secure_3d_charge_id?: string;
    secure_3d_token?: string;
}
interface againData {
    customer_uid: string;
    merchant_uid: string;
    currency?: string;
    amount: number;
    tax_free?: number;
    name: string;
    buyer_name?: string;
    buyer_email?: string;
    buyer_tel?: string;
    buyer_addr?: string;
    buyer_postcode?: string;
    interest_free_by_merchant?: boolean;
    use_card_point?: boolean;
    card_quota?: number;
    custom_data?: string;
    notice_url?: string;
}
interface ScheduleData {
    customer_uid: string;
    checking_amount?: number;
    card_number?: string;
    expiry?: string;
    birth?: string;
    pwd_2digit?: string;
    cvc?: string;
    pg?: string;
    schedules: ScheduleInfo[];
}
interface UnscheduleData {
    customer_uid: string;
    merchant_uid?: string;
}
interface getScheduledParams {
    customer_uid: string;
    page?: number;
    from: number;
    to: number;
    'schedule-status': ScheduledStatusEnum;
}
declare class Subscribe extends RequestBase {
    constructor();
    static onetime(data: onetimeData): Subscribe;
    static again(data: againData): Subscribe;
    static schedule(data: ScheduleData): Subscribe;
    static unschedule(data: UnscheduleData): Subscribe;
    static getScheduled({ merchant_uid }: MerchantUidParams): Subscribe;
    static getScheduleds(params: getScheduledParams): Subscribe;
}
export default Subscribe;
