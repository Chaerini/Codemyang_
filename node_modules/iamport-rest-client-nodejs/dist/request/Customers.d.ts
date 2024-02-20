import RequestBase from './Base';
import { ScheduledStatusEnum } from '../enum';
interface BillingKeysParams {
    customer_uid: string[];
}
interface PostBillingKeyData {
    customer_uid: string;
    pg?: string;
    card_number: string;
    expiry: string;
    birth: string;
    pwd_2digit?: string;
    customer_name: string;
    customer_tel: string;
    customer_email: string;
    customer_addr: string;
    customer_postcode: string;
}
interface CustomerUidParams {
    customer_uid: string;
}
interface GetPaymentsParams {
    customer_uid: string;
    page?: number;
}
interface GetScheduledsParams {
    customer_uid: string;
    page?: number;
    from: number;
    to: number;
    'schedule-status': ScheduledStatusEnum;
}
declare class Customers extends RequestBase {
    constructor();
    static getBillingKeys(params: BillingKeysParams): Customers;
    static postBillingKey(data: PostBillingKeyData): Customers;
    static getBillingKey({ customer_uid }: CustomerUidParams): Customers;
    static deleteBillingKey({ customer_uid }: CustomerUidParams): Customers;
    static getPayments(params: GetPaymentsParams): Customers;
    static getScheduleds(params: GetScheduledsParams): Customers;
}
export default Customers;
