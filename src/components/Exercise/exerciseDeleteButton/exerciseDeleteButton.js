import './exerciseDeleteButton.css'
import createService from "../../../utils/createService";

export default class ExerciseDeleteButton {
    uid = '';
    exerciseWrapperUid = '';

    /**
     *
     */
    constructor(buttonText) {
        this.uid = createService.createUid('exerciseDeleteButton');
        this.$el = document.createElement('button');
        this.$el.classList.add('exercise-deleteButton');
        this.$el.innerText = buttonText;
        this.$el.addEventListener('click', this.deleteExerciseItem.bind(this));
    }

    deleteExerciseItem(e) {
        const exerciseWrapper = window.instanceMap.get(this.exerciseWrapperUid);
        const exerciseTime = window.instanceMap.get(exerciseWrapper.exerciseTimeUid);
        const routineWrapper = window.instanceMap.get(exerciseWrapper.routineWrapperUid);
        const selectedRoutine = routineWrapper.selectedRoutine;

        let checkedItems = exerciseWrapper.getExerciseItemsArea().querySelectorAll('.exercise-item');
        checkedItems.forEach(function (item){
            if (item.querySelector('.exercise-item-checkbox').checked){
                selectedRoutine.exerciseItems.delete(item.getAttribute('uid'));
            }
        });
        checkedItems.forEach(function (item) {
            if (item.querySelector('.exercise-item-checkbox').checked)
                item.remove();
        });
        exerciseTime.settingTime();
    }

    onDisable() {
        this.$el.disabled = true;
    }

    onEnable() {
        this.$el.disabled = false;
    }
}
