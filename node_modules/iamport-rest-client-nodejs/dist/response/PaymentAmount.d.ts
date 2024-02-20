import ResponseBase from './Base';
interface Amount {
    tax_free: number;
    supply: number;
    vat: number;
    service: number;
}
interface AmountBase {
    cash_receipt: Amount;
    primary: Amount;
    secondary: Amount;
    discount: Amount;
    created?: Date | number;
}
declare class PaymentAmount extends ResponseBase {
    amount: number;
    cash_receipt: Amount;
    primary: Amount;
    secondary: Amount;
    discount: Amount;
    histories?: AmountBase[];
    setAttributes(response: PaymentAmount): void;
}
export default PaymentAmount;
