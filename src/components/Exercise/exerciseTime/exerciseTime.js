import './exerciseTime.css'
import createService from "../../../utils/createService";
import timeformatter from "../../../utils/timeformatter";

export default class ExerciseTime {
    uid = '';
    exerciseWrapperUid = '';

    /**
     *
     */
    constructor() {
        this.uid = createService.createUid('exercise-time');
        this.$el = document.createElement('span');
        this.$el.classList.add('exercise-time');
        this.$el.innerText = '';
        this.hide();
    }

    settingTime() {
        let totalSeconds = new Number();
        const exerciseWrapper = window.instanceMap.get(this.exerciseWrapperUid);
        const routineWrapper = window.instanceMap.get(exerciseWrapper.routineWrapperUid);
        const selectedRoutine = routineWrapper.selectedRoutine;

        if (selectedRoutine.exerciseItems.size == 0)
            this.$el.innerText = '';

        selectedRoutine.exerciseItems.forEach(function (item) {
            totalSeconds += (item.exerciseSecond * item.exerciseSet);
        });
        this.$el.innerText = timeformatter(totalSeconds);
    }

    hide() {
        this.$el.style.display = 'none';
    }

    show() {
        this.$el.style.display = 'inline-block';
    }

    onDisable() {
    }
}
