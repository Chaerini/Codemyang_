import RequestBase from './Base';
import { DeliveryMethodEnum, ReturnReasonEnum, DeliveryCompanyEnum, CancelReasonEnum, WithholdReturnReasonEnum } from '../enum';
import { ImpUidParams } from '../Interfaces';
interface CancelParams {
    imp_uid: string;
    product_order_id?: string[];
    reason?: CancelReasonEnum;
}
interface PlaceData {
    imp_uid: string;
    product_order_id?: string[];
}
interface ShipData {
    imp_uid: string;
    product_order_id?: string[];
    delivery_method: DeliveryMethodEnum;
    dispatched_at: number;
    delivery_company?: DeliveryCompanyEnum;
    tracking_number?: string;
}
interface RequestReturnData {
    imp_uid: string;
    product_order_id?: string[];
    reason?: ReturnReasonEnum;
    delivery_method: DeliveryMethodEnum;
    delivery_company?: DeliveryCompanyEnum;
    tracking_number?: string;
}
interface WithholdReturnData {
    imp_uid: string;
    product_order_id?: string[];
    reason?: WithholdReturnReasonEnum;
    memo: string;
    extra_charge: number;
}
interface RejectReturnData {
    imp_uid: string;
    product_order_id?: string[];
    memo: string;
}
interface ApproveReturnData {
    imp_uid: string;
    product_order_id?: string[];
    memo: string;
    extra_charge: number;
}
interface OrderDetailParams {
    product_order_id: string;
}
interface ReviewParams {
    from: number;
    to: number;
    review_type: 'general' | 'premium';
}
declare class NaverCo extends RequestBase {
    constructor();
    static place(data: PlaceData): NaverCo;
    static ship(data: ShipData): NaverCo;
    static shipExchanged(data: ShipData): NaverCo;
    static requestReturn(data: RequestReturnData): NaverCo;
    static withholdReturn(data: WithholdReturnData): NaverCo;
    static resolveReturn(data: PlaceData): NaverCo;
    static rejectReturn(data: RejectReturnData): NaverCo;
    static approveReturn(data: ApproveReturnData): NaverCo;
    static cancel(params: CancelParams): NaverCo;
    static getProductOrderIds({ imp_uid }: ImpUidParams): NaverCo;
    static getOrderDetail({ product_order_id }: OrderDetailParams): NaverCo;
    static getReviews(params: ReviewParams): NaverCo;
    /**
     * 액션에 실패한 네이버페이 주문번호를 리턴
     */
    getFailedData(response: any): Promise<any>;
    /**
     * 요청에 네이버페이 주문번호가 있는 경우엔 리턴
     * 없는 경우엔 아임포트 번호에 대한 네이버페이 주문번호를 조회 결과를 리턴
     */
    private getProductOrderId;
}
export default NaverCo;
