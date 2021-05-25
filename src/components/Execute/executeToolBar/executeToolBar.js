import "./executeToolBar.css"
import createService from "../../../utils/createService";

export default class ExecuteToolBar {
    uid = '';
    executeWrapperUid;

    /**
     * ExecuteToolBar - 운동 수행 아이템들의 실시간 진행 상황 표시 컴포넌트
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
