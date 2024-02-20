"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
class Auth extends Base_1.default {
    setAttributes(response) {
        const { access_token, expired_at, now, } = response;
        this.access_token = access_token;
        this.expired_at = this.timeToDate(expired_at);
        this.now = this.timeToDate(now);
    }
}
exports.default = Auth;
//# sourceMappingURL=Auth.js.map