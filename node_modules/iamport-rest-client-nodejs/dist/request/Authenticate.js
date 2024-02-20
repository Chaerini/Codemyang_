"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
const response_1 = require("../response");
;
/* 사용자 인증 */
class Authenticate extends Base_1.default {
    constructor() {
        super();
        this.isTokenNeeded = false;
        this.responseClass = new response_1.AuthResponse();
    }
    /* 토큰 발급 */
    static getToken(data) {
        const authenticate = new Authenticate();
        authenticate.url = '/users/getToken';
        authenticate.method = 'POST';
        authenticate.data = data;
        return authenticate;
    }
}
exports.default = Authenticate;
//# sourceMappingURL=Authenticate.js.map