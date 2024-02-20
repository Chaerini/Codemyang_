"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
;
;
class NaverProductOrder extends Base_1.default {
    setAttributes(response) {
        const { product_order_id, product_order_status, claim_type, claim_status, product_id, product_name, product_option_id, product_option_name, product_amount, delivery_amount, quantity, orderer, shipping_address, shipping_memo, shipping_due, individual_code, } = response;
        this.product_order_id = product_order_id;
        this.product_order_status = product_order_status;
        this.claim_type = claim_type;
        this.claim_status = claim_status;
        this.product_id = product_id;
        this.product_name = product_name;
        this.product_option_id = product_option_id;
        this.product_option_name = product_option_name;
        this.product_amount = product_amount;
        this.delivery_amount = delivery_amount;
        this.quantity = quantity;
        this.orderer = orderer;
        this.shipping_address = shipping_address;
        this.shipping_memo = shipping_memo;
        this.shipping_due = this.timeToDate(shipping_due);
        this.individual_code = individual_code;
    }
}
exports.default = NaverProductOrder;
//# sourceMappingURL=NaverProductOrder.js.map