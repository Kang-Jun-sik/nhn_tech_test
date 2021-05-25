import './exerciseDeleteButton.css'
import createService from "../../../utils/createService";

export default class ExerciseDeleteButton {
    uid = '';
    exerciseWrapperUid = '';

    /**
     * ExerciseDeleteButton - 운동 아이템 삭제 버튼 컴포넌트
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

        //실제 인스턴스 맵에서 삭제
        let checkedItems = exerciseWrapper.getExerciseItemsArea().querySelectorAll('.exercise-item');
        checkedItems.forEach(function (item){
            if (item.querySelector('.exercise-item-checkbox').checked){
                selectedRoutine.exerciseItems.delete(item.getAttribute('uid'));
            }
        });

        //렌더링된 화면에서 삭제
        checkedItems.forEach(function (item) {
            if (item.querySelector('.exercise-item-checkbox').checked)
                item.remove();
        });

        //전체시간 재계산
        exerciseTime.settingTime();
    }

    onDisable() {
        this.$el.disabled = true;
    }

    onEnable() {
        this.$el.disabled = false;
    }
}
