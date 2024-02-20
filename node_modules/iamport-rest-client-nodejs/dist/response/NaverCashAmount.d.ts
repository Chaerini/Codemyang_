import ResponseBase from './Base';
declare class NaverCashAmount extends ResponseBase {
    amount_total: number;
    amount_by_npoint: number;
    amount_by_primary: number;
    amount_supply: number;
    amount_vat: number;
    setAttributes(response: NaverCashAmount): void;
}
export default NaverCashAmount;
