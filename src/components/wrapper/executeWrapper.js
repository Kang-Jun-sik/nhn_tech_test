import "../../utils/createService"
import createService from "../../utils/createService";
import ExecuteToolBar from "../Execute/executeToolBar/executeToolBar";
import ExecuteButtons from "../Execute/executeButtons/executeButtons";
import ExecuteItemsWrapper from "../Execute/executeItemsWrapper/executeItemsWrapper";
import timeformatter from "../../utils/timeformatter";
import Header from "../header/header";

export default class ExecuteWrapper {
    headerUid = '';
    header = '';
    uid = '';
    intervalID = '';
    pageWrapperUid = '';
    routineWrapperUid = ''
    exerciseWrapperUid = '';
    executeButtonsUid = '';
    exerciseExecuteToolBoarUid = '';
    executeItemsWrapperUid = '';
    totalTime = 0;
    executingTime = 0;
    currentPoint = 0;
    currentExercise = [];

    /**
     *
     */
    constructor() {
        this.uid = createService.createUid('execute-wrapper');
        this.$el = document.createElement('div');
        this.$el.classList.add('execute-wrapper');

        this.exerciseExecuteToolBar = new ExecuteToolBar();
        this.exerciseExecuteToolBar.render();
        this.$el.appendChild(this.exerciseExecuteToolBar.$el);
        window.instanceMap.set(this.exerciseExecuteToolBar.uid, this.exerciseExecuteToolBar);

        this.executeItemsWrapper = new ExecuteItemsWrapper();
        this.$el.appendChild(this.executeItemsWrapper.$el);
        window.instanceMap.set(this.executeItemsWrapper.uid, this.executeItemsWrapper);

        this.exerciseExecuteButtons = new ExecuteButtons();
        this.exerciseExecuteButtons.render();
        this.exerciseExecuteButtons.hideCompleteBtn();
        this.$el.appendChild(this.exerciseExecuteButtons.$el);
        window.instanceMap.set(this.exerciseExecuteButtons.uid, this.exerciseExecuteButtons);

        this.exerciseExecuteToolBar.executeWrapperUid = this.uid;
        this.exerciseExecuteButtons.executeWrapperUid = this.uid;
        this.executeButtonsUid = this.exerciseExecuteButtons.uid;
        this.executeItemsWrapperUid = this.executeItemsWrapper.uid;
        this.exerciseExecuteToolBoarUid = this.exerciseExecuteToolBar.uid;
    }

    render() {

    }

    hide() {
        this.$el.style.display = 'none';
        clearInterval(0);
    }

    show() {
        this.$el.style.display = 'block';
        clearInterval(0);
    }

    start() {
        this.header = window.instanceMap.get(this.headerUid);
        this.setCount();
    }

    setCount() {
        const exerciseWrapper = window.instanceMap.get(this.exerciseWrapperUid);
        const exerciseTime = window.instanceMap.get(exerciseWrapper.exerciseTimeUid);
        this.currentPoint = 0;
        this.totalTime = exerciseTime.getTime();
        this.executingTime = exerciseTime.getTime();
        this.currentExercise = document.querySelectorAll('.execute-item');
        this.currentExercise[this.currentPoint].classList.add('executing');
        clearInterval(0);
        this.intervalID = setInterval(this.timer.bind(this), 1000);
    }

    pause() {
        clearInterval(this.intervalID);
        clearInterval(0);
    }

    stop() {
        const page = window.instanceMap.get(this.pageWrapperUid);
        clearInterval(this.intervalID);
        clearInterval(0);
        this.hide();
        this.header.setHeaderText("매일 운동 루틴");
        this.header.render();
        page.show();
    }

    restart() {
        clearInterval(this.intervalID);
        this.intervalID = setInterval(this.timer.bind(this), 1000);
    }

    timer() {
        this.executingTime--;
        if (this.executingTime == 0) {
            const executeButtons = window.instanceMap.get(this.executeButtonsUid);
            this.timeUpdate();
            this.currentExercise[this.currentPoint].classList.remove('executing');
            this.currentExercise[this.currentPoint].classList.add('done');
            executeButtons.showCompleteBtn();
            clearInterval(this.intervalID);
            clearInterval(0);
            return;
        }
        if (parseInt(this.currentExercise[this.currentPoint].getAttribute('completiontime')) == this.executingTime) {
            this.header.render();
            this.currentExercise[this.currentPoint].classList.remove('executing');
            this.currentExercise[this.currentPoint].classList.add('done');
            this.currentExercise[++this.currentPoint].classList.add('executing');
        }
        this.timeUpdate();
    }

    timeUpdate() {
        document.querySelector(".time-zone").innerHTML =
            `${timeformatter(this.executingTime)} / ${timeformatter(this.totalTime)}`;
    }


}
