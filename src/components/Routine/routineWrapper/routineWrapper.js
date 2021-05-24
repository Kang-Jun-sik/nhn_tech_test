import './routineWrapper.css'
import RoutineAddButton from "../routineAddButton/routineAddButton";
import HorizontalRuler from "../../horizontalRule/horizontalRuler";
import RoutineTextBox from "../routineTextBox/routineTextBox";
import createService from "../../../utils/createService";

export default class RoutineWrapper {
    uid = '';
    selectedRoutine;
    exerciseWrapperUid;
    routineAddBtn = {};
    divider = {};
    routineTextBox = {};

    /**
     *
     */
    constructor() {
        this.uid = createService.createUid('routineWrapper');
        this.$el = document.createElement('div');
        this.$el.classList.add('routine-wrapper');

        //운동 루틴 추가 버튼
        this.routineAddBtn = new RoutineAddButton('새 운동 루틴 +');
        this.$el.appendChild(this.routineAddBtn.$el);
        window.instanceMap.set(this.routineAddBtn.uid, this.routineAddBtn);

        //Divider 생성 & 추가
        this.divider = new HorizontalRuler();
        this.$el.appendChild(this.divider.$el);

        //운동 루틴 입력부 텍스트 박스 생성 & 추가
        this.routineTextBox = new RoutineTextBox();
        this.$el.appendChild(this.routineTextBox.$el);
        window.instanceMap.set(this.routineTextBox.uid, this.routineTextBox);

        //루틴 아이템 추가 영역
        this.routineItemsArea = document.createElement('div');
        this.routineItemsArea.classList.add('routine-items-area');
        this.$el.appendChild(this.routineItemsArea);
        this.routineItemsArea.addEventListener('mousedown', this.onSelectRoutineItem.bind(this))

        //컴포넌트간 통신을 위한 UID 주입
        this.routineAddBtn.routineTextBoxUid = this.routineTextBox.uid //routineAddbtn <-- routineTextBox
        this.routineTextBox.routineWrapperUid = this.uid; //routineTextBox <-- routineWrapper
    }

    render() {

    }

    getRoutineItemsArea() {
        return this.routineItemsArea;
    }

    //하이라이팅 및 선택 로직 처리
    onSelectRoutineItem(e) {
        const routineItem = e.target.closest('.routine-item');
        const exerciseWrapper = window.instanceMap.get(this.exerciseWrapperUid);

        if (routineItem) {
            let rUid = routineItem.getAttribute('uid');
            this.selectedRoutine = window.instanceMap.get(rUid);

            window.instanceMap.forEach(function (item) {
                if (item.$el.classList.contains('selected'))
                    item.$el.classList.remove('selected');
            })
            routineItem.classList.add('selected');
            exerciseWrapper.clearExerciseItems();
            this.selectedRoutine.exerciseItems.forEach((value) => exerciseWrapper.getExerciseItemsArea().appendChild(value.$el));
        }
        this.enableExercise();
    }

    enableExercise() {
        const exerciseWrapper = window.instanceMap.get(this.exerciseWrapperUid);
        const exercise_add_btn = window.instanceMap.get(exerciseWrapper.exerciseAddBtnUid);
        const exercise_del_btn = window.instanceMap.get(exerciseWrapper.exerciseDelBtnUid);
        const exercise_time = window.instanceMap.get(exerciseWrapper.exerciseTimeUid);

        exercise_add_btn.onEnable();
        exercise_del_btn.onEnable();
        exercise_time.show();
    }

    disableExercise() {
        const exerciseWrapper = window.instanceMap.get(this.exerciseWrapperUid);
        const exercise_add_btn = window.instanceMap.get(exerciseWrapper.exerciseAddBtnUid);
        const exercise_del_btn = window.instanceMap.get(exerciseWrapper.exerciseDelBtnUid);
        const exercise_time = window.instanceMap.get(exerciseWrapper.exerciseTimeUid);
        const exercise_input = window.instanceMap.get(exerciseWrapper.exerciseInputUid);

        exercise_add_btn.onDisable();
        exercise_del_btn.onDisable();
        exercise_time.hide();
        exercise_input.hide();
    }
}
