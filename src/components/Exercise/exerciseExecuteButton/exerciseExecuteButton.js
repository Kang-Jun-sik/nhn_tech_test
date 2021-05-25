import './exerciseExecuteButton.css'
import createService from "../../../utils/createService";

export default class ExerciseExecuteButton {
    uid = '';
    exerciseWrapperUid = '';

    /**
     * ExerciseExecuteButton - 운동 수행 버튼 컴포넌트
     */
    constructor(buttonText) {
        this.uid = createService.createUid('exerciseExecuteBtn');
        this.$el = document.createElement('button');
        this.$el.classList.add('exercise-execute-button');
        this.$el.innerText = buttonText;
        this.$el.addEventListener('click', this.executeExercise.bind(this));
        this.onDisable();
    }

    executeExercise(e) {
        const exerciseWrapper = window.instanceMap.get(this.exerciseWrapperUid);
        const routineWrapper = window.instanceMap.get(exerciseWrapper.routineWrapperUid);
        const pageWrapper = window.instanceMap.get(exerciseWrapper.pageWrapperUid);
        const executeWrapper = window.instanceMap.get(exerciseWrapper.executeWrapperUid);
        const executeItemWrapper = window.instanceMap.get(executeWrapper.executeItemsWrapperUid);

        let executeItem, completionTime, timeTemp = 0;
        pageWrapper.hide();

        //선택된 루틴의 아이템으로 운동 수행 리스트 UI 구성
        routineWrapper.selectedRoutine.exerciseItems.forEach(function (item) {
            timeTemp += (item.exerciseSecond * item.exerciseSet)
            executeItem = document.createElement('div');
            completionTime = item.exerciseSecond * item.exerciseSet;
            executeItem.setAttribute('uid', item.uid);
            executeItem.setAttribute('routine', routineWrapper.selectedRoutine.routineName);
            executeItem.setAttribute('executeText', item.exerciseText);
            executeItem.setAttribute('executeSecond', item.exerciseSecond);
            executeItem.setAttribute('executeSet', item.exerciseSet);
            executeItem.setAttribute('completionTime', timeTemp);
            executeItem.classList.add('execute-item');
            executeItem.innerText = item.exerciseText;
            executeItemWrapper.getExecuteItemsArea().appendChild(executeItem);
        });

        //운동 수행 스케줄 시작
        executeWrapper.show();
        executeWrapper.start();
    }

    onDisable() {
        this.$el.disabled = true;
    }

    onEnable() {
        this.$el.disabled = false;
    }
}
