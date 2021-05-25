import "./executeItemsWrapper.css"
import createService from "../../../utils/createService";


export default class ExecuteItemsWrapper {
    uid = '';

    /**
     * ExecuteItemsWrapper - 운동 수행 항목들이 추가되는 영역
     */
    constructor() {
        this.uid = createService.createUid('executeItemsWrapper');
        this.$el = document.createElement('div');
        this.$el.classList.add('execute-items-wrapper');
    }

    getExecuteItemsArea() {
        return this.$el;
    }
}
