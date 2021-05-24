import './exerciseInput.css';
import createService from "../../../utils/createService";
import ExerciseItem from "../exerciseItem/exerciseItem";

export default class ExerciseInput {
    uid = '';
    exerciseWrapperUid = '';
    routineWrapperUid = '';
    inputMode = '';
    modifyExerciseItemUid = '';

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
                <input class="exercise-input-name" placeholder="운동입력"/>
                <input class="exercise-input-second" type="number" placeholder="30"/>
                <sapn> 초 </sapn>
                <input class="exercise-input-set" type="number" placeholder="1"/>
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

    settingExerciseInfo(...info) {
        this.$el.querySelector('.exercise-input-name').value = info[0];
        this.$el.querySelector('.exercise-input-second').value = info[1];
        this.$el.querySelector('.exercise-input-set').value = info[2];
    }

    onFocus() {
        this.$el.querySelector('.exercise-input-name').focus();
    }

    show() {
        this.$el.style.display = 'block';
        this.onFocus();
    }

    clear() {
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
            this.itemAddModify();
        } else if (e.keyCode === 27) {
            this.clear();
            this.hide();
        }
    }

    itemAddModify() {
        const exerciseWrapper = window.instanceMap.get(this.exerciseWrapperUid);
        const routineWrapper = window.instanceMap.get(exerciseWrapper.routineWrapperUid);
        const selectedRoutine = routineWrapper.selectedRoutine;
        const selectExercise = selectedRoutine.exerciseItems.get(this.modifyExerciseItemUid);

        if (!this.checkExerciseItemText(this.$el.querySelector('.exercise-input-name').value)) {
            alert('운동 이름은 필수값 입니다.');
            return;
        }
        const exerciseItemText = this.$el.querySelector('.exercise-input-name').value.replace(/(\s*)/g, "");
        const exerciseSecond = this.validateExerciseSecond(this.$el.querySelector('.exercise-input-second').value);
        const exerciseSet = this.validateExerciseSet(this.$el.querySelector('.exercise-input-set').value);

        switch (this.inputMode) {
            case "AddMode":
                const exerciseItem = new ExerciseItem(exerciseItemText, exerciseSecond, exerciseSet);
                exerciseItem.exerciseInputUid = this.uid;
                exerciseItem.render();
                exerciseWrapper.getExerciseItemsArea().appendChild(exerciseItem.$el);
                selectedRoutine.exerciseItems.set(exerciseItem.uid, exerciseItem); //해당 루틴에 추가해준다.

                this.clear();
                this.hide();
                break;
            case 'Modify' :
                selectExercise.exerciseName = exerciseItemText;
                selectExercise.exerciseSecond = exerciseSecond;
                selectExercise.exerciseSet = exerciseSet;
                selectExercise.setExerciseText(`${exerciseItemText} ${exerciseSecond}초 ${exerciseSet}세트`);
                this.clear();
                this.hide();
                break;
        }
        const timer = window.instanceMap.get(exerciseWrapper.exerciseTimeUid);
        timer.settingTime();
    }

    checkExerciseItemText(exerciseName) {
        return String(exerciseName) ? true : false;
    }

    validateExerciseSecond(param) {
        if (!param)
            return 30;
        else if (param >= 1 && param <= 60)
            return param;
        else
            return 30;
    }

    validateExerciseSet(param) {
        return param ? param : 1;
    }


    keydownButtonBinding() {
        this.$el.addEventListener('keydown', this.keydownExecute.bind(this))
    }

    storeButtonClickBinding() {
        let storeBtn = this.$el.querySelector('.store-btn');
        storeBtn.addEventListener('click', this.storeButtonClick.bind(this))
    }

    storeButtonClick(e) {
        this.itemAddModify();
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
