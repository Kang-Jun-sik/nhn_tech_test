import './exerciseItem.css';
import createService from "../../../utils/createService";

export default class ExerciseItem {

    uid = '';
    exerciseWrapperUid = '';

    /**
     *
     */
    constructor(...item) {
        this.uid = createService.createUid('exerciseItem');
        this.$el = document.createElement('div');
        this.$el.classList.add('exercise-item');
        this.$el.setAttribute('uid', this.uid);
        this.exerciseName = exerciseName;
    }

    setRoutineItemText(text) {
        this.routineName = text;
    }

    render() {
        this.$el.innerHTML = `
            <input class="exercise-item-checkbox" type="checkbox"/>
            <p class='exercise-item-text'>${this.exerciseName}</p>
            <button class='exercise-item-btn modify-btn'>수정</button>
        `;
        this.eventHandler();
    }

    eventHandler() {
        const modifyBtn = this.$el.querySelector('.modify-btn');
        modifyBtn.addEventListener('click', this.modifyExerciseItem.bind(this))
    }

    modifyExerciseItem(e) {
        // const routineTextBox = window.instanceMap.get(this.routineTextBoxUid);
        // routineTextBox.inputMode = 'Modify';
        // routineTextBox.modifyRoutineItemUid = this.uid;
        // routineTextBox.show();
        // routineTextBox.setText(this.routineName);
        // routineTextBox.onFocus();
    }
}
