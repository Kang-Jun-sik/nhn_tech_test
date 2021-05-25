import "./horizontalRuler.css"
import createService from "../../utils/createService";

export default class HorizontalRuler {
    uid = '';

    /**
     * Divder - 구분 영역 표시 컴포넌트
     */
    constructor() {
        this.uid = createService.createUid('divider');
        this.$el = document.createElement('hr');
        this.$el.classList.add('divider');
    }
}
