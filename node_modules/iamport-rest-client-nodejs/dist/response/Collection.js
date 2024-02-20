"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
class Collection {
    constructor(data, responseClass) {
        const { code, message, response } = data;
        this.code = code;
        this.message = message;
        const { total, previous, next, list } = response;
        this.response = {
            total,
            previous,
            next,
            list: list.map((eachList) => {
                responseClass.setAttributes(eachList);
                const attributes = responseClass.getAttributes();
                return lodash_1.default.assign({}, attributes);
            }),
        };
    }
}
exports.default = Collection;
//# sourceMappingURL=Collection.js.map