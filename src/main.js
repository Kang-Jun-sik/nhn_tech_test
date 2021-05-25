import ExerciseApp from "./page/excerciseApp";
import "./main.css"

export default class Main {

    constructor() {

    }
    //앱 메인 시작
    start(app) {
        console.log('app start!');
        const exerciseApp = new ExerciseApp(app);
        exerciseApp.render();
    }
}

window.instanceMap = new Map(); //컴포넌트 관리를 위한  Instance 맵 생성
const $app = document.querySelector('#app');
new Main().start($app);
