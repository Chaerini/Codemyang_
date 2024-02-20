import ResponseBase from './Base';
declare class Escrow extends ResponseBase {
    company: string;
    invoice: string;
    sent_at: number | Date;
    applied_at: number | Date;
    setAttributes(response: Escrow): void;
}
export default Escrow;
