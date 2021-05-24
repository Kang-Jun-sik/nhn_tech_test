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
        const pageWrapper = window.instanceMap.get(exerciseWrapper.pageWrapperUid);
        const executeWrapper = window.instanceMap.get(exerciseWrapper.executeWrapperUid);
        pageWrapper.hide();
    }

    onDisable() {
        this.$el.disabled = true;
    }

    onEnable() {
        this.$el.disabled = false;
    }
}
