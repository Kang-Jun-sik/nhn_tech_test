export default class Scheduler {
    tickEvents = [];
    interval = 0;
    state = 0;

    /**
     * 일정 시간마다 이벤트를 발생시키는 스케줄러 생성
     * @param delay 이벤트를 발생시킬 주기(ms)
     */
    constructor({delay = 1000}) {
        this.delay = delay;
    }

    /**
     * 스케줄러 틱마다 실행될 이벤트 핸들러 등록 메소드
     * @param event 틱마다 실행될 이벤트 핸들러
     */
    addTickEvent(event) {
        this.tickEvents.push(event);
    }

    /**
     * 스케줄러 틱 이벤트 핸들러 제거
     * @param event 제거할 이벤트 핸들러
     */
    removeTickEvent(event) {
        const idx = this.#ickEvents.findIndex(e => e === event);
        this.tickEvents.splice(idx, 1);
    }

    /**
     * 스케줄러 틱 이벤트 핸들링 시작
     */
    start() {
        this.stop();
        const self = this;

        this.interval = setInterval(() => {
            window.requestAnimationFrame(() => {
                // this.#tickEvents.forEach(event => event(Date.now()));
                self.state = Date.now();
            });
        }, this.delay);
    }

    /**
     * 스케줄러 틱 이벤트 중지
     */
    stop() {
        clearInterval(this.#nterval);
    }
}
