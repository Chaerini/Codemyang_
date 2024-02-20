"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
class List {
    constructor(data, responseClass) {
        const { code, message, response } = data;
        this.code = code;
        this.message = message;
        this.response = response.map((eachResponse) => {
            responseClass.setAttributes(eachResponse);
            const attributes = responseClass.getAttributes();
            return lodash_1.default.assign({}, attributes);
        });
    }
}
exports.default = List;
//# sourceMappingURL=List.js.map