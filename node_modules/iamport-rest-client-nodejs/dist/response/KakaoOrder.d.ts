import ResponseBase from './Base';
import { KakaoOrderStatusEnum } from '../enum';
interface KakaoOrderPage {
    current_page: number;
    current_size: number;
    first: boolean;
    last: boolean;
    total_pages: number;
    total_size: number;
}
interface KakaoOrderAmount {
    total: number;
    tax_free: number;
    vat: number;
    discount: number;
}
interface KakaoOrderCardInfo {
    card_bin: string;
    install_month: number;
    card_corp_name: string;
    interest_free_install: 'Y' | 'N';
}
interface KakaoOrderPaymentActionDetail {
    aid: string;
    approved_at: string;
    amount: number;
    point_amount: number;
    discount_amount: number;
    payment_action_type: 'PAYMENT' | 'CANCEL' | 'ISSUED_SID';
    payload: string;
}
interface KakaoOrderDetail {
    id: string;
    cid: string;
    status: KakaoOrderStatusEnum;
    partner_order_id: string;
    partner_user_id: string;
    payment_method_type: 'CARD' | 'MONEY';
    item_name: string;
    item_code: string;
    quantity: number;
    amount: KakaoOrderAmount;
    cancel_available_amount: KakaoOrderAmount;
    canceled_amount: KakaoOrderAmount;
    created_at: Date;
    approved_at: Date;
    canceled_at: Date;
    selected_card_info: KakaoOrderCardInfo;
    payment_action_details: KakaoOrderPaymentActionDetail[];
}
declare class KakaoOrder extends ResponseBase {
    page: KakaoOrderPage;
    payment_request_date: string;
    cid: string;
    orders: KakaoOrderDetail[];
    setAttributes(response: KakaoOrder): void;
}
export default KakaoOrder;
