import Header from "../components/header/header";
import HorizontalRuler from "../components/horizontalRule/horizontalRuler";
import RoutineWrapper from "../components/Routine/routineWrapper/routineWrapper";
import ExerciseWrapper from "../components/Exercise/exerciseWrapper/exerciseWrapper";
import PageWrapper from "../components/wrapper/pageWrapper";
import ExecuteWrapper from "../components/wrapper/executeWrapper";

export default class ExerciseApp {

    /**
     * exerciseApp - 메인 앱을 구성하는 컴포넌트
     */
    constructor(app) {
        this.$el = app;

        //헤더 컴포넌트 생성 & 추가
        this.header = new Header('매일 운동 루틴');
        this.header.render();
        this.$el.appendChild(this.header.$el);
        window.instanceMap.set(this.header.uid, this.header);

        //Divider 생성
        this.divider = new HorizontalRuler();
        this.$el.appendChild(this.divider.$el);
        window.instanceMap.set(this.divider.uid, this.divider);

        //Page Wrapper 생성 (RoutineWrapper + ExerciseWrapper)
        this.pageWrapper = new PageWrapper();
        this.$el.appendChild(this.pageWrapper.$el);
        window.instanceMap.set(this.pageWrapper.uid, this.pageWrapper);

        //Routine Wrapper 생성
        this.routineWrapper = new RoutineWrapper();
        this.pageWrapper.$el.appendChild(this.routineWrapper.$el);
        window.instanceMap.set(this.routineWrapper.uid, this.routineWrapper);

        //Exercise Wrapper 생성
        this.exerciseWrapper = new ExerciseWrapper();
        this.pageWrapper.$el.appendChild(this.exerciseWrapper.$el);
        window.instanceMap.set(this.exerciseWrapper.uid, this.exerciseWrapper);

        //Execute Wrapper 생성
        this.executeWrapper = new ExecuteWrapper();
        this.$el.appendChild(this.executeWrapper.$el);
        window.instanceMap.set(this.executeWrapper.uid, this.executeWrapper);
        this.executeWrapper.hide();

        //컴포넌트간 통신을 위한 UID 주입
        this.executeWrapper.exerciseWrapperUid = this.exerciseWrapper.uid;
        this.executeWrapper.routineWrapperUid = this.routineWrapper.uid;
        this.executeWrapper.pageWrapperUid = this.pageWrapper.uid;
        this.routineWrapper.exerciseWrapperUid = this.exerciseWrapper.uid;
        this.exerciseWrapper.routineWrapperUid = this.routineWrapper.uid;
        this.exerciseWrapper.pageWrapperUid = this.pageWrapper.uid;
        this.exerciseWrapper.executeWrapperUid = this.executeWrapper.uid;
    }

    render() {
        return this.$el;
    }
}
