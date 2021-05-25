import "../../../utils/createService"
import createService from "../../../utils/createService";
import ExecuteToolBar from "../executeToolBar/executeToolBar";
import ExecuteButtons from "../executeButtons/executeButtons";
import ExecuteItemsWrapper from "../executeItemsWrapper/executeItemsWrapper";
import timeformatter from "../../../utils/timeformatter";

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
     * exerciseApp - 운동 실행 화면 생성 및 스케쥴링
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
        const routineWrapper = window.instanceMap.get(this.routineWrapperUid);
        if (routineWrapper.selectedRoutine.exerciseItems.size == 0) {
            alert('시작할 운동 아이템이 존재하지 않습니다.');
            return;
        }
        this.setCount();
    }

    setCount() {
        const exerciseWrapper = window.instanceMap.get(this.exerciseWrapperUid);
        const exerciseTime = window.instanceMap.get(exerciseWrapper.exerciseTimeUid);
        this.totalTime = exerciseTime.getTime();
        this.currentPoint = 0, this.executingTime = 0, this.remainSecond = 0, this.initExecute = 1;
        this.currentExercise = document.querySelectorAll('.execute-item');
        this.currentExercise[this.currentPoint].classList.add('executing');
        this.routine = this.currentExercise[this.currentPoint].getAttribute('routine');
        this.executeSecond = this.currentExercise[this.currentPoint].getAttribute('executeSecond');
        this.executeSet = this.currentExercise[this.currentPoint].getAttribute('executeSet');
        this.executeText = this.currentExercise[this.currentPoint].getAttribute('executeText');
        this.completionTime = this.currentExercise[this.currentPoint].getAttribute('completionTime');
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
        document.querySelector(".header").innerHTML = '매일 운동 루틴';
    }

    restart() {
        clearInterval(this.intervalID);
        this.intervalID = setInterval(this.timer.bind(this), 1000);
    }

    timer() {
        this.executingTime++;
        this.remainSecond++;

        if (this.executingTime == this.totalTime) {
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

        if (this.remainSecond == this.executeSecond) {
            if (this.executeSet > this.initExecute) {
                this.initExecute++;
                this.remainSecond = 0;
            }
        }

        if (this.completionTime == this.executingTime) {
            this.remainSecond = 0, this.initExecute = 1;
            this.currentExercise[this.currentPoint].classList.remove('executing');
            this.currentExercise[this.currentPoint].classList.add('done');
            this.currentExercise[this.currentPoint].classList.add('executing');
            this.currentPoint++;
            this.executeSecond = this.currentExercise[this.currentPoint].getAttribute('executeSecond');
            this.executeSet = this.currentExercise[this.currentPoint].getAttribute('executeSet');
            this.executeText = this.currentExercise[this.currentPoint].getAttribute('executeText');
            this.completionTime = this.currentExercise[this.currentPoint].getAttribute('completionTime');
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

    headerCompleteUpdate() {
        document.querySelector(".header").innerHTML = '모든 운동 완료!';
    }
}
