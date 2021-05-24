import "./pageWrapper.css"
import "../../utils/createService"
import createService from "../../utils/createService";

export default class PageWrapper {
    uid = '';

    /**
     * PageWrapper 객체 생성 (RoutineWrapper + ExerciseWrapper)
     */
    constructor(headerText) {
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
