"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
const response_1 = require("../response");
/* 휴대폰 본인인증 */
class Certifications extends Base_1.default {
    constructor() {
        super();
        this.responseClass = new response_1.CertificationResponse();
    }
    /* 휴대폰 본인인증 정보 조회 */
    static getCertification({ imp_uid }) {
        const certifications = new Certifications();
        certifications.url = `/certifications/${imp_uid}`;
        return certifications;
    }
    /* 휴대폰 본인인증 정보 삭제 */
    static deleteCertification({ imp_uid }) {
        const certifications = new Certifications();
        certifications.url = `/certifications/${imp_uid}`;
        certifications.method = 'DELETE';
        return certifications;
    }
}
exports.default = Certifications;
//# sourceMappingURL=Certifications.js.map