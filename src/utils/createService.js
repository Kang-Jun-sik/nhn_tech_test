export default {
    /**
     * 컴포넌트별 uid를 생성하기 위한 메소드
     * @param target 컴포넌트별 uid
     */
    createUid(target) {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return target + '-' + s4() + s4();
    },
}
