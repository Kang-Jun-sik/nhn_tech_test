import './executeButtons.css'
import createService from "../../../utils/createService";

export default class ExecuteButtons {
    uid = '';
    executeWrapperUid = '';

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
        this.eventHandler();
    }

    eventHandler() {
        const pauseBtn = this.$el.querySelector('.execute-pause-btn');
        const restartBtn = this.$el.querySelector('.execute-restart-btn');
        const stopBtn = this.$el.querySelector('.exercise-stop-btn');
        const completeBtn = this.$el.querySelector('.exercise-complete-btn');

        pauseBtn.addEventListener('click', this.pauseBtnExecute.bind(this))
        restartBtn.addEventListener('click', this.restartBtnExecute.bind(this));
        stopBtn.addEventListener('click', this.stopBtnExecute.bind(this));
        completeBtn.addEventListener('click', this.completeBtnExecute.bind(this));
    }

    showCompleteBtn() {
        let completed = this.$el.querySelector('.exercise-complete-btn');
        completed.style.display = 'inline-block';
    }

    hideCompleteBtn() {
        let completed = this.$el.querySelector('.exercise-complete-btn');
        completed.style.display = 'none';
    }

    pauseBtnExecute(e) {
        const executeWrapper = window.instanceMap.get(this.executeWrapperUid);
        executeWrapper.pause();
    }

    restartBtnExecute(e) {
        const executeWrapper = window.instanceMap.get(this.executeWrapperUid);
        executeWrapper.restart();
    }

    stopBtnExecute(e) {
        const executeWrapper = window.instanceMap.get(this.executeWrapperUid);
        executeWrapper.stop();
        document.querySelector('.time-zone').innerText = '';
        document.querySelectorAll('.execute-item').forEach(n => n.remove());
    }

    completeBtnExecute(e) {
        const executeWrapper = window.instanceMap.get(this.executeWrapperUid);
        executeWrapper.stop();
        document.querySelector('.time-zone').innerText = '';
        document.querySelectorAll('.execute-item').forEach(n => n.remove());
    }
}
