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
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const response_1 = require("../response");
class RequestBase {
    constructor() {
        this.method = 'GET';
        this.headers = {};
        this.responseType = 'item';
        this.keepGoing = false; // 207에 대한 대응 여부
        this.isLast = false; // collection 유형의 응답일때, next가 0인지 여부
        this.isTokenNeeded = true; // 토큰 필요 여부
    }
    request(iamport) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = {
                url: this.url,
                method: this.method,
                params: this.params,
                data: this.data,
            };
            if (Object.keys(this.headers).length > 0) {
                config.headers = Object.assign({}, this.headers);
            }
            if (this.isTokenNeeded) {
                config.headers = Object.assign(Object.assign({}, config.headers), yield iamport.getHeaders());
            }
            return iamport.getApiInstance().request(config)
                .then((instanceResponse) => __awaiter(this, void 0, void 0, function* () {
                const { data } = instanceResponse;
                const { code } = data;
                if (code === 0) {
                    const response = yield this.getResponse(instanceResponse);
                    return Promise.resolve(response);
                }
                /**
                 * TODO
                 * axios 에러가 발생한 경우, typeof error = AxiosError
                 * axios는 성공했지만 code가 0이 아닌 경우, typeof error = IamportError
                 * 두 type을 맞추기 위해 아래와 같은 코드 작성
                 */
                return Promise.reject({
                    response: {
                        data,
                    },
                });
            }))
                .catch((error) => {
                return Promise.reject(error);
            });
        });
    }
    getResponse(instanceResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, status } = instanceResponse;
            const { response } = data;
            const responseData = this.getResponseData(data);
            if (status === 207 && this.keepGoing) {
                yield this.getFailedData(response)
                    .then((failedData) => responseData.failed = failedData)
                    .catch((error) => {
                    /**
                     * TODO: failedData 조회 실패시 로직
                     * API콜 전체에 대해 ERROR 처리 또는
                     * getFailedData에 대한 실패 메시지 전달
                     */
                    return Promise.reject(error);
                });
            }
            return lodash_1.default.assign(instanceResponse, { data: responseData });
        });
    }
    getResponseData(response) {
        switch (this.responseType) {
            case 'list': {
                return new response_1.List(response, this.responseClass);
            }
            case 'collection': {
                this.isLast = response.response.next === 0;
                return new response_1.Collection(response, this.responseClass);
            }
            default: {
                return new response_1.Item(response, this.responseClass);
            }
        }
    }
    getFailedData(response) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
}
exports.default = RequestBase;
//# sourceMappingURL=Base.js.map