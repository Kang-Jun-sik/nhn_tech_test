import "./pageWrapper.css"
import "../../utils/createService"
import createService from "../../utils/createService";
import ExecuteToolBar from "../Execute/executeToolBar/executeToolBar";
import ExecuteButtons from "../Execute/executeButtons/executeButtons";
import ExecuteItemsWrapper from "../Execute/executeItemsWrapper/executeItemsWrapper";
import timeformatter from "../../utils/timeformatter";

export default class ExecuteWrapper {
    uid = '';
    pageWrapperUid = '';
    routineWrapperUid = ''
    exerciseWrapperUid = '';
    exerciseExecuteToolBoarUid = '';
    executeItemsWrapperUid = '';
    totalTime = new Number();
    executingTime = new Number();
    currentPoint = new Number(0);
    currentExercise = [];
    setInterverId = '';

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
        this.$el.appendChild(this.exerciseExecuteButtons.$el);
        window.instanceMap.set(this.exerciseExecuteButtons.uid, this.exerciseExecuteButtons);

        this.exerciseExecuteToolBar.executeWrapperUid = this.uid;
        this.exerciseExecuteButtons.executeWrapperUid = this.uid;
        this.executeItemsWrapperUid = this.executeItemsWrapper.uid;
        this.exerciseExecuteToolBoarUid = this.exerciseExecuteToolBar.uid;
    }

    render() {

    }

    hide() {
        this.$el.style.display = 'none';
    }

    show() {
        this.$el.style.display = 'block';
    }

    start() {
        this.setCount();
    }

    setCount() {
        const exerciseWrapper = window.instanceMap.get(this.exerciseWrapperUid);
        const exerciseTime = window.instanceMap.get(exerciseWrapper.exerciseTimeUid);
        this.totalTime = exerciseTime.getTime();
        this.executingTime = exerciseTime.getTime();
        this.currentExercise = document.querySelectorAll('.execute-item');
        this.currentExercise[this.currentPoint].style.background = 'yellow';
        this.setInterverId = setInterval(this.timer.bind(this), 1000);
    }

    pause() {
        clearInterval(this.setInterverId);
    }

    stop() {
        const page = window.instanceMap.get(this.pageWrapperUid);
        clearInterval(0);
        this.hide();
        page.show();
    }

    restart() {
        this.setInterverId = setInterval(this.timer.bind(this), 1000);
    }

    timer() {
        this.executingTime--;
        if (this.executingTime == 0) {
            clearInterval(this.setInterverId);
            return;
        }
        if (parseInt(this.currentExercise[this.currentPoint].getAttribute('completiontime')) == this.executingTime) {
            this.currentExercise[this.currentPoint].style.background = 'grey';
            this.currentExercise[++this.currentPoint].style.background = 'yellow';
        }
        this.timeUpdate();

    }

    timeUpdate() {
        document.querySelector(".time-zone").innerHTML =
            `${timeformatter(this.executingTime)} / ${timeformatter(this.totalTime)}`;
    }
}
