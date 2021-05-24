import './exerciseDeleteButton.css'
import createService from "../../../utils/createService";

export default class ExerciseDeleteButton {
    uid = '';

    /**
     *
     */
    constructor(buttonText) {
        this.uid = createService.createUid('exerciseDeleteButton');
        this.$el = document.createElement('button');
        this.$el.classList.add('exercise-deleteButton');
        this.$el.innerText = buttonText;
        this.onDisable();
    }

    onDisable() {
        this.$el.disabled = true;
    }

    onEnable() {
        this.$el.disabled = false;
    }

    addNewRoutineClick(e) {

    }
}
