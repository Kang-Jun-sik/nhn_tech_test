import "./executeItemsWrapper.css"
import createService from "../../../utils/createService";

export default class ExecuteItemsWrapper {
    uid = '';

    /**
     *
     */
    constructor() {
        this.uid = createService.createUid('executeItemsWrapper');
        this.$el = document.createElement('div');
        this.$el.classList.add('execute-items-wrapper');
    }

    getExecuteItemsArea() {
        return this.$el;
    }

    clearExecuteItems() {
        this.$el.querySelectorAll('.exercise-item').forEach(n => n.remove());
    }
}
