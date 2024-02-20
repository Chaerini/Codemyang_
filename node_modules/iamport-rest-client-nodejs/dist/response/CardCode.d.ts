import ResponseBase from './Base';
import { CardCodeEnum } from '../enum';
declare class CardCode extends ResponseBase {
    code: CardCodeEnum;
    name: string;
    setAttributes(response: CardCode): void;
}
export default CardCode;
