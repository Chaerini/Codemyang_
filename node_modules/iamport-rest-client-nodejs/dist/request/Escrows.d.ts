import RequestBase from './Base';
import { LogisCodeEnum } from '../enum';
interface SenderAndReceiver {
    name: string;
    tel: string;
    addr: string;
    postcode: string;
}
interface Logis {
    company: LogisCodeEnum;
    invoice: string;
    sent_at: number;
}
interface Data {
    imp_uid: string;
    sender?: SenderAndReceiver;
    receiver?: SenderAndReceiver;
    logis: Logis;
}
declare class Escrows extends RequestBase {
    constructor();
    static postEscrow(data: Data): Escrows;
    static putEscrow(data: Data): Escrows;
}
export default Escrows;
