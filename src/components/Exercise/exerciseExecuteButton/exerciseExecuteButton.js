import './exerciseExecuteButton.css'
import createService from "../../../utils/createService";

export default class ExerciseExecuteButton {
    uid = '';
    exerciseWrapperUid = '';

    /**
     *
     */
    constructor(buttonText) {
        this.uid = createService.createUid('exerciseExecuteBtn');
        this.$el = document.createElement('button');
        this.$el.classList.add('exercise-execute-button');
        this.$el.innerText = buttonText;
        this.$el.addEventListener('click', this.executeExercise.bind(this));
        //this.onDisable();
    }

    executeExercise(e) {
        const exerciseWrapper = window.instanceMap.get(this.exerciseWrapperUid);
        const routineWrapper = window.instanceMap.get(exerciseWrapper.routineWrapperUid);
        const pageWrapper = window.instanceMap.get(exerciseWrapper.pageWrapperUid);
        const executeWrapper = window.instanceMap.get(exerciseWrapper.executeWrapperUid);
        const executeItemWrapper = window.instanceMap.get(executeWrapper.executeItemsWrapperUid);

        pageWrapper.hide();
        executeWrapper.show();
        routineWrapper.selectedRoutine.exerciseItems.forEach((value) => executeItemWrapper.getExecuteItemsArea().appendChild(value.$el));
    }

    onDisable() {
        this.$el.disabled = true;
    }

    onEnable() {
        this.$el.disabled = false;
    }
}
