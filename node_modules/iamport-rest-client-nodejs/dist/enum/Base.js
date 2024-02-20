"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sorting_1 = __importDefault(require("./Sorting"));
const Status_1 = __importDefault(require("./Status"));
const DeliveryMethod_1 = __importDefault(require("./DeliveryMethod"));
const DeliveryCompany_1 = __importDefault(require("./DeliveryCompany"));
const ReturnReason_1 = __importDefault(require("./ReturnReason"));
const CancelReason_1 = __importDefault(require("./CancelReason"));
const SettleVbankCode_1 = __importDefault(require("./SettleVbankCode"));
const BankCode_1 = __importDefault(require("./BankCode"));
const LogisCode_1 = __importDefault(require("./LogisCode"));
const CardCode_1 = __importDefault(require("./CardCode"));
const IdentifierType_1 = __importDefault(require("./IdentifierType"));
const IdentifierFor_1 = __importDefault(require("./IdentifierFor"));
const KakaoOrderStatus_1 = __importDefault(require("./KakaoOrderStatus"));
const PaycoOrderStatus_1 = __importDefault(require("./PaycoOrderStatus"));
const WithholdReturnReason_1 = __importDefault(require("./WithholdReturnReason"));
const ScheduledStatus_1 = __importDefault(require("./ScheduledStatus"));
class EnumBase {
    static getSortingValue(key) {
        return Sorting_1.default.getValue(key);
    }
    static getStatusValue(key) {
        return Status_1.default.getValue(key);
    }
    static getDeliveryMethodValue(key) {
        return DeliveryMethod_1.default.getValue(key);
    }
    static getDeliveryCompanyValue(key) {
        return DeliveryCompany_1.default.getValue(key);
    }
    static getReturnReasonValue(key) {
        return ReturnReason_1.default.getValue(key);
    }
    static getCancelReasonValue(key) {
        return CancelReason_1.default.getValue(key);
    }
    static getSettleVbankCodeValue(key) {
        return SettleVbankCode_1.default.getValue(key);
    }
    static getBankCodeValue(key) {
        return BankCode_1.default.getValue(key);
    }
    static getLogisCodeValue(key) {
        return LogisCode_1.default.getValue(key);
    }
    static getCardCodeValue(key) {
        return CardCode_1.default.getValue(key);
    }
    static getIdentifierTypeValue(key) {
        return IdentifierType_1.default.getValue(key);
    }
    static getIdentifierForValue(key) {
        return IdentifierFor_1.default.getValue(key);
    }
    static getKakaoOrderStatusValue(key) {
        return KakaoOrderStatus_1.default.getValue(key);
    }
    static getPaycoOrderStatusValue(key) {
        return PaycoOrderStatus_1.default.getValue(key);
    }
    static getWithholdReturnReasonValue(key) {
        return WithholdReturnReason_1.default.getValue(key);
    }
    static getScheduledStatusValue(key) {
        return ScheduledStatus_1.default.getValue(key);
    }
}
exports.default = EnumBase;
//# sourceMappingURL=Base.js.map