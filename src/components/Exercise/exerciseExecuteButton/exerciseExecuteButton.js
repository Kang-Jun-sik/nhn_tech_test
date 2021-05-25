import './exerciseExecuteButton.css'
import createService from "../../../utils/createService";

export default class ExerciseExecuteButton {
    uid = '';
    exerciseWrapperUid = '';

    /**
     * ExerciseItem - 운동 수행 버튼 컴포넌트
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
        const exerciseTime = window.instanceMap.get(exerciseWrapper.exerciseTimeUid);
        const totalTime = exerciseTime.settingTime();
        let executeItem, completionTime, timeTemp = 0;
        pageWrapper.hide();
        routineWrapper.selectedRoutine.exerciseItems.forEach(function (item) {
            timeTemp += (item.exerciseSecond * item.exerciseSet)
            executeItem = document.createElement('div');
            completionTime = totalTime - timeTemp
            executeItem.setAttribute('uid', item.uid);
            executeItem.setAttribute('completionTime', completionTime.toString());
            executeItem.classList.add('execute-item');
            executeItem.innerText = item.exerciseText;
            executeItemWrapper.getExecuteItemsArea().appendChild(executeItem);
        });
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
