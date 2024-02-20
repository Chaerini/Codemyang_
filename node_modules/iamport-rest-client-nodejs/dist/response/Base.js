"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseBase {
    timeToDate(time) {
        return time === 0 ? 0 : new Date(time * 1000);
    }
    getAttributes() {
        return this;
    }
}
exports.default = ResponseBase;
//# sourceMappingURL=Base.js.map