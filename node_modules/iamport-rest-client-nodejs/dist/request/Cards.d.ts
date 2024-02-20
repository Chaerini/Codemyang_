import RequestBase from './Base';
import { CardCodeEnum } from '../enum';
interface getCardParams {
    code: CardCodeEnum;
}
declare class Cards extends RequestBase {
    constructor();
    static getCards(): Cards;
    static getCard({ code }: getCardParams): Cards;
}
export default Cards;
