import "./header.css"
import "../../utils/createService"
import createService from "../../utils/createService";

export default class Header {
    headerText = '';
    uid = '';

    /**
     *
     */
    constructor(headerText) {
        this.uid = createService.createUid('header');
        this.$el = document.createElement('div');
        this.$el.classList.add('header');
        this.headerText = headerText;
    }

    setHeaderText(headerTitle) {
        this.headerText = headerTitle;
    }

    render() {
        return this.$el.innerHTML = `
            <p>${this.headerText}</p>
        `;
    }
}
