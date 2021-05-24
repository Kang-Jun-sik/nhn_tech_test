import './exerciseTime.css'
import createService from "../../../utils/createService";

export default class ExerciseTime {
    uid = '';

    /**
     *
     */
    constructor(time) {
        this.uid = createService.createUid('exercise-time');
        this.$el = document.createElement('span');
        this.$el.classList.add('exercise-time');
        this.$el.innerText = time;
        this.hide();
    }

    hide() {
        this.$el.style.display = 'none';
    }

    show() {
        this.$el.style.display = 'inline-block';
    }

    onDisable() {
    }

    addNewRoutineClick(e) {

    }
}
