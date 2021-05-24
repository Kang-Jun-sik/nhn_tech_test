import './exerciseWrapper.css'
import createService from "../../../utils/createService";
import ExerciseAddButton from "../exerciseAddButton/exerciseAddButton";
import ExerciseDeleteButton from "../exerciseDeleteButton/exerciseDeleteButton";
import HorizontalRuler from "../../horizontalRule/horizontalRuler";
import ExerciseTime from "../exerciseTime/exerciseTime";
import ExerciseInput from "../exerciseTextBox/exerciseInput";
import ExerciseExecuteButton from "../exerciseExecuteButton/exerciseExecuteButton";

export default class ExerciseWrapper {
    uid = '';
    pageWrapperUid = '';
    executeWrapperUid = '';
    routineWrapperUid = '';
    exerciseAddBtnUid = '';
    exerciseDelBtnUid = '';
    exerciseTimeUid = '';
    exerciseInputUid = '';

    /**
     *
     */
    constructor() {
        //Exercise Wrapper 생성
        this.uid = createService.createUid('exerciseWrapper');
        this.$el = document.createElement('div');
        this.$el.classList.add('exercise-wrapper');

        //운동 추가 버튼
        this.exerciseAddBtn = new ExerciseAddButton('+운동 추가');
        this.$el.appendChild(this.exerciseAddBtn.$el);
        window.instanceMap.set(this.exerciseAddBtn.uid, this.exerciseAddBtn);

        //운동 삭제 버튼
        this.exerciseDelBtn = new ExerciseDeleteButton('삭제');
        this.$el.appendChild(this.exerciseDelBtn.$el);
        window.instanceMap.set(this.exerciseDelBtn.uid, this.exerciseDelBtn);

        //Total Time
        this.exerciseTime = new ExerciseTime('전체시간 4분 25초');
        this.$el.appendChild(this.exerciseTime.$el);
        window.instanceMap.set(this.exerciseTime.uid, this.exerciseTime);

        //Divider
        this.divider = new HorizontalRuler();
        this.$el.appendChild(this.divider.$el);

        //운동 아이템 추가 영역
        this.exerciseItemArea = document.createElement('div');
        this.exerciseItemArea.classList.add('exercise-items-area');
        this.$el.appendChild(this.exerciseItemArea);

        //운동 입력기
        this.exerciseInput = new ExerciseInput();
        this.exerciseInput.render();
        this.$el.appendChild(this.exerciseInput.$el);
        window.instanceMap.set(this.exerciseInput.uid, this.exerciseInput);

        //운동 시작버튼
        this.exerciseExecuteButton = new ExerciseExecuteButton("운동 시작");
        this.$el.appendChild(this.exerciseExecuteButton.$el);
        window.instanceMap.set(this.exerciseExecuteButton.uid, this.exerciseExecuteButton);

        //컴포넌트간 통신을 위한 UID 주입
        this.exerciseAddBtnUid = this.exerciseAddBtn.uid; //exercise wrapper <-- exercise Add button
        this.exerciseDelBtnUid = this.exerciseDelBtn.uid; //exercise wrapper <-- exercise Del button
        this.exerciseTimeUid = this.exerciseTime.uid; //exercise wrapper <-- exercise Time
        this.exerciseInputUid = this.exerciseInput.uid; //exercise wrapper <-- exercise Input

        this.exerciseInput.exerciseWrapperUid = this.uid; //exercise Input <-- exercise wrapper
        this.exerciseExecuteButton.exerciseWrapperUid = this.uid; //exercise Execute button <-- exercise wrapper
        this.exerciseAddBtn.exerciseInputUid = this.exerciseInput.uid; //exercise Add button <-- exercise Input
    }

    render() {

    }

    getExerciseItemsArea() {
        return this.exerciseItemArea;
    }

    clearExerciseItems() {
        this.exerciseItemArea.querySelectorAll('.exercise-item').forEach(n => n.remove());
    }
}
