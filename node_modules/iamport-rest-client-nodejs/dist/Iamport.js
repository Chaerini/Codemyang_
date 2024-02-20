"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const lodash_1 = __importDefault(require("lodash"));
const qs_1 = __importDefault(require("qs"));
const Request = __importStar(require("./request"));
exports.Request = Request;
const Response = __importStar(require("./response"));
exports.Response = Response;
const Enum = __importStar(require("./enum"));
exports.Enum = Enum;
const constants_1 = require("./constants");
;
;
;
class Iamport {
    constructor(properties) {
        const { apiKey, apiSecret, baseUrl } = properties;
        this.baseUrl = baseUrl || constants_1.BASE_URL;
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.apiInstance = axios_1.default.create({
            baseURL: this.baseUrl,
            paramsSerializer: (params) => qs_1.default.stringify(params, { arrayFormat: 'brackets' }),
        });
    }
    getApiInstance() {
        return this.apiInstance;
    }
    getHeaders() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isTokenValid()) {
                yield this.getToken()
                    .then(({ data }) => {
                    const { response } = data;
                    this.token = lodash_1.default.assign({}, response);
                })
                    .catch((error) => Promise.reject(error));
            }
            const { access_token } = this.token;
            return {
                Authorization: `Bearer ${access_token}`,
                'User-Agent': constants_1.USER_AGENT,
            };
        });
    }
    getToken() {
        const data = {
            imp_key: this.apiKey,
            imp_secret: this.apiSecret,
        };
        return axios_1.default.post(`${this.baseUrl}/users/getToken`, data);
    }
    isTokenValid() {
        if (this.token && this.token.access_token) {
            const { expired_at } = this.token;
            // 토큰의 유효시각 > 가맹점 웹서버 시각 + 아임포트 서버와의 시차 고려한 버퍼 값(30초) 
            return expired_at * 1000 > new Date().getTime() + constants_1.EXPIRE_BUFFER;
        }
        return false;
    }
}
exports.Iamport = Iamport;
//# sourceMappingURL=Iamport.js.map