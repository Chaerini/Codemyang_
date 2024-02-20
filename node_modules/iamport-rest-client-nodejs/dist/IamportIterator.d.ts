import { Iamport } from './Iamport';
import RequestBase from './request/Base';
interface Iterator {
    hasNext(): boolean;
    next(iamport: Iamport): Promise<any>;
}
declare class IamportIterator implements Iterator {
    request: RequestBase;
    constructor(request: RequestBase);
    hasNext(): boolean;
    next(iamport: Iamport): Promise<any>;
}
export default IamportIterator;
