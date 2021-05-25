import "./header.css"
import "../../utils/createService"
import createService from "../../utils/createService";

export default class Header {
    headerText = '';
    uid = '';

    /**
     * header - 상단 헤더 영역 컴포넌트
     */
    constructor(headerText) {
        this.uid = createService.createUid('header');
        this.$el = document.createElement('div');
        this.$el.classList.add('header');
        this.headerText = headerText;
    }

    render() {
        return this.$el.innerHTML = `
            <p>${this.headerText}</p>
        `;
    }
}
