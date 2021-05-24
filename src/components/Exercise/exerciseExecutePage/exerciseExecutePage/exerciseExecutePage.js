import './exerciseExecutePage.css'
import createService from "../../../../utils/createService";

export default class ExerciseExecutePage {
    uid = '';
    exerciseWrapperUid = '';

    /**
     *
     */
    constructor() {
        this.uid = createService.createUid('exerciseExecutePage');
        this.$el = document.createElement('div');
        this.$el.classList.add('exercise-execute-page');
    }

    render() {

    }
}
