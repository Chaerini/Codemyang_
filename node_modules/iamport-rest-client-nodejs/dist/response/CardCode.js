"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
class CardCode extends Base_1.default {
    setAttributes(response) {
        const { code, name } = response;
        this.code = code;
        this.name = name;
    }
}
exports.default = CardCode;
//# sourceMappingURL=CardCode.js.map