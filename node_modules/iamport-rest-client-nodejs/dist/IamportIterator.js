"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
class IamportIterator {
    constructor(request) {
        this.request = request;
    }
    hasNext() {
        return !this.request.isLast;
    }
    next(iamport) {
        const { params } = this.request;
        const { page } = params;
        const newPage = page + 1;
        this.request.params = lodash_1.default.assign(params, { page: newPage });
        return this.request.request(iamport);
    }
}
exports.default = IamportIterator;
//# sourceMappingURL=IamportIterator.js.map