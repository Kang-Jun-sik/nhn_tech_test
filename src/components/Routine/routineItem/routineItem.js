import './routineItem.css';
import createService from "../../../utils/createService";

export default class RoutineItem {

    uid = '';
    routineWrapperUid = '';
    routineTextBoxUid = '';
    exerciseItems = new Map();

    /**
     * RoutineWrapper - 운동 루틴 아이템 컴포넌트
     */
    constructor(routineName) {
        this.uid = createService.createUid('routineItem');
        this.$el = document.createElement('div');
        this.$el.classList.add('routine-item');
        this.$el.setAttribute('uid', this.uid);
        this.routineName = routineName;
    }

    setRoutineItemText(text) {
        this.routineName = text;
    }

    render() {
        this.$el.innerHTML = `
            <p class="routine-name">${this.routineName}</p>
            <button class='routine-item-btn modify-btn'>수정</button>
            <button class='routine-item-btn delete-btn'>삭제</button>
        `;
        this.eventHandler();
    }

    eventHandler() {
        const modifyBtn = this.$el.querySelector('.modify-btn');
        const deleteBtn = this.$el.querySelector('.delete-btn');
        modifyBtn.addEventListener('click', this.modifyRoutineItem.bind(this))
        deleteBtn.addEventListener('click', this.deleteRoutineItem.bind(this));
    }

    modifyRoutineItem(e) {
        const routineTextBox = window.instanceMap.get(this.routineTextBoxUid);
        routineTextBox.inputMode = 'Modify';
        routineTextBox.modifyRoutineItemUid = this.uid;
        routineTextBox.show();
        routineTextBox.setText(this.routineName);
        routineTextBox.onFocus();
    }

    deleteRoutineItem(e) {
        if (confirm(`${this.routineName}을 삭제 하시겠습니까?`)) {
            const routineWrapper = window.instanceMap.get(this.routineWrapperUid);
            const exerciseWrapper = window.instanceMap.get(routineWrapper.exerciseWrapperUid);
            routineWrapper.disableExercise();
            window.instanceMap.delete(this.uid);
            this.$el.remove();
            exerciseWrapper.clearExerciseItems();
        }
    }
}
