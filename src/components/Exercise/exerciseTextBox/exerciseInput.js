import './exerciseInput.css';
import createService from "../../../utils/createService";
import ExerciseItem from "../exerciseItem/exerciseItem";

export default class ExerciseInput {
    uid = '';
    exerciseWrapperUid = '';
    routineWrapperUid = '';
    exerciseName = '';
    exerciseSecond = '';
    exerciseSet = '';
    inputMode = '';

    /**
     *
     */
    constructor() {
        this.uid = createService.createUid('exerciseInput');
        this.$el = document.createElement('div');
        this.$el.setAttribute('tabindex', '0');
        this.$el.classList.add('exercise-input');
        this.$el.style.display = 'none';
    }

    render() {
        this.$el.innerHTML = `
            <div class="exercise-input-wrapper">
                <span> 이름 </span>
                <input class="exercise-input-name" value="${this.exerciseName}" placeholder="운동입력"/>
                <input class="exercise-input-second" value="${this.exerciseSecond}" type="number" placeholder="30"/>
                <sapn> 초 </sapn>
                <input class="exercise-input-set" value="${this.exerciseSet}" type="number" placeholder="1"/>
                <sapn> 세트 </sapn>
            </div>
            <div class="exercise-btn-wrapper">
                <button class='exercise-btn store-btn'>저장</button>
                <button class='exercise-btn store-cancel'>취소</button>
            </div>
        `;
        this.keydownButtonBinding();
        this.storeButtonClickBinding();
        this.cancelButtonClickBinding();
    }

    onFocus() {
        this.$el.querySelector('.exercise-input-name').focus();
    }

    show() {
        this.$el.style.display = 'block';
        this.onFocus();
    }

    clear() {
        this.exerciseName = ''
        this.exerciseSecond = '';
        this.exerciseSet = '';
        this.$el.querySelector('.exercise-input-name').value = '';
        this.$el.querySelector('.exercise-input-second').value = '';
        this.$el.querySelector('.exercise-input-set').value = '';
    }

    hide() {
        this.$el.style.display = 'none';
    }

    keydownExecute(e) {
        //Enter Key
        if (e.keyCode === 13) {
            const exerciseWrapper = window.instanceMap.get(this.exerciseWrapperUid);
            const routineWrapper = window.instanceMap.get(exerciseWrapper.routineWrapperUid);
            const selectedRoutine = routineWrapper.selectedRoutine;

            switch (this.inputMode) {
                case "AddMode":
                    const exerciseItemText = e.target.value;
                    const exerciseItem = new ExerciseItem(exerciseItemText);
                    exerciseItem.render();
                    exerciseWrapper.getExerciseItemsArea().appendChild(exerciseItem.$el);
                    selectedRoutine.exerciseItems.set(exerciseItem.uid, exerciseItem); //해당 루틴에 추가해준다.
                    this.clear();
                    this.hide();
                    break;
                case 'Modify' :
                    break;
            }
        } else if (e.keyCode === 27) {
            this.clear();
            this.hide();
        }
    }

    keydownButtonBinding() {
        this.$el.addEventListener('keydown', this.keydownExecute.bind(this))
    }

    storeButtonClickBinding() {
        let storeBtn = this.$el.querySelector('.store-btn');
        storeBtn.addEventListener('click', this.storeButtonClick.bind(this))
    }

    storeButtonClick(e) {

    }

    cancelButtonClickBinding() {
        let cancelBtn = this.$el.querySelector('.store-cancel');
        cancelBtn.addEventListener('click', this.cancelButtonClick.bind(this))
    }

    cancelButtonClick(e) {
        this.clear();
        this.hide();
    }
}
