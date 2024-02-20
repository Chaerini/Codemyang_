"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./Base"));
const response_1 = require("../response");
;
/* 금융결제원 표준 코드 기준 카드사 정보 조회 */
class Cards extends Base_1.default {
    constructor() {
        super();
        this.responseClass = new response_1.CardCodeResponse();
    }
    /* 모든 카드사 정보 조회 */
    static getCards() {
        const cards = new Cards();
        cards.url = '/cards';
        cards.responseType = 'list';
        return cards;
    }
    /* 특정 카드사 정보 조회 */
    static getCard({ code }) {
        const cards = new Cards();
        cards.url = `/cards/${code}`;
        return cards;
    }
}
exports.default = Cards;
//# sourceMappingURL=Cards.js.map