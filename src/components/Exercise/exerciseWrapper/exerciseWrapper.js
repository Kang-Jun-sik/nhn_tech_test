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
    exerciseExecuteButtonUid = '';

    /**
     * ExerciseWrapper - 운동 컨트롤러 컴포넌트
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
        this.exerciseTime = new ExerciseTime();
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

        //운동 실행버튼
        this.exerciseExecuteButton = new ExerciseExecuteButton("운동 시작");
        this.$el.appendChild(this.exerciseExecuteButton.$el);
        window.instanceMap.set(this.exerciseExecuteButton.uid, this.exerciseExecuteButton);

        //컴포넌트간 통신을 위한 UID 주입
        this.exerciseAddBtnUid = this.exerciseAddBtn.uid;
        this.exerciseDelBtnUid = this.exerciseDelBtn.uid;
        this.exerciseTimeUid = this.exerciseTime.uid;
        this.exerciseInputUid = this.exerciseInput.uid;
        this.exerciseExecuteButtonUid = this.exerciseExecuteButton.uid;
        this.exerciseInput.exerciseWrapperUid = this.uid;
        this.exerciseTime.exerciseWrapperUid = this.uid;
        this.exerciseExecuteButton.exerciseWrapperUid = this.uid;
        this.exerciseDelBtn.exerciseWrapperUid = this.uid;
        this.exerciseAddBtn.exerciseInputUid = this.exerciseInput.uid;
    }

    getExerciseItemsArea() {
        return this.exerciseItemArea;
    }

    clearExerciseItems() {
        this.exerciseItemArea.querySelectorAll('.exercise-item').forEach(n => n.remove());
    }
}
