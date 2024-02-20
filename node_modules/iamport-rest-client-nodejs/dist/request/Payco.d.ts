import RequestBase from './Base';
import { PaycoOrderStatusEnum } from '../enum';
interface postOrderStatusData {
    imp_uid: string;
    status: PaycoOrderStatusEnum;
}
declare class Payco extends RequestBase {
    constructor();
    static postOrderStatus(data: postOrderStatusData): Payco;
}
export default Payco;
