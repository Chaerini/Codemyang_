"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(data, responseClass) {
        const { code, message, response } = data;
        this.code = code;
        this.message = message;
        responseClass.setAttributes(response);
        this.response = responseClass.getAttributes();
    }
}
exports.default = Item;
//# sourceMappingURL=Item.js.map