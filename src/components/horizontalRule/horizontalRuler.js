import "./horizontalRuler.css"
import createService from "../../utils/createService";

export default class HorizontalRuler {
    uid = '';

    /**
     *
     */
    constructor() {
        this.uid = createService.createUid('divider');
        this.$el = document.createElement('hr');
        this.$el.classList.add('divider');
    }
}
