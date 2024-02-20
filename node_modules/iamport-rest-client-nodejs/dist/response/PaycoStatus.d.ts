import ResponseBase from './Base';
import { PaycoOrderStatusEnum } from '../enum';
declare class PaycoStatus extends ResponseBase {
    status: PaycoOrderStatusEnum;
    setAttributes(response: PaycoStatus): void;
}
export default PaycoStatus;
