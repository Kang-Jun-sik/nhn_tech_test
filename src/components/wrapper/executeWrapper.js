import "./pageWrapper.css"
import "../../utils/createService"
import createService from "../../utils/createService";
import ExecuteToolBar from "../Execute/executeToolBar/executeToolBar";
import ExecuteButtons from "../Execute/executeButtons/executeButtons";

export default class ExecuteWrapper {
    uid = '';

    /**
     *
     */
    constructor() {
        this.uid = createService.createUid('execute-wrapper');
        this.$el = document.createElement('div');
        this.$el.classList.add('execute-wrapper');

        this.exerciseExecuteToolBoar = new ExecuteToolBar();
        this.$el.appendChild(this.exerciseExecuteToolBoar.$el);

        this.exerciseExecuteButtons = new ExecuteButtons();
        this.exerciseExecuteButtons.render();
        this.$el.appendChild(this.exerciseExecuteButtons.$el);

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
