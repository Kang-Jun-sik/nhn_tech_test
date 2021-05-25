import './exerciseItem.css';
import createService from "../../../utils/createService";

export default class ExerciseItem {

    uid = '';
    exerciseWrapperUid = '';
    exerciseInputUid = '';
    exerciseName = '';
    exerciseSecond = '';
    exerciseSet = '';

    /**
     * ExerciseItem - 운동 아이템 컴포넌트
     */

    constructor(...item) {
        this.uid = createService.createUid('exerciseItem');
        this.$el = document.createElement('div');
        this.$el.classList.add('exercise-item');
        this.$el.setAttribute('uid', this.uid);
        this.exerciseName = item[0];
        this.exerciseSecond = item[1];
        this.exerciseSet = item[2];
        this.exerciseText = `${this.exerciseName} ${this.exerciseSecond}초 ${this.exerciseSet}세트`;
    }

    setExerciseText(param) {
        this.$el.querySelector('.exercise-item-text').textContent = param;
    }

    setRoutineItemText(text) {
        this.routineName = text;
    }

    render() {
        this.$el.innerHTML = `
            <input class="exercise-item-checkbox" type="checkbox"/>
            <p class='exercise-item-text'>${this.exerciseText}</p>
            <button class='exercise-item-btn modify-btn'>수정</button>
        `;
        this.eventHandler();
    }

    eventHandler() {
        const modifyBtn = this.$el.querySelector('.modify-btn');
        modifyBtn.addEventListener('click', this.modifyExerciseItem.bind(this))
    }

    modifyExerciseItem(e) {
        const exerciseInput = window.instanceMap.get(this.exerciseInputUid);
        exerciseInput.inputMode = "Modify";
        exerciseInput.modifyExerciseItemUid = this.uid;
        exerciseInput.show();
        exerciseInput.settingExerciseInfo(this.exerciseName, this.exerciseSecond, this.exerciseSet);
    }
}
