"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
class NaverReview extends Base_1.default {
    setAttributes(response) {
        const { review_id, score, title, content, product_order_id, product_id, product_name, product_option_name, writer, created_at, modified_at, } = response;
        this.review_id = review_id;
        this.score = score;
        this.title = title;
        this.content = content;
        this.product_order_id = product_order_id;
        this.product_id = product_id;
        this.product_name = product_name;
        this.product_option_name = product_option_name;
        this.writer = writer;
        this.created_at = this.timeToDate(created_at);
        this.modified_at = this.timeToDate(modified_at);
    }
}
exports.default = NaverReview;
//# sourceMappingURL=NaverReview.js.map