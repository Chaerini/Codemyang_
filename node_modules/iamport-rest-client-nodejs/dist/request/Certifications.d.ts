import RequestBase from './Base';
import { ImpUidParams } from '../Interfaces';
declare class Certifications extends RequestBase {
    constructor();
    static getCertification({ imp_uid }: ImpUidParams): Certifications;
    static deleteCertification({ imp_uid }: ImpUidParams): Certifications;
}
export default Certifications;
