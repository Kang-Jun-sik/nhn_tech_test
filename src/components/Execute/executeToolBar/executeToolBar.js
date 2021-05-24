import "./executeToolBar.css"
import createService from "../../../utils/createService";

export default class ExecuteToolBar {
    uid = '';

    /**
     *
     */
    constructor() {
        this.uid = createService.createUid('executeToolBar');
        this.$el = document.createElement('div');
        this.$el.classList.add('exercise-execute-toolbar');
    }
}
