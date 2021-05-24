import './routineTextBox.css';
import createService from "../../../utils/createService";
import RoutineItem from "../routineItem/routineItem";

export default class RoutineTextBox {
    uid = '';
    routineWrapperUid = '';
    inputMode = '';
    modifyRoutineItemUid = '';

    /**
     *
     */
    constructor() {
        this.uid = createService.createUid('routineTextBox');
        this.$el = document.createElement('input');
        this.$el.placeholder = '입력하세요';
        this.$el.classList.add('routine-textBox');
        this.$el.style.display = 'none';
        this.$el.addEventListener('keydown', this.keydownHandler.bind(this));
    }

    render() {

    }

    onFocus() {
        this.$el.focus();
    }

    setText(param) {
        this.$el.value = param;
    }

    show() {
        this.$el.style.display = 'block';
    }

    hide() {
        this.$el.style.display = 'none';
    }

    clear() {
        this.$el.value = '';
    }

    keydownHandler(e) {

        //Input Enter Key
        if (e.keyCode === 13) {
            const routineWrapper = window.instanceMap.get(this.routineWrapperUid);
            switch (this.inputMode) {
                case 'AddMode' :
                    //routine Item 생성 & 추가
                    const routineItemText = e.target.value;
                    const routineItem = new RoutineItem(routineItemText);
                    routineItem.routineTextBoxUid = this.uid;
                    routineItem.routineWrapperUid = routineWrapper.uid;
                    routineItem.render();
                    routineWrapper.getRoutineItemsArea().prepend(routineItem.$el);
                    window.instanceMap.set(routineItem.uid, routineItem);
                    this.clear();
                    this.hide();
                    break;
                case 'Modify' :
                    //routine Item 수정
                    const targetRoutineItem = window.instanceMap.get(this.modifyRoutineItemUid);
                    targetRoutineItem.setRoutineItemText(e.target.value);
                    targetRoutineItem.render();
                    this.clear();
                    this.hide();
                    break;
            }
        }

        //Input Escape
        else if (e.keyCode === 27) {
            this.clear();
            this.hide();
        }
    }
}
