import './exerciseAddButton.css'
import createService from "../../../utils/createService";

export default class ExerciseAddButton {
    uid = '';
    exerciseInputUid = '';

    /**
     * ExerciseAddButton - 운동 추가 버튼 컴포넌트 (입력기 Show)
     */
    constructor(buttonText) {
        this.uid = createService.createUid('exerciseAddButton');
        this.$el = document.createElement('button');
        this.$el.classList.add('exercise-addButton');
        this.$el.innerText = buttonText;
        this.onDisable();
        this.$el.addEventListener('click', this.addNewExerciseItem.bind(this));
    }

    onDisable() {
        this.$el.disabled = true;
    }

    onEnable() {
        this.$el.disabled = false;
    }

    addNewExerciseItem(e) {
        const exerciseInput = window.instanceMap.get(this.exerciseInputUid);
        exerciseInput.inputMode = 'AddMode';
        exerciseInput.show();
    }
}
