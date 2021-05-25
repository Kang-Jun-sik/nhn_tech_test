import "../../utils/createService"
import createService from "../../utils/createService";

export default class PageWrapper {
    uid = '';

    /**
     * PageWrapper - RoutineWrapper,ExerciseWrapper를 감싸는 컴포넌트
     */
    constructor() {
        this.uid = createService.createUid('page-wrapper');
        this.$el = document.createElement('div');
        this.$el.classList.add('page-wrapper');
    }

    render() {

    }

    hide() {
        this.$el.style.display = 'none';
    }

    show() {
        this.$el.style.display = 'block';
    }
}
