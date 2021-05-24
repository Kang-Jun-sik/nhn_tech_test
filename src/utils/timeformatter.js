/**
 * 컴포넌트별 uid를 생성하기 위한 메소드
 * @param target 컴포넌트별 uid
 */
export default function (s, fixed = 0) {
    s = typeof s === 'number' ? s : parseInt(s);
    let result = "";

    // 시분초 계산
    const _hours = Math.floor(s / 3600);
    const _minutes = Math.floor((s - (_hours * 3600)) / 60);
    const _seconds = s - (_hours * 3600) - (_minutes * 60);

    // 시간
    if (_hours !== 0) {
        result = _hours + "시간 ";
    }

    // 분
    if (_minutes !== 0 || result !== "") {
        if ((_minutes < 10 && result !== "")) {
            result += '0';
        }
        result += _minutes + "분 ";
    }

    // 초
    result += _seconds.toFixed(fixed) + "초";

    return result;
}
