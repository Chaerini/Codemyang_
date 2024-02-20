import ResponseBase from './Base';
interface NaverPayOrderer {
    name: string;
    id: string;
    tel: string;
}
interface NaverPayAddress {
    base: string;
    detail: string;
    postcode: string;
    tel1: string;
    tel2: string;
    name: string;
}
declare class NaverProductOrder extends ResponseBase {
    product_order_id: string;
    product_order_status: string;
    claim_type: string;
    claim_status: string;
    product_id: string;
    product_name: string;
    product_option_id: string;
    product_option_name: string;
    product_amount: number;
    delivery_amount: number;
    quantity: number;
    orderer: NaverPayOrderer;
    shipping_address: NaverPayAddress;
    shipping_memo: string;
    shipping_due: Date | number;
    individual_code: string;
    setAttributes(response: NaverProductOrder): void;
}
export default NaverProductOrder;
