import { equal } from "assert";
import TimeFormatter from '../src/utils/timeformatter';

describe('Time Formatter Test #1', () => {
  it('초 단위 노출', () => {
    equal(TimeFormatter(10.01, 2), '10.01초');
  });
});

describe('Time Formatter Test #2', () => {
  it('분 단위 노출', () => {
    equal(TimeFormatter(70.03, 1), '1분 10.0초');
  });
});

describe('Time Formatter Test #3', () => {
  it('시간 단위 노출', () => {
    equal(TimeFormatter(3672, 0), '1시간 01분 12초');
  });
});
