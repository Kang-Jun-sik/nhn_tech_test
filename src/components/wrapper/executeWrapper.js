import "../../utils/createService"
import createService from "../../utils/createService";
import ExecuteToolBar from "../Execute/executeToolBar/executeToolBar";
import ExecuteButtons from "../Execute/executeButtons/executeButtons";
import ExecuteItemsWrapper from "../Execute/executeItemsWrapper/executeItemsWrapper";
import timeformatter from "../../utils/timeformatter";

export default class ExecuteWrapper {
    uid = '';
    intervalID = '';
    pageWrapperUid = '';
    routineWrapperUid = ''
    exerciseWrapperUid = '';
    executeButtonsUid = '';
    exerciseText = '';
    exerciseExecuteToolBoarUid = '';
    executeItemsWrapperUid = '';
    totalTime = 0;
    executingTime = 0;
    currentPoint = 0;
    currentExercise = [];
    exerciseSecond = 0;

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
        this.routine = this.currentExercise[this.currentPoint].getAttribute('routine');
        this.executeSecond = this.currentExercise[this.currentPoint].getAttribute('executeSecond');
        this.executeSet = this.currentExercise[this.currentPoint].getAttribute('executeSet');
        this.executeText = this.currentExercise[this.currentPoint].getAttribute('executeText');
        this.completionTime = this.currentExercise[this.currentPoint].getAttribute('completionTime');
        this.remainSecond = this.executeSecond;
        this.initExecute = 1;
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
        page.show();
    }

    restart() {
        clearInterval(this.intervalID);
        this.intervalID = setInterval(this.timer.bind(this), 1000);
    }

    timer() {
        this.executingTime--;
        this.remainSecond--;

        if (this.executingTime == 0) {
            const executeButtons = window.instanceMap.get(this.executeButtonsUid);
            this.timeUpdate();
            this.headerCompleteUpdate();
            this.currentExercise[this.currentPoint].classList.remove('executing');
            this.currentExercise[this.currentPoint].classList.add('done');
            executeButtons.showCompleteBtn();
            clearInterval(this.intervalID);
            clearInterval(0);
            return;
        }

        if (this.remainSecond == 0) {
            if (this.executeSet > this.initExecute) {
                this.initExecute++;
                this.remainSecond = this.executeSecond;
            }
        }

        if (this.completionTime == this.executingTime) {
            this.currentExercise[this.currentPoint].classList.remove('executing');
            this.currentExercise[this.currentPoint].classList.add('done');
            this.currentExercise[++this.currentPoint].classList.add('executing');
            this.executeSecond = this.currentExercise[this.currentPoint].getAttribute('executeSecond');
            this.executeSet = this.currentExercise[this.currentPoint].getAttribute('executeSet');
            this.executeText = this.currentExercise[this.currentPoint].getAttribute('executeText');
            this.completionTime = this.currentExercise[this.currentPoint].getAttribute('completionTime');
            this.remainSecond = this.executeSecond;
            this.initExecute = 1;
        }
        this.timeUpdate();
        this.headerUpdate();
    }

    timeUpdate() {
        document.querySelector(".time-zone").innerHTML =
            `${timeformatter(this.executingTime)} / ${timeformatter(this.totalTime)}`;
    }

    headerUpdate() {
        document.querySelector(".header").innerHTML =
            `${this.routine} : ${this.executeText} ${this.remainSecond}/${this.executeSecond}초 ${this.initExecute}세트 진행중`;
    }

    headerCompleteUpdate(){
        document.querySelector(".header").innerHTML = '모든 운동 완료!';
    }
}
