import "./executeToolBar.css"
import createService from "../../../utils/createService";

export default class ExecuteToolBar {
    uid = '';
    executeWrapperUid;

    /**
     *
     */
    constructor() {
        this.uid = createService.createUid('executeToolBar');
        this.$el = document.createElement('div');
        this.$el.classList.add('exercise-execute-toolbar');
    }

    render() {
        this.$el.innerHTML = `
            <p class="time-zone"></p>
        `;
    }

    timeZone(){
        return this.$el.querySelector('p');
    }
}
