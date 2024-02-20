"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SortingEnum;
(function (SortingEnum) {
    SortingEnum["STARTED_ASC"] = "started";
    SortingEnum["STARTED_DESC"] = "-started";
    SortingEnum["PAID_ASC"] = "paid";
    SortingEnum["PAID_DESC"] = "-paid";
    SortingEnum["UPDATED"] = "updated";
    SortingEnum["UPDATED_DESC"] = "-updated";
})(SortingEnum = exports.SortingEnum || (exports.SortingEnum = {}));
;
class Sorting {
    getValue(key) {
        if (key) {
            switch (key) {
                case 'started':
                    return '결제시작시각(결제창오픈시각) 기준 오름차순(ASC) 정렬';
                case '-started':
                    return '결제시작시각(결제창오픈시각) 기준 내림차순(DESC) 정렬';
                case 'paid':
                    return '결제완료시각 기준 오름차순(ASC) 정렬';
                case '-paid':
                    return '결제완료시각 기준 내림차순(DESC) 정렬';
                case 'updated':
                    return '최종수정시각(결제건 상태변화마다 수정시각 변경됨) 기준오름차순(ASC) 정렬';
                case '-updated':
                    return '최종수정시각(결제건 상태변화마다 수정시각 변경됨) 기준내림차순(DESC) 정렬';
                default:
                    throw new Error(`정의되지 않은 key값(${key}) 입니다.`);
            }
        }
        throw new Error('key값을 입력해주세요.');
    }
}
exports.default = new Sorting();
//# sourceMappingURL=Sorting.js.map