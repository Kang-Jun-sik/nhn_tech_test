import "./pageWrapper.css"
import "../../utils/createService"
import createService from "../../utils/createService";
import ExecuteToolBar from "../Execute/executeToolBar/executeToolBar";
import ExecuteButtons from "../Execute/executeButtons/executeButtons";
import ExecuteItemsWrapper from "../Execute/executeItemsWrapper/executeItemsWrapper";

export default class ExecuteWrapper {
    uid = '';
    executeItemsWrapperUid = '';

    /**
     *
     */
    constructor() {
        this.uid = createService.createUid('execute-wrapper');
        this.$el = document.createElement('div');
        this.$el.classList.add('execute-wrapper');

        this.exerciseExecuteToolBoar = new ExecuteToolBar();
        this.$el.appendChild(this.exerciseExecuteToolBoar.$el);
        window.instanceMap.set(this.exerciseExecuteToolBoar.uid, this.exerciseExecuteToolBoar);

        this.executeItemsWrapper = new ExecuteItemsWrapper();
        this.$el.appendChild(this.executeItemsWrapper.$el);
        window.instanceMap.set(this.executeItemsWrapper.uid, this.executeItemsWrapper);

        this.exerciseExecuteButtons = new ExecuteButtons();
        this.exerciseExecuteButtons.render();
        this.$el.appendChild(this.exerciseExecuteButtons.$el);
        window.instanceMap.set(this.exerciseExecuteButtons.uid, this.exerciseExecuteButtons);

        this.executeItemsWrapperUid = this.executeItemsWrapper.uid;
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
