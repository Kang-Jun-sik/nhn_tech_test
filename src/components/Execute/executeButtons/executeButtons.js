import './executeButtons.css'
import createService from "../../../utils/createService";

export default class ExecuteButtons {
    uid = '';
    exerciseWrapperUid = '';

    /**
     *
     */
    constructor() {
        this.uid = createService.createUid('ExecuteButtons');
        this.$el = document.createElement('div');
        this.$el.classList.add('exercise-execute-buttons');
    }

    render() {
        this.$el.innerHTML = `
            <button class="execute-btn execute-pause-btn">일시정지</button>
            <button class='execute-btn execute-restart-btn'>재시작</button>
            <button class='execute-btn exercise-stop-btn'>운동 멈추기</button>
            <button class='execute-btn exercise-complete-btn'>완료</button>
        `;
    }
}
