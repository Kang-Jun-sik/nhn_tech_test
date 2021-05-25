import './routineAddButton.css'
import createService from "../../../utils/createService";

export default class RoutineAddButton {
    uid = '';
    routineTextBoxUid = '';

    /**
     * RoutineWrapper - 운동 루틴 추가 버튼 컴포넌트
     */
    constructor(buttonText) {
        this.uid = createService.createUid('routineAddButton');
        this.$el = document.createElement('button');
        this.$el.classList.add('routine-addButton');
        this.$el.innerText = buttonText;
        this.$el.addEventListener('click', this.addNewRoutineClick.bind(this));
    }

    addNewRoutineClick(e) {
        let routineTextBox = window.instanceMap.get(this.routineTextBoxUid);
        routineTextBox.inputMode = 'AddMode';
        routineTextBox.show();
        routineTextBox.onFocus();
    }
}
