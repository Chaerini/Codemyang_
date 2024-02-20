import ResponseBase from './Base';
declare class NaverReview extends ResponseBase {
    review_id: string;
    score: string;
    title: string;
    content?: string;
    product_order_id: string;
    product_id: string;
    product_name: string;
    product_option_name?: string;
    writer: string;
    created_at: Date | number;
    modified_at?: Date | number;
    setAttributes(response: NaverReview): void;
}
export default NaverReview;
